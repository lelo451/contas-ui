import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, registerLocaleData} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import localePt from '@angular/common/locales/pt';

import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

import { NavbarComponent } from './navbar/navbar.component';

registerLocaleData(localePt, 'pt-br')

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    ToastModule,
    ConfirmDialogModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    NavbarComponent,

    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    DatePipe,

    MessageService,
    ConfirmationService,
    TranslateService,

    Title
  ]
})
export class CoreModule { }
