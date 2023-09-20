export const useGetBreadCrumbs = (pathname) => {
  const path = pathname.split('/');
  const  popped = path.pop()
  return currentPath;
}