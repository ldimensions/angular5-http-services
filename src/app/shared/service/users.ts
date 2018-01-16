import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class Users {
    private apiUrl = "https://jsonplaceholder.typicode.com1";
    constructor(private http: Http,){
    }

    public getUsers(): Observable<any> {
        return this.http.get(this.apiUrl+'/users')
          .map((res:Response) => {
              return res.json()
          })
          .catch(this.handleError);
    }

    private handleError (error: Response) {
        //return Observable.throw("Error! Please try again");
        return Observable.throw(error.statusText);
        
    }

}