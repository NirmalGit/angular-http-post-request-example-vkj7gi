export interface User {
  name: string;
  job: string;
  email?: string;
  password?: string;
}

export interface UserInfo {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}
