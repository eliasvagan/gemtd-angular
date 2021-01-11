import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'percentString'
})
export class PercentStringPipePipe implements PipeTransform {

	transform(value: number, ...args: unknown[]): string {
		return value * 100 + '%';
	}

}
