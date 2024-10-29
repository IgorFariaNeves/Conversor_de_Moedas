import { Component } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.scss']
})
export class CurrencyConversionComponent {
  fromCurrency: string = '';
  toCurrency: string = '';
  amount: number = 0;
  convertedValue: number | null = null;
  conversionRate: number | null = null;

  constructor(private currencyService: CurrencyService) {}

  convert() {
    this.currencyService.convertCurrency(this.fromCurrency, this.toCurrency, this.amount).subscribe(data => {
      this.conversionRate = data.rates[this.toCurrency];
  
      // Verifique se conversionRate não é null antes de fazer a multiplicação
      if (this.conversionRate !== null) {
        this.convertedValue = this.amount * this.conversionRate;
      } else {
        this.convertedValue = null; // ou defina um valor padrão, se necessário
      }
    });
  }
}
