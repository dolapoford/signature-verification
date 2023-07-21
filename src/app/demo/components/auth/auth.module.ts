import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { BackgroundComponent } from './background/background.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    declarations: [
      BackgroundComponent
    ]
})
export class AuthModule { }
