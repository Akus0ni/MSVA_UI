import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './shared/default/default.component';
import { HomeComponent } from './pageModules/home/home.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './pageModules/admin/admin.component';
import { CircularsComponent } from './pageModules/circulars/circulars.component';


const routes: Routes = [
  {
    path: "", component: DefaultComponent,
    children: [
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "admin", component: AdminComponent },
      { path: "circulars", component: CircularsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
