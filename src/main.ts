import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { DefaultLayout } from './app/layout.component';
bootstrapApplication(DefaultLayout, appConfig)
  .catch((err) => console.error(err));
