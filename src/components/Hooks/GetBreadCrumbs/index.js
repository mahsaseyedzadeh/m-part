export const useGetBreadCrumbs = (pathname) => {
  const path = pathname.split('/');
  //To remove the first /
  path.shift();
  if (path.length > 0) {
    switch (path[0]) {
      case 'user':
        return [
          {url: '/user', label: 'ویرایش کاربر'}
        ];
      break;
      default:
        return [];
    }
  } else {
    //Home
    return [
      {url: '/', label: 'لیست کاربران'}
    ];
  }
}