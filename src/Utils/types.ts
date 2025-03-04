export type PostType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};
export type CommentType = {
  body: string;
  email: string;
  id: number;
  name: string;
  post_id: number;
};
