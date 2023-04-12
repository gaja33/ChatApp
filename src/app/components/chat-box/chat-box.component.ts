import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
export interface MessageChat {
  text: string;
  date: Date;
  user: {
    id: string | number;
    imageUrl: string;
    name: string;
  };
}

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  message = '';
  showEmojiPicker = false;
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger',
  ];
  set = 'twitter';
  @ViewChild('messageInput') messageInput: ElementRef;

  @Input() currentUserId = 1;
  @Input() conversation: MessageChat[];
  @Input() isFullScreen = true;

  @Output() onSend = new EventEmitter();
  @Output() onGoBack = new EventEmitter();

  scrollHeight;

  constructor(private router: Router) {}

  emitMessage(text) {
    if (text) {
      this.onSend.next(text);
      //this.messageInput.nativeElement.value = '';
      this.message = '';
    }
  }

  ngOnInit() {}

  goBack() {
    //this.onGoBack.next();
    this.router.navigateByUrl('/home');
  }

  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    console.log(this.message);
    const { message } = this;
    console.log(message);
    console.log(`${event.emoji.native}`);
    const text = `${message}${event.emoji.native}`;

    this.message = text;
    this.showEmojiPicker = false;
  }

  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur');
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.message = file.name;
    }
  }
}
