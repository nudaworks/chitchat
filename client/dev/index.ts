// imports
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ConnectionBackend } from '@angular/http';

// declarations
import { AppModule } from './app/app.module';
import { AppRoutingModule } from "./app/app-routing.module";

platformBrowserDynamic().bootstrapModule(AppModule, [AppRoutingModule, ConnectionBackend]);
