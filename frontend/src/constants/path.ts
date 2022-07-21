interface IPath {
  [key: string]: string;
}

const PATH: IPath = {
  ROOT: '/',
  HOME: '/home',
  FREE_BOARD: '/freeboard',
  RECOMMEND: '/recommend',
  LOGIN: '/login',
  OAUTH: '/oauth',
  MYPAGE: '/mypage',
  MY_REVIEWS: '/mypage/reviews',
  SEARCH: '/search',
  SEARCH_RESULT: '/search/result',
  ERROR_PAGE: '/error',
  NON_EXISTENCE_PAGE: '*',
};

export default PATH;
