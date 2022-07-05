import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from './profile.model';
import { FirebaseAuthService } from '../firebase-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: ProfileModel;

  public pages: any[] = [
    {title: 'FORMATION', url: '/formation', icon: 'information-circle'},
    {title: 'COMPETANCE', url: '/competance', icon: 'podium'},
    {title: 'EXPERIENCE', url: '/experience', icon: 'color-wand'},
    {title: 'Apropos', url: '/about', icon: 'information-circle'},
    {title: 'Sign Out', url: '', icon: 'log-out', route: true},
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService
  ) { }

  ngOnInit() {
    this.route.data
    .subscribe((result) => {
      this.user = result['data'];
    }, (err) => {})
  }

  signOut() {
    this.authService.signOut().subscribe(() => {
      this.router.navigate(['sign-in']);
    }, (error) => {
      console.log('signout error', error);
    });
  }
}
