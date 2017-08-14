export interface Book {
    toString(): string;
  }  

export class Other implements Book {
  toString() {
      return 'Other';
  }
}

export function getVersion() {
  return '1.0';
}