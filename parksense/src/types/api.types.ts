export interface APIResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}
