import {CalculatorComponent} from './calculator';
import {TestBed, async} from '@angular/core/testing';

describe('title component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render \'Allo, \'Allo!', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    const title = fixture.nativeElement;
    expect(title.querySelector('h1').textContent.trim()).toBe('\'Allo, \'Allo!');
  });
});
