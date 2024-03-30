import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nxg-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class NxgHeaderComponent implements OnInit {
  @ViewChild('navbarRef', { static: true }) navbarRef!: ElementRef;
  @ViewChild('listRef', { static: true }) listRef!: ElementRef;
  constructor(private renderer: Renderer2) {
    window.onscroll = () => {
      this.scrollFunction();
    };

  }
  ngOnInit(): void {
    document.querySelector('.navbar-toggler')?.addEventListener('click', () => {
      document.querySelector('.navbar-toggler-line')?.classList.toggle('open');
    });



  }
  scrollFunction() {
    const navbar = document.getElementById("navbar") as HTMLElement;
    const listItems = this.listRef.nativeElement.querySelectorAll('li a');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.navbarRef.nativeElement.style.background = "#000000";
      //this.listRef.nativeElement.style.color = "#ffffff";


    } else {
      this.navbarRef.nativeElement.style.background = "none";
    }
    listItems.forEach((item: HTMLElement) => {
      if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        item.style.color = "#fff";
      } else {
        item.style.color = "#fff";
      }
    });
  }

  handleHover(event: MouseEvent) {
    const anchor = event.target as HTMLElement;
    if (event.type === 'mouseenter') {
      this.renderer.setStyle(anchor, 'color', 'rgb(99 102 241)');
    } else {
      this.renderer.removeStyle(anchor, 'color');
    }
  }


}
