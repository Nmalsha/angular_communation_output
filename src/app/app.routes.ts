// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOnotopiaComponent } from './create-onotopia/create-onotopia.component';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: '', component: CreateOnotopiaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
