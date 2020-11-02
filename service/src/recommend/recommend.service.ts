import { Injectable } from '@nestjs/common';

@Injectable()
export class RecommendService {

    recommend = [
        {
            keyWord: 'fashion',
            image: '/images/r1.jpg'
        },
        {
            keyWord: 'fashion',
            image: '/images/r2.jpg'
        },
        {
            keyWord: 'fashion',
            image: '/images/r3.jpg'
        },
        {
            keyWord: 'fashion',
            image: '/images/r4.jpg'
        }
    ]

    getAll() {
        return this.recommend;
    }

}
