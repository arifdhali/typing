import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client'; ngOnInit(): void {
    gsap.registerPlugin(CSSRulePlugin);
    let afterElement = CSSRulePlugin.getRule(".ani-btn::after");
    gsap.set(".animation-text", { display: "none", opacity: 0 });
    gsap.to(".ani-btn", {
      width: "200px",
      onComplete: () => {
        gsap.to(".animation-text", {
          opacity: 1,
          display: "block",
          onUpdate: () => {
            gsap.to(afterElement, {
              width: "30%",
              duration: .7,
              ease: "slow(0.7,0.7,false)",
            })
          }
        });

      }
    });

  }
}
