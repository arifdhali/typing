import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    gsap.registerPlugin(CSSRulePlugin);
    let afterElement = CSSRulePlugin.getRule(".ani-btn::after");
    gsap.set(".animation-text", { display: "none", opacity: 0 });
    gsap.to(".ani-btn", {
      width: "120px",
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
