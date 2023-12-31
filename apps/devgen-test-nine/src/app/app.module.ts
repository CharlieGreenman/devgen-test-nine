import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@devgen-test-nine/common/ui";
import { GlobalFooterModule } from "@devgen-test-nine/common/ui";
import { GlobalSidenavModule } from "@devgen-test-nine/common/ui";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule, GlobalSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
