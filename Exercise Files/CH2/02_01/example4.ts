// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @NgModule({
//   imports: [ BrowserModule, BrowserAnimationsModule ],
//   // ... more stuff ...
// })
// export class AppModule { }



// @Component({
//     selector: 'ng-if-else',
//     template: `
//       <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
//       show = {{show}}
//       <br>
//       <div *ngIf="show; else elseBlock">Text to show</div>
//       <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
//   `
//   })
//   class NgIfElse {
//     show: boolean = true;
//   }



// <ng-template [ngIf]="hero">
//   <div class="name">{{hero.name}}</div>
// </ng-template>