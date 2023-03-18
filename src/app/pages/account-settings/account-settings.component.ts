import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SettingsService } from './../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit{

  constructor(private settingsService: SettingsService){

  }

  ngOnInit(): void {

    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string){

    this.settingsService.changeTheme(theme);

  }

  // @ViewChild('asTheme') theme: ElementRef;

  // constructor(private renderer2: Renderer2){

  // }


  // changeTheme(themeDesc: string){

  //   const asTheme = this.theme.nativeElement;
  //   console.log(asTheme)
  //   this.renderer2.setAttribute(asTheme,'href', themeDesc);

  // }

}
