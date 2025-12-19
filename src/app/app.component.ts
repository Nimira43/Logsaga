import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'logsaga'
}
