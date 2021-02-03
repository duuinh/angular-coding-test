import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.css']
})
export class QuestionTwoComponent implements OnInit {

  allCategories: any = [];
  filteredCategories: any = [];
  input: string = '';

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.publicapis.org/categories').subscribe(
      resp => {
        this.allCategories = resp;
        this.filteredCategories = resp;
        // console.log(resp)
      }
    )
  }

  filter() {
    // console.log(this.input);
    this.filteredCategories = this.allCategories.filter((category: string) => {
      return category.toLowerCase().includes(this.input.toLowerCase());
    });
  }

}
