import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AngularRatingLibService } from './angular-rating-lib.service';

type Type = 'star' | 'heart';
type Limit = 5 | 10;

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./angular-rating-lib.component.html",
  styleUrls: ['./angular-rating-lib.component.css']
})
export class AngularRatingLibComponent implements OnInit, OnDestroy, AfterContentChecked {


  private _length: Limit = 5;

  counterLength: number[] = [];
  readonly ID_COUNTER: string = 'icounter';

  @Input()
  id: string = this.angularRatingLibService.generateRandomString(5);

  @Input()
  type: Type = 'star'

  @Input()
  value: number = 0;

  @Input()
  hexColor: string = '';

  @Input()
  set length(length: Limit) {
    this._length = length;
  }

  @Output()
  valueChange: EventEmitter<number> = new EventEmitter();


  @ViewChildren('check') checkboxes: QueryList<any> | undefined;

  constructor(
    private angularRatingLibService: AngularRatingLibService,
    public cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.counterLength = Array.from({ length: this._length }, (_, i) => i + 1)
  }


  ngAfterContentChecked(): void {
    if (this.value > 0 && this.checkboxes != undefined) {
      const idCheck = this.ID_COUNTER + this.id + "-" + (this.value - 1);
      const check = this.checkboxes?.find(check => check.nativeElement.id === idCheck);
      if (check) {
        check.nativeElement.checked = true;
      }
    }
  }

  ngOnDestroy(): void {

  }

  uncheckCheckboxes(except?: any) {
    this.checkboxes?.forEach(checkbox => {
      if (checkbox.nativeElement.id !== except?.id) checkbox.nativeElement.checked = false;
    });
  }

  setValue(index: number, value: any) {
    if (value.checked === false) {
      this.value = 0;
    } else {
      this.value = index + 1;
    }

    this.uncheckCheckboxes(value);
    if (value) {
      this.valueChange.emit(this.value);
    };

    this.cdr.detectChanges();
  }

  createStyleFromType(index: number) {
    const canFill = index < this.value;
    const styles = {
      ['star']: {
        fill: this.hexColor || 'yellow'
      },
      ['heart']: {
        fill: this.hexColor || 'red'
      }
    }

    return canFill ? styles[this.type] : undefined
  }

  style(index: number) {
    return this.createStyleFromType(index);
  }
}
