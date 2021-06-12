import { FileModule } from './file/file.module';
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from './track/track.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        TrackModule,
        // FileModule,
        MongooseModule.forRoot(`mongodb+srv://admin:t4hQSwLGvUIzRImP@cluster0.zjvoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    ]
})
export class AppModule {

}