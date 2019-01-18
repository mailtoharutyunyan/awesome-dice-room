import {NgModule} from '@angular/core';

import {RoomRoutingModule} from './room-routing.module';
import {RoomComponent} from './room.component';
import {SharedModule} from '../../shared/shared.module';
import { RoomDialogComponent } from './room-dialog/room-dialog.component';
import { PlayerSeatComponent } from './player-seat/player-seat.component';

@NgModule({
  declarations: [
    PlayerSeatComponent,
    RoomComponent,
    RoomDialogComponent,
    PlayerSeatComponent
  ],
  imports: [
    SharedModule,
    RoomRoutingModule
  ],
  entryComponents: [
    RoomDialogComponent
  ]
})
export class RoomModule { }