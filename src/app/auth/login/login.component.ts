import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Credentials } from 'src/app/shared/models/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  flagAuth: boolean;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  form: FormGroup;

  ngOnInit() {
    this.flagAuth = true;
    
    this.form = this.createForm();
    if(this.authService.isAuthenticated()){
      this.router.navigateByUrl('/ninja');
    }
  }

  createForm(){
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit(){
    const username = this.form.value.username;
    const password = this.form.value.password;

    const credentials:Credentials = {
      username: username,
      password: password
    }
    this.authService.login(credentials).subscribe((res) => {
      if(res){
        this.router.navigateByUrl('/ninja');
      }
    }, (error) => {
      this.flagAuth = false;
      console.error(error)
    })
  }
}
