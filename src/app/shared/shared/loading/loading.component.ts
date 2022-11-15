import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  loading : boolean = false;


  ngOnInit(): void {
  }

  trueLoading(){
    this.loading = true;
  }

  falseLoading(){
    this.loading = false;
  }

}
