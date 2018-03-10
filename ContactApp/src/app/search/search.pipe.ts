import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform{
  transform(items: any[], searchText: string) {
    //if (items == undefined) return;
    //if (searchText == undefined) return;
    searchText = searchText.toUpperCase();
    console.log(searchText + ' the number of elements'+items.length);
    return items.filter(item => item.state.includes(searchText));
  };
}
