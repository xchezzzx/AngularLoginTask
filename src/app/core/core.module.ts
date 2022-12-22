import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { LoginPage } from "./pages/login/login.page";

const routes: Routes = [
  { path: "**", component: LoginPage }
];

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: []
})
export class CoreModule {
  constructor(
    // personService: PersonService
  ) {
    //personService.initialize();
  }
}
