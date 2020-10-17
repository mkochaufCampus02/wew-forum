import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {


  @Input("title")
  public title: string;

  @Input("text")
  public text: string;

  @Input("creator")
  public creator: string;

  @Input("id")
  public id: number;

  constructor() { }

  ngOnInit(): void {
  }

}

