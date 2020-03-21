import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Video} from '../model/video';
import {Stream} from '../model/stream';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public video: Video;
    public streams: Stream[];
    public url: string;
    public loading = false;

    constructor(
        private apiService: ApiService
    ) {
    }

    ngOnInit(): void {
    }

    getInfos(): void {
        this.loading = true;
        this.apiService.getInfos(this.url).subscribe(video => {
            this.video = video;
            if (this.video.status) {
                this.streams = video.streams;
            }
            this.loading = false;
        });
    }

}
