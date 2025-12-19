import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { LucideAngularModule, Server, Activity, Circle, CheckCircle2, AlertTriangle, Globe} from 'lucide-angular'
import { importProvidersFrom } from '@angular/core'

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      LucideAngularModule.pick({
        Server,
        Globe,
        Activity,
        Circle,
        CheckCircle2,
        AlertTriangle,
      })
    )
  ]
})
  .catch((err) => console.error(err))
