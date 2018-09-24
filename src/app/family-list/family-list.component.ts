import { Component, OnInit } from '@angular/core';
import { Family } from '../model/family';
import { AdminFamilyService } from '../service/admin-family.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  families: Array<Family>;

  constructor(
    private adminFamilyService: AdminFamilyService,
    private router: Router
  ) { }

   getAllFamilies() {
    this.adminFamilyService.getFamilies()
      .subscribe(data => this.families = data, error => console.log(error));

    return false;
  }

  showFamilyDetail(family) {
    console.log(JSON.stringify(family));
    this.router.navigate(['/family-update', family.id]);

    return false;
  }

  ngOnInit() {
    console.log('family-list component marche');
    this.getAllFamilies();
  }
}
