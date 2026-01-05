export interface ApiResponse<T> {
  error: any;
  message: string;
  result: T;
  status_code: number;
  success: boolean;
  timestamp: string;
}
