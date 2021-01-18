import { Pipe, PipeTransform } from '@angular/core';
import * as Colors from '../json/colors.json';

@Pipe({
	name: 'rarityColor'
})
export class RarityColorPipe implements PipeTransform {

	transform(rarity: number): string {
		return Colors.rarity[rarity] ?? '#ffffff';
	}
}
