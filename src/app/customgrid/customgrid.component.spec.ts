import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCheckboxModule, IgxDatePickerModule, IgxGridModule } from 'igniteui-angular';
import { CustomGridComponent } from './customgrid.component';

describe('CustomGridComponent', () => {
  let component: CustomGridComponent;
  let fixture: ComponentFixture<CustomGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CustomGridComponent],
      imports: [FormsModule, BrowserAnimationsModule, IgxGridModule, IgxDatePickerModule, IgxCheckboxModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
