import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {
  currencies: any[] = [];
  displayedColumns: string[] = ['symbol', 'name'];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(data => {
      this.currencies = Object.keys(data.rates).map(key => ({
        symbol: key,
        name: data.rates[key]
      }));
    });
  }
}
