import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'imageSrcPipe'
})
export class ImageSrcPipePipe implements PipeTransform {

	transform(src: string | null): string {
		return `url(assets/${src ?? 'sprites/unknown.png'})`;
	}

}
