import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'nxg-footer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class NxgFooterComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      subscribe: [null, [Validators.email]]
    });
  }
  subscribe() {
    if (this.form.invalid)
      return;

  }
}
