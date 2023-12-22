import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  @Input() isNewCard: boolean = true;
  @Input() card: any = null;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  userForm: FormGroup;

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: [this.card?.firstName ?? '', [Validators.required, Validators.minLength(5)]],
      lastName: [this.card?.lastName ?? '', [Validators.required, Validators.minLength(5)]],
      email: [this.card?.email ?? '', [Validators.required, Validators.email]],
      city: [this.card?.city ?? '', [Validators.required]],
    });



  }

   submitForm() {
    console.log(this.userForm);
    console.log(this.userForm.controls.email.getRawValue());

    const formData = {
      "email": this.userForm.controls.email.value,
      "city": this.userForm.controls.city.value,
      "firstName": this.userForm.controls.firstName.value,
      "lastName": this.userForm.controls.lastName.value

    };
    console.log(formData);
    if(this.isNewCard==true)
    {
      this.dataService.addUser(formData).subscribe(
        (data) => {
          console.log(data);
        }
      );
    } else{
      this.dataService.updateUser(formData).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }


    console.log('Form submitted');
    window.location.reload();
    // this.userForm.reset();

  }

  deleteCard() {
    this.dataService.deleteUser(this.userForm.controls.email.value).subscribe(
      (data) => {
        console.log(data);
      }
    );
    console.log('User Deleted');
    window.location.reload();
  }
}
