import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, SimpleChange, SimpleChanges, Component } from '@angular/core';

import {
    HeaderComponent,
    HeaderLogoDirective,
    HeaderContentDirective,
    HeaderMenuItemDirective
} from '../header';

import testComponent from '../../test/test.component';

describe('The Header Component', () => {
    let comp: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let de: DebugElement;
    const LogoComponent = testComponent(`<aui-header>
            <aui-header-logo>
                <img src="/logo.svg" />
            </aui-header-logo>
        </aui-header>`);

    function getByCSSQuery(query, elm, all?) {
        return all ? elm.querySelectorAll(query) : elm.querySelector(query);
    }

    // async beforeEach
    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    HeaderComponent,
                    HeaderLogoDirective,
                    HeaderContentDirective,
                    HeaderMenuItemDirective,
                    LogoComponent,
                ]
            })
            .compileComponents();
    }));

    describe('Rendering the header component', () => {
        // synchronous beforeEach
        beforeEach(() => {
            fixture = TestBed.createComponent(HeaderComponent);

            comp = fixture.componentInstance;

            de = fixture.debugElement;
        });

        it('Should initialize headroom', () => {
            spyOn(comp, 'setupHeadroom');
            fixture.detectChanges();
            expect(comp.setupHeadroom).toHaveBeenCalled();
        });

        it('Should set the has-logo class if a logo was provided', () => {
            const logoFixture = TestBed.createComponent(LogoComponent);
            const logoDe = logoFixture.debugElement;

            logoFixture.detectChanges();

            const header = getByCSSQuery('.aui-header', logoDe.nativeElement);

            expect(header.classList).toContain('has-logo');
        });

        it('Should not show the content section if no content is provided', () => {
            expect(fixture.nativeElement.querySelector('.aui-header-content') === null).toBe(true);
        });
    });
});
