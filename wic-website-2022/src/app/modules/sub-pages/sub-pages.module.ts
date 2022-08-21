import { NgModule } from '@angular/core';
import { MissionComponent } from './sub-pages/about/mission/mission.component';
import { FaqComponent } from './sub-pages/about/faq/faq.component';
import { AlumniComponent } from './sub-pages/about/alumni/alumni.component';
import { ScholarshipsComponent } from './sub-pages/about/scholarships/scholarships.component';
import { TutoringComponent } from './sub-pages/about/tutoring/tutoring.component';
import { AfterHoursComponent } from './sub-pages/events/after-hours/after-hours.component';
import { UpcomingCalendarComponent } from './sub-pages/events/upcoming-calendar/upcoming-calendar.component';
import { WichacksComponent } from './sub-pages/events/wichacks/wichacks.component';
import { AnnualEventsComponent } from './sub-pages/events/annual-events/annual-events.component';
import { ProjectsComponent } from './sub-pages/committees/projects/projects.component';
import { OutreachComponent } from './sub-pages/committees/outreach/outreach.component';
import { AlliesComponent } from './sub-pages/committees/allies/allies.component';
import { SponsorComponent } from './sub-pages/sponsor/sponsor.component';
import { ContactComponent } from './sub-pages/contact/contact.component';
import { CommitteeHeadsComponent } from './sub-pages/committees/committee-heads/committee-heads.component';

import { CarouselModule } from '@app/shared/components/carousel/carousel.module';
import { WicHeaderModule } from '@app/shared/components/wic-header/wic-header.module';
import { SharedModule } from '@app/shared/shared.module';
import { WicNavbarModule } from '@app/shared/components/wic-navbar/wic-navbar.module';
import { CommonModule } from '@angular/common';
import { EventLinksComponent } from './sub-pages/events/event-links-component';
import { AboutLinksComponent } from './sub-pages/about/about-component';
import { WicSummaryListModule } from '@app/shared/components/wic-summary-list/wic-summary-list/wic-summary-list.module';
import { CommitteeLinksComponent } from './sub-pages/committees/committee-links.component';
import { CommitteeCardComponent } from './sub-pages/committee-card/committee-card.component';
import { MatCardModule } from '@angular/material/card';

// @DARLENE Modules are where you declare many components of a similar type
// I placed all the subpages here to make sure that they are togher. Plus, they require the same elements in some cases
@NgModule({
  declarations: [
    MissionComponent,
    FaqComponent,
    AlumniComponent,
    ScholarshipsComponent,
    TutoringComponent,
    AfterHoursComponent,
    UpcomingCalendarComponent,
    WichacksComponent,
    AnnualEventsComponent,
    ProjectsComponent,
    OutreachComponent,
    AlliesComponent,
    SponsorComponent,
    ContactComponent,
    CommitteeHeadsComponent,
    EventLinksComponent,
    AboutLinksComponent,
    CommitteeCardComponent,
    CommitteeLinksComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WicHeaderModule,
    CarouselModule,
    WicNavbarModule,
    WicSummaryListModule,
    MatCardModule,

  ],
  exports: [],
})
export class SubPagesModule {}
