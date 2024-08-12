import Category from '../models/Category';

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
