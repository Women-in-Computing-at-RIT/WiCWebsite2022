import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { WicHeaderModule } from '@app/shared/components/wic-header/wic-header.module';
import { CarouselModule } from '@app/shared/components/carousel/carousel.module';
import { ConstitutionComponent } from './sub-pages/about/constitution/constitution.component';

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
    ConstitutionComponent,
    CommitteeHeadsComponent
  ],
  imports: [ // @DARLENE if you want to use the committeehead component you make outside of this moduel, you would place the sub pages MODUEL into the imports of the module that declared the component you want to put the committee heads component into 
    CommonModule,
    WicHeaderModule,
    CarouselModule,
  ],
  exports: []  // @DARLENE You would need to export components here in order to use them outside as well
})
export class SubPagesModule { }
