import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-base-app',
  templateUrl: './base-app.component.html',
  styleUrls: ['./base-app.component.scss']
})
export class BaseAppComponent {

  constructor(private router:Router, private route: ActivatedRoute) { }

  
}
