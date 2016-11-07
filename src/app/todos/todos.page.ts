import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SortablejsOptions } from 'angular-sortablejs';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../core/store';

@Component({
  selector: 'app-todos',
  templateUrl: 'todos.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosPage {

  constructor(private store: Store<fromRoot.RootState>) {
  }

}
