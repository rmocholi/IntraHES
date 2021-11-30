import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntraHESComponent } from './intra-hes.component';

describe('IntraHESComponent', () => {
  let component: IntraHESComponent;
  let fixture: ComponentFixture<IntraHESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntraHESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntraHESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
