import { Component } from '@angular/core';
import { interval, of } from 'rxjs';
import { MongoConnectService } from '../services/mongo-connect.service';

@Component({
  selector: 'app-test-observable',
  imports: [],
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css',
})
export class TestObservableComponent {
  constructor(private  mongoService: MongoConnectService){
    
  }
   observable = interval(3000);
   user1:any
   user2:any
   user3:any
  obs1(){
    this.user1 = this.observable.subscribe(data=>console.log('observer 1 :',data))
  }
  obs2(){
    this.user2 = this.observable.subscribe(data=>console.log('observer 2 :',data))
  }
  obs3(){
    this.user3 = this.observable.subscribe(data=>console.log('observer 3 :',data))
  }
  uobs1(){
    this.user1.unsubscribe();
  }
  uobs2(){
    this.user2.unsubscribe();
  }
  uobs3(){
    this.user3.unsubscribe();
  }
  
}
