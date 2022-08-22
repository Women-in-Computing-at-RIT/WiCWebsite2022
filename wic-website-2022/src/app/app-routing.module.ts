import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//#region Toolbar Links Import
//#region About
import { MissionComponent } from './modules/sub-pages/sub-pages/about/mission/mission.component';
import { FaqComponent } from './modules/sub-pages/sub-pages/about/faq/faq.component';
import { AlumniComponent } from './modules/sub-pages/sub-pages/about/alumni/alumni.component';
import { ScholarshipsComponent } from './modules/sub-pages/sub-pages/about/scholarships/scholarships.component';
import { TutoringComponent } from './modules/sub-pages/sub-pages/about/tutoring/tutoring.component';
//#endregion About
//#region Events
import { AfterHoursComponent } from './modules/sub-pages/sub-pages/events/after-hours/after-hours.component';
import { UpcomingCalendarComponent } from './modules/sub-pages/sub-pages/events/upcoming-calendar/upcoming-calendar.component';
import { WichacksComponent } from './modules/sub-pages/sub-pages/events/wichacks/wichacks.component';
import { AnnualEventsComponent } from './modules/sub-pages/sub-pages/events/annual-events/annual-events.component';
//#endregion Events
//#region Committees
import { CommitteeHeadsComponent } from './modules/sub-pages/sub-pages/committees/committee-heads/committee-heads.component';
import { ProjectsComponent } from './modules/sub-pages/sub-pages/committees/projects/projects.component';
import { AlliesComponent } from './modules/sub-pages/sub-pages/committees/allies/allies.component';
import { OutreachComponent } from './modules/sub-pages/sub-pages/committees/outreach/outreach.component';
//#endregion Committees
//#region Direct Links
import { ContactComponent } from './modules/sub-pages/sub-pages/contact/contact.component';
import { SponsorComponent } from './modules/sub-pages/sub-pages/sponsor/sponsor.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
//#endregion Direct Links
//#endregion Toolbar Links

const routes: Routes = [
  //#region Direct Links
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'sponsor', component: SponsorComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent, pathMatch:'full'},
  //#endregion
  //#region about
  { path: 'mission', component: MissionComponent, pathMatch: 'full' },
  { path: 'faq', component: FaqComponent, pathMatch: 'full' },
  { path: 'alumni', component: AlumniComponent, pathMatch: 'full' },
  { path: 'scholarships', component: ScholarshipsComponent, pathMatch: 'full' },
  { path: 'tutoring', component: TutoringComponent, pathMatch: 'full' },
  //#endregion
  //#region events
  { path: 'afterhours', component: AfterHoursComponent, pathMatch: 'full' },
  { path: 'calendar', component: UpcomingCalendarComponent, pathMatch: 'full' },
  { path: 'wichacks', component: WichacksComponent, pathMatch: 'full' },
  { path: 'annualevents', component: AnnualEventsComponent, pathMatch: 'full' },
  //#endregion
  //#region Committees
  { path: 'committeeheads', component: CommitteeHeadsComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'allies', component: AlliesComponent, pathMatch: 'full' },
  { path: 'outreach', component: OutreachComponent, pathMatch: 'full' },
  //#endregion
  { path: '**', redirectTo:'', pathMatch: 'full' }, // redirect unknown routes to homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
