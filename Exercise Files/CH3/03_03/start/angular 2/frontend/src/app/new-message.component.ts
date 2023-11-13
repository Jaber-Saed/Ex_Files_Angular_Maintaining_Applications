import { Component } from '@angular/core'
import { WebService } from './web.service'
import { AuthService } from './auth.service'

@Component({
    selector: 'new-message',
    template: `
        <md-card class="card">
            <md-card-content>
                <md-input-container>
                    <textarea [(ngModel)]="message.text" mdInput placeholder="Message"></textarea>
                </md-input-container>
                <md-card-actions>
                    <button (click)="post()" md-button color="primary">POST</button>
                </md-card-actions>
            </md-card-content>
        </md-card>
    `
})
export class NewMessageComponent {

    constructor(private webService : WebService, private auth: AuthService) {}

    message = {
        owner: this.auth.name,
        text: ""
    }

    post() {
        this.webService.postMessage(this.message);
    }
}