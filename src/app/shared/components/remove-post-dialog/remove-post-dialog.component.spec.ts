import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePostDialogComponent } from './remove-post-dialog.component';

describe('RemovePostDialogComponent', () => {
  let component: RemovePostDialogComponent;
  let fixture: ComponentFixture<RemovePostDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
