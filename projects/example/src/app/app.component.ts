import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularRatingLibComponent } from '@jpedrofortes/angular-rating-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularRatingLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.heart)
  }
  title = 'example';

  heart: any = {
    classification: 4
  }

  star: any = {
    classification: undefined
  }

  changeClassification(value: number){
    this.heart.classification = value
    console.log(this.heart)
  }
}
