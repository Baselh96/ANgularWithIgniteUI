import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule, IgxGridModule, IgxCheckboxModule, IgxDatePickerModule, IgxProgressBarModule, IgxIconModule, IgxAvatarModule, IgxBadgeModule, IgxSwitchModule, IgxInputGroupModule, IgxButtonModule, IgxCsvExporterService, IgxExcelExporterService, IgxToggleModule, IgxButtonGroupModule, IgxDialogModule, IgxSliderModule, IgxListModule, IgxFilterModule } from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule, ExternalAuthService } from './authentication';
import { HomeComponent } from './home/home.component';
import { CustomGridComponent } from './customgrid/customgrid.component';
import { CategoryChartComponent } from './categorychart/categorychart.component';
import { IgxCategoryChartModule, IgxDataChartInteractivityModule, IgxSparklineModule, IgxSparklineCoreModule } from 'igniteui-angular-charts';
import { MapComponent } from './map/map.component';
import { IgxGeographicMapModule } from 'igniteui-angular-maps';
import { AwesomeGridComponent } from './awesome-grid/awesome-grid.component';
import { CrmGridComponent } from './crm-grid/crm-grid.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { FintechGridComponent } from './fintech-grid/fintech-grid.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomGridComponent,
    CategoryChartComponent,
    MapComponent,
    AwesomeGridComponent,
    CrmGridComponent,
    LoginViewComponent,
    FintechGridComponent,
    ListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HammerModule,
    BrowserAnimationsModule,
    // NOTE: `AuthenticationModule` defines child routes, must be imported before root `AppRoutingModule`
    AuthenticationModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxGridModule,
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxCategoryChartModule,
    IgxGeographicMapModule,
    IgxDataChartInteractivityModule,
    IgxProgressBarModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxSwitchModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxSparklineModule,
    IgxSparklineCoreModule,
    IgxToggleModule,
    ReactiveFormsModule,
    IgxButtonGroupModule,
    IgxDialogModule,
    IgxSliderModule,
    IgxListModule,
    IgxFilterModule,
    CommonModule
  ],
  providers: [IgxCsvExporterService, IgxExcelExporterService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private externalAuthService: ExternalAuthService) {
    /**
     * To register a social login, un-comment one or more of the following and add your service provider Client ID.
     * See https://github.com/IgniteUI/igniteui-cli/wiki/Angular-Authentication-Project-Template#add-a-third-party-social-provider
     */
    // this.externalAuthService.addGoogle('<CLIENT_ID>');

    // this.externalAuthService.addMicrosoft('<CLIENT_ID>');

    // this.externalAuthService.addFacebook('<CLIENT_ID>');
  }
}
