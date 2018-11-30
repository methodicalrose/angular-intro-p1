import { Component, OnInit } from '@angular/core';

import { HeroInterface } from '../interfaces/hero-interface';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroInterface[];
  filter = 'all';

  constructor(private heroService: HeroService) { }

  updateFilter(filter: string) {
    this.filter = filter;
    this.getHeroes(this.filter);
  }

  getHeroes(filter: string) {
    this.heroes = this.heroService.getHeroes(filter);
  }

  filterIsActive(filter: string): boolean {
    return this.filter === filter;
  }

  ngOnInit() {
    this.getHeroes(this.filter);
  }

}
