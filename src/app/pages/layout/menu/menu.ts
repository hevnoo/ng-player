// import { NbMenuItem } from '@nebular/theme';

export const menuList: any = [
  {
    title: '主页',
    icon: 'home',
    link: '/pages/home',
    meta:{
      auth:false //不需要验证
    },
    home: true,
  },
  {
    title: '搜索',
    icon: 'search',
    link: '/pages/search',
    meta:{
      auth: false
    },
  },
  {
    title: '音乐库',
    icon: 'customer-service',
    link: '/pages/library',
    meta:{
      auth: true
    },
  }

];

export const _menuList: any = [
  {
    title: '创建歌单',
    icon: 'plus',
    link: '/pages/create',
    meta:{
      auth: true
    },
  },
  {
    title: '点赞的歌曲',
    icon: 'like',
    link: '/pages/like',
    meta:{
      auth: true
    },
  },

];
