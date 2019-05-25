export type None = undefined | null | "";

export const rejectAttr = (obj: any, filterFn: (e: any) => any): any => {
  return Object.keys(obj)
    .filter(filterFn)
    .map(k => ({ [k]: obj[k] }))
    .reduce((res, o) => ({ ...res, ...o }), {});
};

export function mapToObj<K, V>(map: Map<K, V>): any {
  const obj: any = {};
  map.forEach((v, k) => (obj[k] = v));
  return obj;
}

export const extractKeys = (objWithDate: { [key: string]: any }): any[] =>
  objWithDate === undefined
    ? []
    : Object.keys(objWithDate).filter(key => key !== "date");
