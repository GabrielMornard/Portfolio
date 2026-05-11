import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { AndroidComponent } from './android/android.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({ declarations: [
        AppComponent,
        WebComponent,
        AndroidComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule.forRoot([
            { path: "", redirectTo: "", pathMatch: "full" },
        ]),
        FontAwesomeModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
