import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminFamilyService } from '../service/admin-family.service';
import { FamilyDetail } from '../model/family-detail';

@Component({
  selector: 'app-family-update',
  templateUrl: './family-update.component.html',
  styleUrls: ['./family-update.component.css']
})
export class FamilyUpdateComponent implements OnInit {

  actualFamily: FamilyDetail;

  constructor(
    private adminFamilyService: AdminFamilyService,
    private route: ActivatedRoute) {
      this.actualFamily = new FamilyDetail();
  }

  onSubmit() {

    if (null == this.actualFamily.id) {
      console.log('Famille à ajouter : ' + JSON.stringify(this.actualFamily));

      this.adminFamilyService.addFamily(this.actualFamily)
        .subscribe(data => { this.actualFamily = data; console.log('Nouvelle famille ajoutée'); },
                    error => console.log(error));

    } else {
      console.log('Famille à modifier : ' + JSON.stringify(this.actualFamily));

      this.adminFamilyService.updateFamily(this.actualFamily)
        .subscribe(data => { this.actualFamily = data; console.log('Enregistrement réussi'); },
                    error => console.log(error));
    }
  }

  ngOnInit() {
    console.log('family-update component marche');

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      if (null != id) {
        this.adminFamilyService.getFamilyDetail(id)
          .subscribe(data => this.actualFamily = data, error => console.log(error));
      }
    });
  }
}
