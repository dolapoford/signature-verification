import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginComponent } from './demo/components/auth/login/login.component';
import { LoginBackgroundComponent } from './demo/components/login-background/login-background.component';
import { SignatureTableComponent } from './demo/components/signature-table/signature-table.component';
import { OtpComponent } from './demo/components/otp/otp.component';
import { SignatureVerificationComponent } from './demo/components/signature-verification/signature-verification.component';
import { SignatureVerificationDataComponent } from './demo/components/signature-verification-data/signature-verification-data.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    {path: 'table', component:SignatureTableComponent},
                    {path: 'table-data' , component:SignatureVerificationDataComponent}
                    // { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    // { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    // { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    // { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    // { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            // { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            {path: 'veri',component:SignatureVerificationComponent},
            { path: 'login', component:LoginBackgroundComponent},
            {path:'otp', component:OtpComponent},
            { path: '**', redirectTo: '/notfound' },
            
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
