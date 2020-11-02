import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayListService {

    playList = [
        {
            name: '等你下课',
            image: '/images/l1.jpg',
            author: '周杰伦',
            src: 'musics/dengnixiake.mp3'
        },
        {
            name: '红豆',
            image: '/images/l2.jpg',
            author: "王菲",
            src: 'musics/hongdou.mp3'
        },
        {
            name: '一点点',
            image: '/images/l3.jpg',
            author: '吴青峰',
            src: 'musics/hongdou.mp3'
        },
        {
            name: '幸存者',
            image: '/images/l4.jpg',
            author: 'JJ Lin',
            src: 'musics/hongdou.mp3'
        }
    ]

    getAll() {
        return this.playList;
    }

}
