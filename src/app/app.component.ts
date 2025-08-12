import { Component } from '@angular/core';
import { ContatoComponent } from "./components/contato/contato.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { PlanosComponent } from "./planos/planos.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [ContatoComponent, FooterComponent, HeaderComponent, HeroComponent, PlanosComponent]
})
export class AppComponent {}
