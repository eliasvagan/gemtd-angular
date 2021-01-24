import { GameMap } from '../entities/game-map';
import { euclideanDistance } from './math-helpers';


export interface IPathFinder {
	gameMap: GameMap;
}

export interface IPath {
	start: {x: number, y: number};
	end: {x: number, y: number};
	steps: {x: number, y: number}[];
}

export interface ATile {
	x: number;
	y: number;
	cost: number;
}

export class PathFinder implements IPathFinder {

	data: ATile[];
	blockedTiles: { x: number, y: number }[] = [];

	constructor(
		public gameMap: GameMap
	) {
		this.updateData();
	}

	updateData() {
		this.data = this.gameMap.tiles.map(tile => ({
			x: tile.position.x,
			y: tile.position.y,
			cost: this.gameMap.getTileCost(tile.position)
		}));
	}

	getCell(x, y): ATile {
		try {
			return { x, y, cost: this.gameMap.getTileCost({ x, y }) };
		} catch (e) {
			console.log(e);
			return { x, y, cost: -1 };
		}

	}

	getCost(x, y, x1, y1) {
		return this.getCell(x, y).cost - this.getCell(x1, y1).cost;
	}

	getWidthInTiles() {
		return this.gameMap.width;
	}

	getHeightInTiles() {
		return this.gameMap.height;
	}


	blocked(x, y): boolean {
		return (
				 x < 0 || x >= this.getWidthInTiles()
			|| y < 0 || y >= this.getHeightInTiles()
		 	|| this.getCell(x, y).cost === -1
			|| this.blockedTiles.filter(tile => tile.x === x && tile.y === y).length >= 1
		);
	}


	getNeighbors(x, y) {
		const neighbors: ATile[] = [];

		// Check left, right, top, bottom
		if (!this.blocked(x + 1, y)) {
			neighbors.push({x: x + 1, y, cost: 1});
		}
		if (!this.blocked(x - 1, y)) {
			neighbors.push({x: x - 1, y, cost: 1});
		}
		if (!this.blocked(x, y + 1)) {
			neighbors.push({x, y: y + 1, cost: 1});
		}
		if (!this.blocked(x, y - 1)) {
			neighbors.push({x, y: y - 1, cost: 1});
		}

		return neighbors;
	}

	getPath(start: {x: number, y: number}, end: {x: number, y: number}): IPath  {
		// Read inputs

		const gameMap = this.gameMap;
		const beginTime = new Date();

		const Step = function(xC, yC, xT, yT, totalSteps, parentStep) {
			const h = euclideanDistance(
				{ position: { x: xC, y: yC } },
				{ position: { x: xT, y: yT } } // Herustic
			);
			this.x = xC;
			this.y = yC;
			this.g = totalSteps;
			this.h = h;
			this.f = totalSteps + h;
			this.parent = parentStep;
		};

		const finderContext = this;

		const pathFinder = { // Actually the A* algorithm

			closed: [], // Taken steps
			open: [], // Available steps that can be taken
			step: 0, // Step count

			addOpen(step) {
				this.open.push(step);
				return this;
			},

			// Remove a step that already exists by object memory address (not actual x and y values)
			removeOpen(step) {
				for (let i = 0; i < this.open.length; i++) {
					if (this.open[i] === step) { this.open.splice(i, 1); }
				}
				return this;
			},

			// Check if the step is already in the open set
			inOpen(step) {
				for (let i = 0; i < this.open.length; i++) {
					if (this.open[i].x === step.x && this.open[i].y === step.y) {
						return this.open[i];
					}
				}

				return false;
			},

			// Get the lowest costing tile in the open set
			getBestOpen() {
				let bestI = 0;
				for (let i = 0; i < this.open.length; i++) {
					if (this.open[i].f < this.open[bestI].f) { bestI = i; }
				}
				return this.open[bestI];
			},

			addClosed(step) {
				this.closed.push(step);
				return this;
			},

			// Check if the step is already in the closed set
			inClosed(step) {
				for (let i = 0; i < this.closed.length; i++) {
					if (this.closed[i].x === step.x && this.closed[i].y === step.y) {
						return this.closed[i];
					}
				}

				return false;
			},

			findPath(xC, yC, xT, yT) {
				let current;  // Current best open tile
				let neighbors;  // Dump of all nearby neighbor tiles
				let neighborRecord;  // Any pre-existing records of a neighbor
				let stepCost;  // Dump of a total step score for a neighbor
				let i;

				// Add the starting step
				this.reset()
					.addOpen(new Step(xC, yC, xT, yT, this.step, false));

				while (this.open.length !== 0) {
					current = this.getBestOpen();

					// Check if goal has been discovered to build a path

					if (current.x === xT && current.y === yT) {
						return this.buildPath(current, []);
					}

					// Move current into closed set
					this.removeOpen(current)
						.addClosed(current);

					// Get neighbors from the map and check them
					neighbors = finderContext.getNeighbors(current.x, current.y);
					for (i = 0; i < neighbors.length; i++) {
						// Get current step and distance from current to neighbor
						stepCost = current.g + finderContext.getCost(current.x, current.y, neighbors[i].x, neighbors[i].y);

						// Check for the neighbor in the closed set
						// then see if its cost is >= the stepCost, if so skip current neighbor
						neighborRecord = this.inClosed(neighbors[i]);
						if (neighborRecord && stepCost >= neighborRecord.g) {
							continue;
						}

						// Verify neighbor doesn't exist or new score for it is better
						neighborRecord = this.inOpen(neighbors[i]);
						if (!neighborRecord || stepCost < neighborRecord.g) {
							if (!neighborRecord) {
								this.addOpen(new Step(neighbors[i].x, neighbors[i].y, xT, yT, stepCost, current));
							} else {
								neighborRecord.parent = current;
								neighborRecord.g = stepCost;
								neighborRecord.f = stepCost + neighborRecord.h;
							}
						}
					}
				}
				return false;
			},

			// Recursive path building method
			buildPath(tile, stack) {
				stack.push(tile);
				if (tile.parent) {
					return this.buildPath(tile.parent, stack);
				} else {
					return stack;
				}
			},

			reset() { // What the name says
				this.closed = [];
				this.open = [];
				return this;
			}
		};
		const deltaTime = new Date().getTime() - beginTime.getTime();
		console.log(`Generated a path in ${deltaTime} milliseconds.`);
		const foundPath = pathFinder.findPath(start.x, start.y, end.x, end.y);

		return {
			start,
			end,
			steps: foundPath ? foundPath.reverse() : null
		};
	}

	setBlock(x: number, y: number): void {
		// Remove old tile(s)
		this.blockedTiles.push({ x, y });
		console.log('Blocking ', x, y);
	}

	getPathConnected(points: {x: number; y: number}[]): IPath {
		if (!points ?? points.length < 2) { throw Error('Not enough points supplied to pathfinder!'); }

		const combinedWalk: { x: number, y: number }[] | null = points.reduce(
			(stepsCombined: [{ x: number, y: number }], point) => {
				if (!stepsCombined) { return null; }
				const segment = this.getPath(stepsCombined[stepsCombined.length - 1], point);
				return segment.steps ? [...stepsCombined, ...segment.steps] : null;
			}, [points[0]]
		);
		return {
			start: points[0],
			end: points[points.length - 1],
			steps: combinedWalk
		};
	}
}

