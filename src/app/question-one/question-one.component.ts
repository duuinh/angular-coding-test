import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css']
})
export class QuestionOneComponent implements OnInit {
  number: number = 0;
  option: string = 'isPrime'
  output: boolean = this.isPrime();
  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
   if (this.number < 0) {
      this.number = 1;
    }
    this.number = Math.round(this.number);
    console.log(this.number);

    if (this.option == 'isPrime') {
      this.output = this.isPrime();
    }
    else if (this.option ="isFibonacci") {
      this.output = this.isFibonacci();
    }
  }

  isPrime() {
    if (this.number <= 1) {
      return false;
    }
    for(var i = 2; i < this.number; i++) {
      if(this.number % i == 0) {
        return false;
      }
    }
    return true;
  }

  isPerfectSquare(x: number) { 
    return x > 0 && Math.sqrt(x) % 1 === 0; 
  }
  
  isFibonacci() {
    return this.isPerfectSquare(5*this.number*this.number + 4) || this.isPerfectSquare(5*this.number*this.number - 4);
  }


}
