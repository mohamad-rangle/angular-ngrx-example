import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SharedComponentsModule} from '../../shared/components/sharedComponents.module';

import {
  VideoGameDetailComponent,
  VideoGameDetailPageComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ],
  declarations: [
    VideoGameDetailComponent,
    VideoGameDetailPageComponent
  ],
  providers: []
})
export class VideoGameDetailModule {

}