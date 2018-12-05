import { Injectable } from '@angular/core';

import { HEROES } from '../mocks/mock-heroes';
import { HeroInterface } from '../interfaces/hero-interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(filter: string): HeroInterface[] {
    if (!filter) { return HEROES; }
    return HEROES.filter(hero => {
      if (filter === 'hero' && hero.hero) {
        return hero;
      } else if (filter === 'villain' && !hero.hero) {
        return hero;
      }

      return hero.powers.includes(filter);
    });
  }

  getIndividualHero(params: object): HeroInterface {
    return HEROES.find(hero => hero.id === +params['id']);
  }
}
