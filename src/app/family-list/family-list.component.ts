import { Component, OnInit } from '@angular/core';
import { Family } from '../model/family';
import { AdminFamilyService } from '../service/admin-family.service';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  families: Array<Family>;

  constructor(
    private adminFamilyService: AdminFamilyService) { }

   getAllFamilies() {
    this.adminFamilyService.getFamilies()
      .subscribe(data => this.families = data, error => console.log(error.error));

    return false;
  }

  showFamilyDetail(family) {
    this.adminFamilyService.getFamily(family.id);
  }

  ngOnInit() {
    console.log('liste-Family component marche');
    this.getAllFamilies();
  }
}
