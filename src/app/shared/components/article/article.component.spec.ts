import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let imageEl: DebugElement;
  let infoEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    
    imageEl = fixture.debugElement.query(By.css('#img'));
    infoEl = fixture.debugElement.query(By.css('#info'));
  }));


  it('check Article Component', () => {
    component.image = 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Asuka_dera_daibutsu.jpg';
    component.info = 'Sample Text'

    fixture.detectChanges();

    expect(imageEl.properties.src).toEqual('https://upload.wikimedia.org/wikipedia/commons/2/2b/Asuka_dera_daibutsu.jpg');
    expect(infoEl.nativeElement.innerText).toEqual('Sample Text');
  });
});
