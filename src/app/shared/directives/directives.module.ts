import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeComponent } from './range/range.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { LengthAwarePaginatorComponent } from './length-aware-paginator/length-aware-paginator.component';
import { SortByFieldComponent } from './sort-by-field/sort-by-field.component';
import { PerPageComponent } from './per-page/per-page.component';
import { CountryFieldComponent } from './country-field/country-field.component';
import { AutoresizeDirective } from './autoresize/autoresize.directive';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { CustomSelectionComponent } from './custom-selection/custom-selection.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, PipesModule],
  exports: [
    PaginationComponent,
    RangeComponent,
    SearchFormComponent,
    LengthAwarePaginatorComponent,
    SortByFieldComponent,
    PerPageComponent,
    CountryFieldComponent,
    AutoresizeDirective,
    PhoneInputComponent,
    CustomSelectionComponent
  ],
  declarations: [
    PaginationComponent,
    RangeComponent,
    SearchFormComponent,
    LengthAwarePaginatorComponent,
    SortByFieldComponent,
    PerPageComponent,
    CountryFieldComponent,
    AutoresizeDirective,
    PhoneInputComponent,
    CustomSelectionComponent
  ]
})
export class DirectivesModule {}
