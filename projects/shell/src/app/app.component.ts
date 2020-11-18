import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from 'auth-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor(private authService: AuthService) {
    this.authService.login('Max', 'NonOfYourBusiness!');
  }

  // @ViewChild('vc', { read: ViewContainerRef, static: true })
  // viewContainer: ViewContainerRef;

  // constructor(
  //   @Inject(Injector) private injector,
  //   @Inject(ComponentFactoryResolver) private cfr) { }

    // home(): void {
    //   this.viewContainer.clear();
    // }

    load() {
      // const comp = await import('mfe1/Component').then(m => {
      //   return m.AppComponent;
      // });
      // const factory = this.cfr.resolveComponentFactory(comp);
      // this.viewContainer.createComponent(factory, null, this.injector);
    }
}

