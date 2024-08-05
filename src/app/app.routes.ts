import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FormsComponent } from './components/forms/forms.component';
import { GetApiComponent } from './components/APIIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/APIIntegration/post-api/post-api.component';
import { LifecycleEventsComponent } from './components/lifecycle-events/lifecycle-events.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { HardcoreLoginComponent } from './components/Login/hardcore-login/hardcore-login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './services/auth.guard';
import { SignalsComponent } from './components/signals/signals.component';
// import { ApiLoginComponent } from './components/Login/api-login/api-login.component';

export const routes: Routes = [
    { path: 'login', component: HardcoreLoginComponent },
    //defauilt route
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: "binding", component: DatabindingComponent, canActivate: [authGuard]},
            { path: "directive", component: DirectiveComponent },
            { path: 'pipes', component: PipesComponent },
            { path: 'forms', component: FormsComponent },
            { path: 'getapi', component: GetApiComponent },
            { path: 'postapi', component: PostApiComponent },
            { path: 'cycle', component: LifecycleEventsComponent },
            { path: 'ng', component: NgContainerComponent },
            { path: 'signal', component: SignalsComponent },
        ]
    },

];
