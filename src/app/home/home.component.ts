import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  title: String = 'angular-intro-p1';
  name: String = 'Andy';
  currentDay: any = new Date().getDay();
  days: Object = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };
  languages: Object[] = [
    {
      names: ['English', 'Spanish'],
      country: 'America'
    },
    {
      names: ['Spanish', 'Arabic'],
      country: 'Spain'
    },
    {
      names: ['French', 'Basque'],
      country: 'France'
    },
    {
      names: ['German', 'English'],
      country: 'Germany'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('Hello');
  }

  renderThisDay() {
    return this.days[this.currentDay];
  }

  renderSpokenLanguages(languages) {
    return languages.join(', ');
  }

  ignoreLanguage(language): Boolean {
    const languageToIgnore = 'English';
    return !language.names.includes(languageToIgnore);
  }

  ngOnDestroy() {
    console.log('Goodbye');
  }

}
