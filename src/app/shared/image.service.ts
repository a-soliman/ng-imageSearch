import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()

export class ImageService {

	constructor() { }

	private query	: string;
	private API_KEY	: string = environment.PIXABAY_API_KEY;
	private API_URL	: string = environment.PIXABAY_API_URL; 

}
