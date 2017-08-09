
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PanelAreaComponent } from "app/panel-area/panel-area.component";
import { SettingsComponent } from "app/settings/settings/settings.component";

const appRoutes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: PanelAreaComponent},
    {path: 'settings', component: SettingsComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}