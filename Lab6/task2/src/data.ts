import { Course } from './types';

export const courses: Course[] = [
  { id: 1, title: 'React Basics', instructor: 'Иванов', description: 'Основы React' },
  { id: 2, title: 'TypeScript', instructor: 'Петров', description: 'Типизация в JS' },
  { id: 3, title: 'Node.js', instructor: 'Сидоров', description: 'Backend на JS' },
  { id: 4, title: 'Next.js', instructor: 'Козлов', description: 'Fullstack React' },
];

export const getCourseById = (id: number): Course | undefined => {
  return courses.find(c => c.id === id);
};