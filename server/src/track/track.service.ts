import { FileService, FileType } from './../file/file.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { Injectable, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Track, TrackDocument } from './schemas/track.schema';

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

    async getAll(): Promise<Track[]> {
        const tracks = await this.trackModel.find()
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
}