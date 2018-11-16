export interface TodoInterface {
  id: number;
  name: string;
  tags: string[];
  isCompleted?: boolean;
  isDeleted?: boolean;
}
