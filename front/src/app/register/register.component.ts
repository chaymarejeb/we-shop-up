import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  focus;
  focus1;
  focus2;
  errorMessage: string = '';
  registerUserData: User = { };
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    console.log ('form');
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log ('res', res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special-events']);
      },
      err => console.log(err)
    );
  }


}
