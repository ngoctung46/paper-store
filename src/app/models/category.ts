export class Category {
  id: string;
  name: string;
  subCategory: Category[];
  constructor(obj?: any) {
      this.id             = obj && obj.id             || null;
      this.name           = obj && obj.name           || null;
      this.subCategory    = obj && obj.subCategory    || null;
  }
}
