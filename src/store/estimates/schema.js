import { normalize, schema } from 'normalizr';

/* const tags = [
  { id: 1, title: 'Tag 1', description: 'Some description tag 1' },
  { id: 2, title: 'Tag 2', description: 'Some description tag 2' },
  { id: 3, title: 'Tag 2', description: 'Some description tag 3' },
  { id: 4, title: 'Tag 4', description: 'Some description tag 4' },
]; */

const originalData = [
  {
    id: 1,
    name: 'Artem',
    date: '02.12.1991',
    tags: [
      { id: 1, title: 'Tag 1', description: 'Some description tag 1' },
      { id: 2, title: 'Tag 2', description: 'Some description tag 2' },
      { id: 3, title: 'Tag 2', description: 'Some description tag 3' },
    ],
  },
  {
    id: 2,
    name: 'Ivan',
    date: '03.25.1999',
    tags: [
      { id: 1, title: 'Tag 1', description: 'Some description tag 1' },
      { id: 4, title: 'Tag 4', description: 'Some description tag 4' },
    ],
  },
];

const tags = [new schema.Entity('tags')];
const users = [new schema.Entity('users', { tags })];

const normalizedData = normalize(originalData, users);
export {
  normalizedData,
};
