import {Stream} from './stream';

export interface Video {
     status: boolean;
     message: string;
     description: string;
     uploader: string;
     url: string;
     id: string;
     is_playlist: boolean;
     site: string;
     title: string;
     like_count: number;
     dislike_count: number;
     view_count: number;
     duration: number;
     upload_date: Date;
     tags: string[];
     uploader_url: string;
     thumbnail: string;
     streams: Stream[];
}
