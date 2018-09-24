import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from '../model/child';
import { AdminChildService } from '../service/admin-child.service';
import { Activity } from '../model/activity';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  actualChild: Child;
  activitiesToInscribe: Activity[];

  constructor(
    private adminChildService: AdminChildService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('inscription component marche');

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (null != id) {
        this.adminChildService.getChildDetail(id)
          .subscribe(data => this.actualChild = data, error => console.log(error));
        this.adminChildService.getActivitiesToInscribe(id)
          .subscribe(data => this.activitiesToInscribe = data, error => console.log(error));
      }
    });
  }
}
