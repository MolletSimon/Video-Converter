export interface Stream {
    url: string;
    format: string;
    format_note: string;
    extension: string;
    video_codec: string;
    audio_codec: string;
    height: number;
    width: number;
    fps: number;
    has_audio: boolean;
    has_video: boolean;
    is_hd: boolean;
    filesize_pretty: string;
}
