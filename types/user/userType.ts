// User-specific types

export interface User {
  _id: string;
  phone: string;
  roles: ("ADMIN" | "USER" | "MODERATOR")[];
  createdAt: string;
  updatedAt: string;
  name?: string;
}
