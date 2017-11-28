import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    HeaderComponent,
    HeaderLogoDirective,
    HeaderContentDirective,
    HeaderMenuItemDirective
} from './header/index';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        HeaderLogoDirective,
        HeaderMenuItemDirective,
        HeaderContentDirective
    ],
    exports: [
        HeaderComponent,
        HeaderLogoDirective,
        HeaderMenuItemDirective,
        HeaderContentDirective
    ]
})
export class HeaderModule {
}
