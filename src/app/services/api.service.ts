import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Video} from '../model/video';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    public url = 'https://getvideo.p.rapidapi.com/?url=';
    public httpOptions = {
        headers: new HttpHeaders(
            {
                'x-rapidapi-host': 'getvideo.p.rapidapi.com',
                'x-rapidapi-key': '7129cce79emshd1a25973055c1e3p189dfcjsn6460bd7701dd'
            }
        )
    };


    constructor(
        private httpClient: HttpClient
    ) {
    }

    getInfos(url: string): Observable<Video> {
        return this.httpClient.get<Video>(this.url + url, this.httpOptions);
    }
}
