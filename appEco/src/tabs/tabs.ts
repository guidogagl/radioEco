import { Component } from "@angular/core";

import { HomePage } from "../pages/home/home"
import {PalinsestoPage} from "../pages/palinsesto/palinsesto";
import {LoginPage} from "../pages/login/login";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  Login = LoginPage;
  Home = HomePage;
  Palinsesto = PalinsestoPage;

  constructor() {

  }
}
