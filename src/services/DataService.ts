import Category from '../models/Category';
import Thread from '../models/Thread';

export async function getCategories(): Promise<Array<Category>> {
  const promise = new Promise<Array<Category>>((res, rej) => {
    setTimeout(() => {
      let categories: Category[] = [];
      const programming = new Category('1', 'programming');
      categories.push(programming);
      const cooking = new Category('2', 'cooking');
      categories.push(cooking);
      const entertainment = new Category('3', 'entertainment');
      categories.push(entertainment);
      const sports = new Category('4', 'sports');
      categories.push(sports);
      const travel = new Category('5', 'travel');
      categories.push(travel);

      res(categories);
    }, 2000);
  });

  return promise;
}

export async function getThreadsByCategory(
  catId: string
): Promise<Array<Thread>> {
  const promise = new Promise<Array<Thread>>((res, rej) => {
    setTimeout(() => {
      const threads: Array<Thread> = [];
      threads.push({
        id: '1',
        views: 22,
        title: 'Thread 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userName: 'dave',
        userId: '1',
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: '1',
            views: 22,
            points: 2,
            body: 'ThreadItem 1',
            userName: 'jon',
            userId: '2',
            createdOn: new Date(),
            threadId: '1',
          },
        ],
        category: new Category('1', 'Programming'),
      });
      threads.push({
        id: '2',
        views: 2,
        title: 'Thread 2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userName: 'tim',
        userId: '2',
        points: 55,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: '1',
            views: 22,
            points: 2,
            body: 'ThreadItem 1',
            userName: 'jon',
            userId: '2',
            createdOn: new Date(),
            threadId: '2',
          },
        ],
        category: new Category('1', 'Programming'),
      });

      res(threads);
    }, 2000);
  });
  return promise;
}
