import { TrackService } from './../track/track.service';
import { Module } from "@nestjs/common";

@Module({
    providers: [TrackService]
})
export class FileModule {

}