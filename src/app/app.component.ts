import { Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import {User} from './user/model/user.model';
import {UserLoginService} from './user/user-login/user-login.service';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentUser: User;
  constructor(
    public userLoginService: UserLoginService,
    public translate: TranslateService,
    public router: Router,
    public activatedRoute: ActivatedRoute,　
  ) {}

  ngOnInit() {
    $('#search').mouseover(function(){
      $('input[name="search"]').attr('hidden', false);
    });

    $('#search').mouseleave(function(){
      $('input[name="search"]').attr('hidden', true);
    });

    $('.dropdown').mouseover(function(){
      $(this).addClass('open');
      const icon = $(this).find('span');
      icon.removeClass('glyphicon-chevron-down');
      icon.addClass('glyphicon-chevron-up');
    });

    $('.dropdown').mouseleave(function(){
      $(this).removeClass('open');
      const icon = $(this).find('span');
      icon.removeClass('glyphicon-chevron-up');
      icon.addClass('glyphicon-chevron-down');
    });

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.userLoginService.currentUser
      .subscribe(
        data => {
          this.currentUser = data;
          let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
          let routerState: RouterState = this.router.routerState;
          let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

          if (routerStateSnapshot.url.indexOf('/login') != -1) {
            this.router.navigateByUrl('/index');
          }
        },
        error => {
          console.log(error);
        }
      );

    this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('zh');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

  login_open() {
    $('.login_div').fadeIn(200);
  }

  public doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl('/index');
  }
}
