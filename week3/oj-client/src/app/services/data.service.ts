import { Injectable } from '@angular/core';
import { Problem } from "../models/problem.model";
import { PROBLEMS } from "../mock-problems";
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

  //problems: Problem[] = PROBLEMS;

  private problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: Http) { }

  getProblems(): Observable<Problem[]> {
    //return this.problems;
    this.http.get("api/v1/problems")
      .toPromise()
      .then((res: Response) => {
        this.problemSource.next(res.json());
      })
      .catch(this.handleError);

    return this.problemSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problems/${id}`)
                    .toPromise()
                    .then((res: Response) => res.json())
                    .catch(this.handleError);
  }

  /*addProblem(problem: Problem): void{
    problem.id = this.problems.length + 1;
    this.problems.push(problem);
  }*/

  addProblem(problem: Problem): Promise<Problem> {
    let headers = new Headers ({'content-type': 'application/json' });
    return this.http.post('api/v1/problems', problem, headers)
      .toPromise()
      .then((res: Response) => {
        this.getProblems();
        return res.json();
      })
      .catch(this.handleError);
  }

  //error handler
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  //for demo purposes only
    return Promise.reject(error.body || error);
  }
}
