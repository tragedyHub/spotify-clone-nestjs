import { FileService, FileType } from './../file/file.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { Injectable, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import * as mongoose from "mongoose"
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Track, TrackDocument } from './schemas/track.schema';

_id: new mongoose.Types.ObjectId()

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private CommentModel: Model<CommentDocument>,
                private fileService: FileService) {}

    
    
    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
        const pictutePath = this.fileService.createFile(FileType.IMAGE, picture)
        const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: pictutePath })

        return track
    }

    async getAll(count = 10, offset = 0): Promise<Track[]> {
        const tracks = await this.trackModel.find().skip(Number(offset)).limit(Number(count))
        return tracks
    }
    async getOne(id: ObjectId): Promise<Track> {
        const tracks = await this.trackModel.findById(id).populate('comments')
        return tracks
    }

    async delete(id: ObjectId): Promise<ObjectId>{
        const track = await this.trackModel.findByIdAndDelete(id)
        return track._id
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId)
        const comment = await this.CommentModel.create({...dto})
        track.comments.push(comment._id)
        await track.save()
        return comment
    }

    async listen(id: ObjectId) {
        const track = await this.trackModel.findById(id)
        track.listens += 1
        track.save()
    }

    // async search(query: string): Promise<Track[]> {
    //     const tracks = await this.trackModel.find({
    //         name: {$regex: new RegExp(query, 'i')}
    //     })
    //     return tracks;
    // }
}