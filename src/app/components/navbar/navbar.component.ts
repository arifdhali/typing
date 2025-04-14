import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  // styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    gsap.registerPlugin(CSSRulePlugin);
  
    // Step 1: Show logo in center with bounce effect
    gsap.set(".logo", { opacity: 1, scale: 0 });
    gsap.to(".logo", {
      duration: 1,
      scale: 1.5,
      ease: "bounce.out",
    });
  
    // Step 2: Delay for loader effect (simulate loading)
    gsap.delayedCall(2, () => {
      // Step 3: Animate logo to navbar position
      gsap.to(".logo-loader-wrapper", {
        duration: 1,
        top: 0,
        left: 0,
        x: 0,
        y: 0,
        transform: "translate(0%, 0%)",
        ease: "power3.inOut",
        onComplete: () => {
          // Step 4: Remove fixed positioning and fade in navbar
          gsap.set(".logo-loader-wrapper", { position: "static" });
          gsap.to(".navbar", { opacity: 1, duration: 0.5 });
  
          // Animate signup button after logo settles
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
                    duration: 0.7,
                    ease: "slow(0.7,0.7,false)",
                  });
                }
              });
            }
          });
        }
      });
    });
  }
  


}
