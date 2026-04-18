export interface Article {
  id: string;
  heading: string;
  body: string;
  creatorId: string;
  published: string;
  labels: string[];
  minutesRead: number;
}

export interface Writer {
  id: string;
  fullName: string;
  about: string;
  image: string;
}