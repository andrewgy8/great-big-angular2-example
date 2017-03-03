import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hero, HeroService } from '../../model';

@Injectable()
export class HeroDetailService {
  constructor(private heroService: HeroService) { }

  // Returns a clone which caller may modify safely
  getHero(id: number | string): Observable<Hero> {
    if (typeof id === 'string') {
      id = parseInt(id as string, 10);
    }
    return this.heroService.getHero(id)
      .map(hero => {
        return hero ? Object.assign({}, hero) : null; // clone or null
      });
  }

  saveHero(hero: Hero) {
    return this.heroService.updateHero(hero);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/