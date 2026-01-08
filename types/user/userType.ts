// Global types shared across the application
export interface User {
  _id: string;
  phone: string;
  roles: ("ADMIN" | "USER" | "MODERATOR")[];
  createdAt: string;
  updatedAt: string;
  name?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
