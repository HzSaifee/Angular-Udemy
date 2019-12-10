import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was Created!';
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers = [];

  constructor() { 
      setTimeout(() => {
        this.allowNewServer = true
      },3000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name is: ' + this.serverName; 
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  isServersEmpty(){
    return this.servers.length === 0 ? true : false;
  }

  onResetServers(){
    this.servers = [];
  }

}
