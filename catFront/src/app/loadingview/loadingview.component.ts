import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loadingview',
  template: `
    <div class="container-fluid" *ngIf="loadingflg">
      <div style="position: fixed;width: 100%;height:100%;top:0;left:0;background-color: rgba(0,0,0,0.5);z-index: 999" class="loadingBox">
        <img src='assets/img/ajax-loader.gif' height="100" width="100" style="position: absolute;top:50%;left:50%;margin-left: -50px; margin-top: -50px;" />
      </div>
    </div>
  `,
  styles: [`
    .loadingBox {
      position: fixed;width: 100%;height:100%;top:0;left:0;background-color: rgba(0,0,0,0.5);z-index: 999
    }
  `]
})
export class LoadingviewComponent {
  @Input()
  loadingflg: boolean;

  constructor() { }

}
