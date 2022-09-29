export function numericEnumKeys<T extends object>(_enum: T): Array<keyof T> {
  return Object.keys(_enum).filter((v) => Number.isNaN(Number(v))) as Array<keyof T>;
}

export function numericEnumValues<T extends object>(_enum: T): Array<T[keyof T]> {
  return Object.values(_enum).filter((v) => !Number.isNaN(Number(v))) as Array<T[keyof T]>;
}

export function numericEnumEntries<T extends object>(_enum: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(_enum).filter((v) => Number.isNaN(Number(v[0]))) as Array<[keyof T, T[keyof T]]>;
}
