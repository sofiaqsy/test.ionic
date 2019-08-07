import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RespuestaTopHeadlines} from '../interfaces/interfaces';
import {environment} from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUlr = environment.apiUlr;
const headers = new HttpHeaders({
    'X-Api-key': apiKey
});

@Injectable({
    providedIn: 'root'
})
export class NoticiasService {
    headlinesPage = 0;

    constructor(private http: HttpClient) {
    }

    private ejecutarQuery(query: string) {
        query = apiUlr + query;
        return this.http.get<RespuestaTopHeadlines>(query, {headers});
    }

    getTopHeadLines() {
        this.headlinesPage++;
        return this.ejecutarQuery(`/top-headlines?country=us&page=${this.headlinesPage}`);
    }

    getTopHeadLinesCategoria(categoria: string) {
        return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0a055fefdba64a9aaa3bfce3297bb548');
    }
}
