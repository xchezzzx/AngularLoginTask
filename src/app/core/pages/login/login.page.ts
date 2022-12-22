import { Component, Input } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.less"]
})
export class LoginPage {
  @Input() value: string = "Email";
  constructor() {}
}
