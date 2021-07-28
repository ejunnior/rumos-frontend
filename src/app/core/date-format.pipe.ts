import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateFormatPipe'
})

export class DateFormatPipe implements PipeTransform {
    transform(value: Date) {
        var datePipe = new DatePipe('en-US');
        return datePipe.transform(value,'dd/MM/yyyy');
    }
}