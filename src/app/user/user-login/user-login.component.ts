import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import {User} from '../model/user.model';
import {UserLoginService} from './user-login.service';

declare var $: any;
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})

export class UserLoginComponent implements OnInit {
  public user: User = new User();
  public error: Error;
  constructor(
    public userLoginService: UserLoginService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }
  ngOnInit() {
    const activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    const routerState: RouterState = this.router.routerState;
    const routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;
  }

  login_close() {
    $('.login_div').fadeOut(200);
  }

  public doLogin(): void {
    this.userLoginService.login(this.user);
    $('.login_div').fadeOut(200);
  }

  public doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl('index');
  }
}
