export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U
): T & U {
  let result = <T & U>{};

  for (let idFirst in first) {
    if (second.hasOwnProperty(idFirst)) {
      (<any>result)[idFirst] = (<any>first)[idFirst];
    }
  }

  return result;
}
