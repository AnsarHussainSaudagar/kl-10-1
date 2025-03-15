import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expensive'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const [price] = args; // Array destructuring
    // const price = args[0];

    // const [myName, surname, fatherName]  = ["Ansar", "Saudagar", "Anwar"]; // Array destructuring
    // console.log(myName + " "  + surname);
    // console.log(fatherName + " "  + surname);

    const filteredArr = value.filter((prod : any) => {
      return prod.price >= price
      
    });
    
    return filteredArr;
  }

}
