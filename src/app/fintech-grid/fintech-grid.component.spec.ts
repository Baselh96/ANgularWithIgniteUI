import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FintechGridComponent } from './fintech-grid.component';
import { IgxGridModule, IgxButtonModule, IgxSwitchModule, IgxSliderModule, IgxCheckboxModule, IgxDialogModule } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

describe('FintechGridComponent', () => {
  let component: FintechGridComponent;
  let fixture: ComponentFixture<FintechGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FintechGridComponent ],
      imports: [ FormsModule, BrowserAnimationsModule,
        IgxGridModule, IgxDialogModule, IgxCategoryChartModule,
        IgxButtonModule, IgxSwitchModule, IgxSliderModule, IgxCheckboxModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FintechGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
