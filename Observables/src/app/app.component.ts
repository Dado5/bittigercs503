import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';

  constructor(private http: Http) {}

  ngOnInit(): void {
    const source$ = Observable.from(['Adam', 'Bill', 'Cow'])
                              .map(v => v.toUpperCase())
                              .map(v => 'I  am ' + v);
    source$.subscribe(
      v => console.log(v),
      err => console.error(err),
      () => console.log('completed')
    );


    // const source$ = Observable.range(25, 10);
    // source$.subscribe(
    //   v => console.log(v),
    //   err => console.error(err),
    //   () => console.log('completed')
    // );

    // this.getUser('Dado5')
    //     .subscribe(
    //       (res: Response) => console.log(res.json())
    //     );
  }

    // const btn = document.querySelector('#btn');
    // const btnStream$ = Observable.fromEvent(btn, 'click');
    //
    // btnStream$.subscribe(
    //   (e: any) => console.log(e.target.innerHTML),
    //   err => console.error(err),
    //   () =>  console.log('completed'),
    // );
    //
    // const input = document.querySelector('#input');
    // const inputStream$ = Observable.fromEvent(input, 'keydown');
    //
    // inputStream$.subscribe(
    //   (e: any)  => console.log(e.target.value),
    //   err => console.error(err),
    //   () =>  console.log('completed'),
    // );

  // const numbers = [3, 4, 7, 9, 12];
  // const numbers$ = Observable.from(numbers);
  // numbers$.subscribe(
  //   v  => console.log(v),
  //   err => console.error(err),
  //   () =>  console.log('completed'),
  // );



// getUser(username) {
//   return this.http.get('https://api.github.com/users/' + username);
// }

}
// ngOnInit(): void {
//     let promise = new Promise(resolve => {
//       console.log('promise execution');
//       setTimeout(() => {
//         resolve('promise resolved');
//       }, 1000);
//     });
//
//       promise.then(value => console.log(value));
//
//       let stream$ = new Observable(observer => {
//         console.log('observable execution');
//         observer.next(1);
//         observer.next(2);
//         let timeout = setTimeout(() => {
//           observer.next('observer next value');
//         }, 1000);
//         observer.next(3);
//         // observer.error(new Error('error!!!'));
//         observer.complete();
//
//         return () => {
//           clearTimeout(timeout);
//         }
//       });

    // let observer = {
    //   next: value => console.log(value),
    //   error: err => console.error(err),
    //   complete: () => console.log('completed!')
    // };


    // let subscription = stream$.subscribe(
    //   value => console.log(value),
    //   err => console.error(err),
    //   () => console.log('completed1!')
    // );
    //   setTimeout(() => {
    //     subscription.unsubscribe();
    //   }, 500);

  //   let subject = new Subject();
  //   subject.subscribe(
  //     v => console.log('observerA' + v)
  //   );
  //   subject.subscribe(
  //     v => console.log('observerB' + v)
  //   );
  //   subject.next(1);
  //   subject.next(2);
  //
  //   subject.subscribe(
  //     v => console.log('observerC' + v)
  //   );
  //
  //   subject.next(3);
  //
  // let observable = new Observable(observer => {
  //   observer.next(1);
  //   observer.next(2);
  // });
  //
  // observable.subscribe(
  //   v => console.log('observerAnew' + v)
  // );
  //
  // observable.subscribe(
  //   v => console.log('observerBnew' + v)
  // );
