import { waitForAsync } from '@angular/core/testing';
import { waitForAsync } from '@angular/core/testing';
import { TabPanelModule } from '@diamoncode/dimond-code-ui-lib';
import { SandboxComponentEj2 } from './sandboxEj2.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SandboxComponent', () => {
  let component = SandboxComponentEj2,
    fixture: ComponentFixture<SandboxComponentEj2>,
    el: DebugElement,
    tabPanel: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabPanelModule],
      declarations: [SandboxComponentEj2],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxComponentEj2);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;

    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();
  });

  it('Should Create an app', () => {
    expect(component).toBeTruthy();
  });

  it(
    'Should fiind only one tab inside the tab conntainer',
    waitForAsync(() => {
      const tabs = tabPanel.queryAll(By.css('.tab'));

      expect(tabs).toBeTruthy();
      expect(tabs.length).toBe(1);
    })
  );

  it(
    'Should fiind the Contact tab buton marked as active',
    waitForAsync(() => {
      const selectedTab = tabPanel.query(
        By.css('.tab-panel-buttons li.selected')
      ).nativeElement;

      expect(selectedTab).toBeTruthy();
      expect(selectedTab.textContent.trim()).toBe('Contact');
    })
  );

  it(
    'Should display the  Contact tab content',
    waitForAsync(() => {
      const contactEmail = tabPanel.query(By.css('.contact-email'));

      expect(contactEmail).toBeTruthy();
    })
  );

  it(
    'should switch to the Login Tab',
    waitForAsync(() => {
      const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));

      tabButtons[0].nativeElement.click();

      fixture.detectChanges();

      const loginEmail = tabPanel.query(By.css('.login-email'));
      expect(loginEmail).toBeTruthy();

      const selectedElement = tabPanel.query(
        By.css('.tab-panel-buttons li.selected')
      ).nativeElement;

      expect(selectedElement).toBeTruthy();
      expect(selectedElement.textContent.trim()).toBe('Login');
    })
  );
});
