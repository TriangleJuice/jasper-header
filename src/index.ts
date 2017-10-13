import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderDirective } from './header.directive';
import { HeaderPipe } from './header.pipe';
import { HeaderService } from './header.service';

export * from './header.component';
export * from './header.directive';
export * from './header.pipe';
export * from './header.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HeaderDirective,
    HeaderPipe
  ],
  exports: [
    HeaderComponent,
    HeaderDirective,
    HeaderPipe
  ]
})
export class HeaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HeaderModule,
      providers: [HeaderService]
    };
  }
}
