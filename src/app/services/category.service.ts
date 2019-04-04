import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private itemCollection: AngularFirestoreCollection<Category>;
  constructor(private readonly afs: AngularFirestore) { }

  getCategories(): Observable<Category[]> {
    this.itemCollection = this.afs.collection<Category>('categories');
    return this.itemCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const category = a.payload.doc.data() as Category;
        category.id = a.payload.doc.id;
        return category;
      }))
    );
  }
}
