import { Component, Input, OnInit, ChangeDetectionStrategy, ContentChild, AfterContentChecked, ChangeDetectorRef } from '@angular/core';

const Headroom = require('headroom.js'); // tslint:disable-line:no-var-requires
import HEADROOMOPTIONS from './headroom-options';

import { HeaderLogoDirective, HeaderContentDirective } from './directives/index';

@Component({
    selector: 'aui-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, AfterContentChecked {
    @ContentChild(HeaderLogoDirective) logo: HeaderLogoDirective;
    @ContentChild(HeaderContentDirective) content: HeaderContentDirective;
    public hasLogo: Boolean = false;
    public hasContent: Boolean = false;
    public headroom: any;

    constructor(private ref: ChangeDetectorRef) {}

    setupHeadroom() {
        const element = document.querySelector('.aui-header');
        this.headroom = new Headroom(element, HEADROOMOPTIONS);
        this.headroom.init();
    }

    ngOnInit() {
        this.setupHeadroom();
    }

    ngAfterContentChecked() {
        const hasLogo = this.logo !== undefined;
        const hasContent = this.content !== undefined;
        const shouldUpdate = hasLogo !== this.hasLogo || hasContent !== this.hasContent;

        if (shouldUpdate) {
            this.hasLogo = hasLogo;
            this.hasContent = hasContent;

            this.ref.markForCheck();
        }
    }
}
