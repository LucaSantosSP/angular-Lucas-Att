import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LucasHeaderComponentComponent } from './components/lucas-header-component/lucas-header-component.component';
import { LucasTimerComponentComponent } from './components/lucas-timer-component/lucas-timer-component.component';
import { LucasSimpleInterestsComponentComponent } from './components/lucas-simple-interests-component/lucas-simple-interests-component.component';
import { LucasCompoudInterestsComponentComponent } from './components/lucas-compoud-interests-component/lucas-compoud-interests-component.component';
import { LucasRandomNumbersComponentComponent } from './components/lucas-random-numbers-component/lucas-random-numbers-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LucasHeaderComponentComponent,
    LucasTimerComponentComponent,
    LucasSimpleInterestsComponentComponent,
    LucasCompoudInterestsComponentComponent,
    LucasRandomNumbersComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
