import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile: any;

  constructor(
    private activatedroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.profile = this.activatedroute.snapshot.queryParams;
    console.log(this.profile);
  }

}
