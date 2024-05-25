import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.scss'],
  standalone: true,
  imports: [NgxChartsModule],
})
export class GraficoBarrasComponent implements OnInit {
  ngOnInit() {}

  data = inject(DataService);

  view: [number, number] = [400, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'below';

  colorScheme: any = {
    domain: ['#714137 ', '#24E73E', '#A30AFB ', '#00D0FE'],
  };

  get likes() {
    return this.data.likesData;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
