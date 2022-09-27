import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FuiPopupModule} from '../popup/internal';
import {FuiLocalizationModule} from '../../behaviors/localization/internal';
import {FuiUtilityModule} from '../../misc/util/internal';
import {FuiCalendarViewTitle} from './components/calendar-view-title';
import {FuiCalendarYearView} from './views/year-view';
import {FuiCalendarMonthView} from './views/month-view';
import {FuiCalendarItem} from './directives/calendar-item';
import {FuiCalendarDateView} from './views/date-view';
import {FuiDatepicker} from './components/datepicker';
import {FuiCalendarHourView} from './views/hour-view';
import {FuiCalendarMinuteView} from './views/minute-view';
import {FuiDatepickerInputDirective} from './directives/input.directive';
import {
  FuiDatepickerDirective,
  FuiDatepickerDirectiveValidator,
  FuiDatepickerDirectiveValueAccessor
} from './directives/datepicker.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FuiPopupModule,
    FuiLocalizationModule,
    FuiUtilityModule
  ],
  declarations: [
    FuiCalendarItem,

    FuiCalendarViewTitle,
    FuiCalendarYearView,
    FuiCalendarMonthView,
    FuiCalendarDateView,
    FuiCalendarHourView,
    FuiCalendarMinuteView,

    FuiDatepicker,
    FuiDatepickerDirective,
    FuiDatepickerDirectiveValueAccessor,
    FuiDatepickerDirectiveValidator,
    FuiDatepickerInputDirective
  ],
  exports: [
    FuiDatepickerDirective,
    FuiDatepickerDirectiveValueAccessor,
    FuiDatepickerDirectiveValidator,
    FuiDatepickerInputDirective
  ],
  entryComponents: [
    FuiDatepicker
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class FuiDatepickerModule {
}
