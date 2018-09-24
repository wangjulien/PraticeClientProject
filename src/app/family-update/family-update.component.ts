import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminFamilyService } from '../service/admin-family.service';
import { FamilyDetail } from '../model/family-detail';
import { Child } from '../model/child';

@Component({
  selector: 'app-family-update',
  templateUrl: './family-update.component.html',
  styleUrls: ['./family-update.component.css']
})
export class FamilyUpdateComponent implements OnInit {

  actualFamily: FamilyDetail;
  newChild: Child;

  constructor(
    private adminFamilyService: AdminFamilyService,
    private route: ActivatedRoute,
    private router: Router) {
    this.actualFamily = new FamilyDetail();
    this.newChild = new Child();
  }

  onUpdateFamilySubmit() {

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

  addNewChild() {
    console.log('Enfant à ajouter : ' + JSON.stringify(this.newChild));

    this.adminFamilyService.addChildToFamily(this.actualFamily.id, this.newChild)
      .subscribe(data => { this.actualFamily = data; console.log('Nouveau enfant ajouté'); },
        error => console.log(error));
  }

  inscriptActivity(child) {
    this.router.navigate(['/inscription', child.id]);

    return false;
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
