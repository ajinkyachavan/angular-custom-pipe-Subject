import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DinoService {

  constructor(
    private http: HttpClient
  ) { }


}