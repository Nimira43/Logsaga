import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { LucideAngularModule, Server, Globe, Ticket} from 'lucide-angular'
import { importProvidersFrom } from '@angular/core'

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      LucideAngularModule.pick({
        Server,
        Globe,
        Ticket,
      })
    )
  ]
})
  .catch((err) => console.error(err))
