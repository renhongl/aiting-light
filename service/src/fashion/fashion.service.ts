import { Injectable } from '@nestjs/common';

@Injectable()
export class FashionService {

    fashion = [
        {
            keyWord: 'fashion',
            image: '/images/l1.jpg',
            desc: '黄昏漫游 | 沉溺这份日不落的浪漫'
        },
        {
            keyWord: 'fashion',
            image: '/images/l2.jpg',
            desc: "孤独患者| 无人的慵懒 坠落在朦胧夜色里"
        },
        {
            keyWord: 'fashion',
            image: '/images/l3.jpg',
            desc: '第298期：我只心动一个月亮'
        },
        {
            keyWord: 'fashion',
            image: '/images/l4.jpg',
            desc: '2020年度最新热歌TOP50'
        }
    ]

    getAll() {
        return this.fashion;
    }

}
