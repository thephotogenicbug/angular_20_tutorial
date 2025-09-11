import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalExample } from './components/signal-example/signal-example';
import { User } from './components/user/user';
import { AttDirective } from './components/att-directive/att-directive';
import { LifeCycleEvent } from './components/life-cycle-event/life-cycle-event';
import { Pipes } from './components/pipes/pipes';
import { GetApi } from './components/get-api/get-api';
import { ReactiveForm } from './components/reactive-form/reactive-form';

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
  {
    path: 'life-cycle-event',
    component: LifeCycleEvent,
  },
  {
    path: 'pipes',
    component: Pipes,
  },
  {
    path: 'get-api',
    component: GetApi,
  },
  {
    path: 'reactive-form',
    component: ReactiveForm,
  },
];
