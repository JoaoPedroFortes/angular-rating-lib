# angular-rating-lib
Angular 18 lib for rating component 

## Installation
```sh
npm install @joaopedrofortes/angular-rating
```

## Usage
```javascript
import { AngularRatingLibComponent } from '@joaopedrofortes/angular-rating';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularRatingLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

```

## Example
```html
<!-- An example defining just the value directive. In this case, the component will render in star format -->
<app-rating [value]="star.classification">
  <ng-container label>
    Star Example:
  </ng-container>
</app-rating>


 <!-- An example defining the type and length. In this case, the component will render 10 options in heart format -->
<app-rating type="heart"
    [length]="10"
    [value]="heart.classification"
    (valueChange)="changeClassification($event)">
  <ng-container label>
    Heart Example:
  </ng-container>
</app-rating>


 <!-- An example defining the type and hexColor.
      In this case, the component will render 5 heart-shaped options.
      When the user chooses an option, the fill color will be 'deeppink'-->
<app-rating type="heart" [hexColor]="'#FF1493'">
  <ng-container label>
    Pink Heart Example :
  </ng-container>
</app-rating>
```

## Props
| Name      | Value         |
| --------- | ------------- |
| id: string       | number: defines the main id for component's options|
| type:Type     | defines the type of options between star and heart        |
| hexColor:string     | sets the fill color        |
| length:Limit     | sets the range of options between 5 and 10         |
| valueChange:Output     | emits an event with the rating value every time the user changes         |


## Keywords
Angular, lib, rating, star rating, heart rating, Angular18
