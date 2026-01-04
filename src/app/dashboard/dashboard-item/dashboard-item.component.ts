import { Component, input } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {  
  icon = input.required<string>()
  title = input.required<string>()
}
