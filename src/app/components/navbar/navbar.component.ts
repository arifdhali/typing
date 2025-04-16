import { Component, OnInit } from '@angular/core';
import { defaultUrlMatcher, RouterLink } from '@angular/router';
import gsap from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  // styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor() { }
  logoText = "PRETEND";
  splitText: string = "";

  count: number = 0;
  isPageLoaded: boolean = false;
  ngOnInit(): void {
    gsap.registerPlugin(CSSRulePlugin);

    gsap.set([".nav", ".login-sign"], { opacity: 0, });
    gsap.set(".animation-text", { display: "none", opacity: 0 });
    this.pageLoader()

  }


  startUpAnimation() {
    gsap.to(".navbar", { opacity: 1, duration: 0.5 });
    gsap.set([".nav", ".login-sign"], { opacity: 1 });

    let afterElement = CSSRulePlugin.getRule(".ani-btn::after");
    gsap.to(".ani-btn", {
      width: "120px",
      onComplete: () => {
        gsap.to(".animation-text", {
          opacity: 1,
          display: "block",
          onUpdate: () => {
            gsap.to(afterElement, {
              width: "30%",
              duration: 0.7,
              ease: "slow(0.7,0.7,false)",
            });
          }
        });
      }
    });

  }

  pageLoader() {
    setInterval(() => {
      if (this.count >= 100) {
        this.isPageLoaded = true;
        gsap.to(".pageLoader", {
          top: "-100%",
          ease: "slow(0.7,0.7,false)",
          onComplete: () => {
            this.startUpAnimation();
          }
        })
        return;
      } else {
        this.count++
      }
    }, 10);
  }
}
