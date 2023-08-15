export interface Page<T>{
  content: T[];
  first: boolean;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  empty: boolean;
}
