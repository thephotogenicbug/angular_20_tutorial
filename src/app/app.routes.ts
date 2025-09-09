import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalExample } from './components/signal-example/signal-example';
import { User } from './components/user/user';
import { AttDirective } from './components/att-directive/att-directive';

export const routes: Routes = [
  {
    path: 'admin',
    component: Admin,
  },
  {
    path: 'control-flow',
    component: ControlFlow,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'signal',
    component: SignalExample,
  },
  {
    path: 'user',
    component: User,
  },
  {
    path: 'attribute-directive',
    component: AttDirective,
  },
];
