import { Component } from '@angular/core';

@Component({
  selector: 'devgen-test-nine-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'devgen-test-nine';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
