export interface ContactInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tags: string[];
  isDeleted?: boolean;
}
