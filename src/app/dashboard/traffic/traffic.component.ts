import { Component } from '@angular/core'

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  dummyTrafficData = [
    {
        id: 'd1',
        value: 358,
    },
    {
        id: 'd2',
        value: 473,
    },
    {
        id: 'd3',
        value: 298,
    },
    {
        id: 'd4',
        value: 332,
    },
    {
        id: 'd5',
        value: 490,
    },
    {
        id: 'd6',
        value: 407,
    },
    {
        id: 'd7',
        value: 442,
    },
  ]
  maxTraffic = Math.max(
    ...this.dummyTrafficData.map(
      (data) => data.value
    )
  )
}
