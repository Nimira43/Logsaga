import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'
import { HeaderComponent } from './header/header.component'
import { ServerStatusComponent } from './dashboard/server-status/server-status.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LucideAngularModule,
    HeaderComponent,
    ServerStatusComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
