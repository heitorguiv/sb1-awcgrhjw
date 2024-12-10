export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  xAuthorization?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}