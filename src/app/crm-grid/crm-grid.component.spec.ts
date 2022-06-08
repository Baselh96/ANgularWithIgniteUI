import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxExcelExporterService, IgxCsvExporterService } from 'igniteui-angular';
import { IgxSparklineModule, IgxSparklineCoreModule } from 'igniteui-angular-charts';

import { CrmGridComponent } from './crm-grid.component';

import {
  IgxGridModule,
  IgxAvatarModule,
  IgxBadgeModule,
  IgxButtonModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxRippleModule,
  IgxSwitchModule,
  IgxToggleModule,
  IgxCheckboxModule
} from 'igniteui-angular';
describe('CrmGridComponent', () => {
  let component: CrmGridComponent;
  let fixture: ComponentFixture<CrmGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmGridComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        IgxGridModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxButtonModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRippleModule,
        IgxSwitchModule,
        IgxToggleModule,
        IgxCheckboxModule,
        IgxSparklineModule,
        IgxSparklineCoreModule
      ],
      providers: [IgxExcelExporterService, IgxCsvExporterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
