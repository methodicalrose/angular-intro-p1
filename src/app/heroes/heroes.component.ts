import { ActivatedRoute } from '@angular/router';
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
  filter: string;
  hasFilter: boolean;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  updateFilter(filter?: string) {
    this.filter = filter;
    this.getHeroes(this.filter);
  }

  getHeroes(filter?: string) {
    return this.route.params.subscribe(params => {
      if (params.power) {
        this.hasFilter = true;
        this.filter = params.power;
        const power: string = this.filter;
        this.heroes = this.heroService.getHeroes(power);
      } else {
        this.hasFilter = false;
        this.filter = filter;
        this.heroes = this.heroService.getHeroes(filter);
      }
    });
  }

  filterIsActive(filter?: string): boolean {
    return this.filter === filter;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
