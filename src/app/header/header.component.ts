import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/assets/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isActive: boolean = false;
  
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
   if (this.authService.isAuthenticated()) {
     this.isActive = true;
   }
  }
}
