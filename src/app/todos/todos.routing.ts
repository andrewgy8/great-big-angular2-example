import { ModuleWithProviders } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { TodosPage } from './todos.page';

const routes: Routes = [
  { path: '', component: TodosPage }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
