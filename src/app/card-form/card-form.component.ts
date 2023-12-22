import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit  {
  @Input() isNewCard: boolean = true; 
  @Input() card: any = null;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  userForm: FormGroup;

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
    });
  
    // If 'card' is not null, pre-fill the form
    if (this.card) {
      this.userForm.patchValue(this.card);
    }
 
  }

  submitForm() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log(formData);
      this.isNewCard? this.dataService.addUser(this.card):this.dataService.updateUser(this.card);
  
      console.log('Form submitted');
      window.location.reload();
    }
    this.userForm.reset();

  }

  deleteCard(){
    // Handle delete card logic here
  }
}
