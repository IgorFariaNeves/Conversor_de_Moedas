import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyConversionComponent } from './currency-conversion/currency-conversion.component';
import { ConversionHistoryComponent } from './conversion-history/conversion-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/currency-list', pathMatch: 'full' },
  { path: 'currency-list', component: CurrencyListComponent },
  { path: 'currency-conversion', component: CurrencyConversionComponent },
  { path: 'conversion-history', component: ConversionHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
