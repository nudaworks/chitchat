// imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(str:any, filterQuery:string):any {

        if (!filterQuery) return str;

        var result = str.filter((item) => {
            let hasMatch = false;

            if (typeof item === 'string'){
                hasMatch = (item.toLowerCase().indexOf(filterQuery) > -1);
            }

            if (typeof item === 'object'){
                for (let k in item){
                    if (item[k].toLowerCase().indexOf(filterQuery) > -1){
                        hasMatch = true;
                    }
                }
            }

            return hasMatch ? str : false;
        });

        return result;
    }
}