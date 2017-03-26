// imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
    transform(inputData:any, propName:any, orderDirection:any):any {

        let asc;

        switch(orderDirection){
            case '+': asc = true; break;
            case '-': asc = false; break;
            case 'asc': asc = true; break;
            case 'desc': asc = false; break;
            case false: asc = false; break;
            case true: asc = true; break;
        }

        let result = inputData.sort((a, b) => {
            if (a[propName] > b[propName]){
                return asc ? 1 : -1;
            } else if (a[propName] < b[propName]){
                return !asc ? 1 : -1;
            } else {
                return 0;
            }
        });

        return result;
    }
}
