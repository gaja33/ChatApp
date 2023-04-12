import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  currentUserId = 1;
  conversation = [
    {
      text: 'Hello good morning',
      date: new Date(),
      user: {
        id: 2,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Paco',
      },
    },
    {
      text: 'Hi!',
      date: new Date(),
      user: {
        id: 1,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben',
      },
    },
    {
      text: 'Hello good morning',
      date: new Date(),
      user: {
        id: 2,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Paco',
      },
    },
    {
      text: 'Hi!',
      date: new Date(),
      user: {
        id: 1,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben',
      },
    },
    {
      text: 'Hello good morning',
      date: new Date(),
      user: {
        id: 2,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Paco',
      },
    },
    {
      text: 'Hi!',
      date: new Date(),
      user: {
        id: 1,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  sendMessage(text) {
    this.conversation.push({
      text: text,
      date: new Date(),
      user: {
        id: this.currentUserId,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben',
      },
    });
  }
}
