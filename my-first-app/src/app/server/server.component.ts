import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = '';

    constructor() {
        this.serverId = Math.floor(Math.random() * 10);
        this.serverStatus = this.serverId > 5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }
}