import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('map', {static: true})
  public map!: IgxGeographicMapComponent;

  public ngAfterViewInit(): void {
    this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
  }
}
