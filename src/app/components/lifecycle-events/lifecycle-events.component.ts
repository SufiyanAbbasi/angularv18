import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-events',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-events.component.html',
  styleUrl: './lifecycle-events.component.css'
})
export class LifecycleEventsComponent implements OnInit, OnDestroy{

  // 1- Constructor --- automatically called when page is load---its use for variable initialization
  constructor(){
    console.log('constructor');
    
  } 

  //2- OnInit()
  ngOnInit(): void {
    console.log("oninit");
    
  }

  ngOnDestroy(){
   console.log("destroy");
   
  }
}
