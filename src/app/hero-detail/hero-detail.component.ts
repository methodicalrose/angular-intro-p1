import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HeroInterface } from '../interfaces/hero-interface';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: HeroInterface;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  getHero() {
    return this.route.params.subscribe(params => {
      this.hero = this.heroService.getIndividualHero(params);
    });
  }

  ngOnInit() {
    this.getHero();
  }

}
