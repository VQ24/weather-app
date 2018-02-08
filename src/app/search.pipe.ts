import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
	name: 'search'
})

export class SearchPipe implements PipeTransform {
	transform (cities, value) {
		return cities.filter(city => {
			return city.name.includes(value)
		})
	}
}