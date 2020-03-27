import { Component } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  query = {
    condition: 'and',
    rules: [
      {field: 'birthday', operator: '=', value: new Date()}
    ]
  };
   
  config: QueryBuilderConfig = {
    fields: {
      birthday: {name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        
      },
    }
  }
}

