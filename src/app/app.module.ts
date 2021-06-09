import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorServiceModule, colorSets, PageHeaderModule, } from '@ux-aspects/ux-aspects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Theme } from '@ux-aspects-core/theming';
import { UxaThemeModule } from '@ux-aspects-angular/theming';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ColorServiceModule.forRoot(colorSets.microFocus),
        PageHeaderModule,
        UxaThemeModule.forRoot(Theme.MicroFocus)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
