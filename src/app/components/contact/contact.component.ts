import { Component, ViewChild, ElementRef } from '@angular/core';
import { ContactService, IMessage } from './contact.service';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @ViewChild('f') signupForm: NgForm;
  @ViewChild('isSent') isSent: ElementRef;
  @ViewChild('notSent') notSent: ElementRef;
  
  form: IMessage = {};
  msgSent: boolean = false;
  msgNotSent: boolean = false;
 
  constructor(private contactService: ContactService) {}
 
  sendMail(form: IMessage) 
  {
    this.contactService.sendMail(form).subscribe(data => 
    {
      if (data.ok === true) 
      {
        console.log(data.ok);
        this.msgSent = true;
        setTimeout(() => {
          this.isSent.nativeElement.style.display = 'none';
        },
        3000);
      } else if(data.ok === false) {
         /* console.log(data.ok);*/
          this.msgNotSent = true;
          setTimeout(() => {
            this.notSent.nativeElement.style.display = 'none';},
          3000);
        }
    })
  }
}