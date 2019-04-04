import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuCollection: AngularFirestoreCollection<MenuItem>;
  constructor(private afs: AngularFirestore) { }

  getMenuItems(): Observable<MenuItem[]> {
    this.menuCollection = this.afs.collection<MenuItem>('menu');
    return this.menuCollection.valueChanges();
  }
}
