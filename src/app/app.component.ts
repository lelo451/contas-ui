import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'contas-ui';

  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.translateService.setDefaultLang('pt');
    this.translateService.get('primeng')
      .subscribe(res => this.config.setTranslation(res));
  }
}
