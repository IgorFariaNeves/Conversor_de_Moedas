import { Component } from '@angular/core';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.scss']
})
export class ConversionHistoryComponent {
  conversionHistory: any[] = [];
  displayedColumns: string[] = ['date', 'time', 'from', 'to'];

  addToHistory(conversion: any) {
    this.conversionHistory.push(conversion);
  }
}
