import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyComponent } from './components/property/property.component';
import { CBindingComponent } from './components/c-binding/c-binding.component';
import { SBindingComponent } from './components/s-binding/s-binding.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { ChildComponent } from './components/child/child.component';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertyComponent,
    CBindingComponent,
    SBindingComponent,
    EBindingComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    ChildComponent,
    BuiltInPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
