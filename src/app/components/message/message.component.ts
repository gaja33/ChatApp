import { Component, Input, OnInit } from '@angular/core';
import { MessageChat } from '../chat-box/chat-box.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: MessageChat;
  @Input() position: 'left' | 'right' = 'right';

  constructor() {}

  ngOnInit(): void {}
}
