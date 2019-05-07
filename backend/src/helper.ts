export const rejectAttr = (obj: any, filterFn: (e: any) => any): any => {
  return Object.keys(obj)
    .filter(filterFn)
    .map(k => ({ [k]: obj[k] }))
    .reduce((res, o) => ({ ...res, ...o }), {});
};
