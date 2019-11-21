import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { switchMap} from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  result;
  id: any;
  name: any;
  email: any;
  term:any;
  alive = true;
  
  set;
  dis:any
  data: any;
  title: any;
  url: any;
  created_at: any;
  author: any;

  
  selectedName:any;
  neelu: Subscription;
 
  constructor(private s:DataService) {
   }

   
   
  click(set){
    this.dis=set
  
    this.s.postData(set).subscribe(resp=>console.log(resp))
   
    



   
}
 ngOnInit() {
  this.neelu=timer(0,10000).pipe(switchMap(()=>this.s.getData())).subscribe(resp=>{
    console.log(resp)
    this.result=resp['hits']
  })
    // this.s.getData().subscribe(resp=>{
    //   console.log(resp)
    //   this.result=resp;
    // })
//     this.neelu=Observable.timer(1000,10000).pipe(
//       switchMap(()=>this.s.getData())
//       ).subscribe(resp=>this.result=resp);
//       const numbers = timer(3000, 1000);
// numbers.subscribe(x => console.log(x));
    
  }

}
