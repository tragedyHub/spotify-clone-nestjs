import { FileService } from './../file/file.service';
import { CommentSchema, Comment } from './schemas/comment.schema';
import { Track ,TrackSchema } from './schemas/track.schema';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';



@Module({
    imports: [
        MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
    ],
    controllers: [TrackController],
    providers: [TrackService, FileService]
})
export class TrackModule {

}