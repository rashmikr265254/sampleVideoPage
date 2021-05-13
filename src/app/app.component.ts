import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assessment';
  insertUrl = '';
  
  uploadedDeclarationFileName = '';

  InputChange(fileInputEvent: any) {
    const firstFile = fileInputEvent.target.files[0];
    console.log(firstFile);
    this.uploadedDeclarationFileName = firstFile.name;
  }

  ngOnInit(): void {
    this.validateForm();
  }

  validateForm(){

  }
}
