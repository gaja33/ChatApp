import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { ChatAdapter, IChatController } from 'ng-chat';
import { NgChatWindowComponent } from 'ng-chat/ng-chat/components/ng-chat-window/ng-chat-window.component';
import { adapter } from '../shared/adapter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  @ViewChild('ngChatInstance') protected ngChatInstance: IChatController;

  userList = [
    {
      participantType: 0,
      id: 'HUL_USER_SALESMEN',
      displayName: 'HUL_USER_SALESMEN -SALESMEN',
      avatar: 'https://66.media.tumblr.com/avatar_9dd9bb497b75_128.png',
      status: 0,
    },
    {
      participantType: 0,
      id: 'HUL_USER_RM',
      displayName: 'HUL_USER_RM - RM',
      avatar: 'https://66.media.tumblr.com/avatar_9dd9bb497b75_128.png',
      status: 0,
    },
    {
      participantType: 0,
      id: 'HUL_USER_CCM',
      displayName: 'HUL_USER_CCM - CCM',
      avatar: 'https://68.media.tumblr.com/avatar_d28d7149f567_128.png',
      status: 1,
    },
    {
      participantType: 0,
      id: 'HUL_USER_ASM',
      displayName: 'HUL_USER_ASM - ASM',
      avatar:
        'https://pbs.twimg.com/profile_images/600707945911844864/MNogF757_400x400.jpg',
      status: 2,
    },
    {
      participantType: 0,
      id: 5,
      displayName: 'Hodor',
      avatar:
        'https://pbs.twimg.com/profile_images/378800000449071678/27f2e27edd119a7133110f8635f2c130.jpeg',
      status: 2,
    },
    {
      participantType: 0,
      id: 'HUL_USER_TSO',
      displayName: 'HUL_USER_TSO - TSO',
      avatar:
        'https://pbs.twimg.com/profile_images/378800000243930208/4fa8efadb63777ead29046d822606a57.jpeg',
      status: 1,
    },
    {
      participantType: 0,
      id: 7,
      displayName: 'John Snow',
      avatar:
        'https://pbs.twimg.com/profile_images/3456602315/aad436e6fab77ef4098c7a5b86cac8e3.jpeg',
      status: 1,
    },
    {
      participantType: 0,
      id: 'HUL_USER_RS',
      displayName: 'HUL_USER_RS - RS',
      avatar: 'http://68.media.tumblr.com/avatar_ba75cbb26da7_128.png',
      status: 2,
    },
  ];

  title = 'Chat';
  userId = 999;
  hideFriendsList: boolean = false;
  emojisEnabled = true;

  isEmojiPickerVisible = false;
  fileToUpload: any;

  windows: Window[] = [];
  @ViewChild('chatWindow') chatWindows: QueryList<NgChatWindowComponent>;

  public adapter: ChatAdapter = new adapter();

  constructor(private router: Router) {
    console.log('Dataaa');
    // this.chatWindows.
  }

  //  this.ngChatInstance.triggerOpenChatWindow(contactId);
  ngOnInit(): void {}

  addEmoji(event: any) {
    let textArea = `${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
    // this.ngChatInstance?.windows[0]?.newMessage = textArea;
    // this.ngChatInstance.windows
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onEventTriggered(namr: any) {
    console.log('onEventTriggered', namr);
    this.hideFriendsList = true;
  }
  onParticipantClicked() {}

  onParticipantChatClosed() {
    this.hideFriendsList = false;
  }

  openChat(user) {
    console.log(user, 'user');
    this.router.navigate(['/chat']);
  }

  getURL(url) {
    return `url(${url})`;
  }
}
