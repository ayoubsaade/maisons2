import { Injectable } from '@angular/core';
/*
import { AngularFirestore } from '@angular/fire/firestore';
import { Propriete } from '../Interface/propriete'*/

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  /*
  constructor(private afs: AngularFirestore) { }


  async getPropriete(isVendre : boolean) : Promise<Propriete[]>{

    return new Promise((resolve, reject) => {
      try{
        this.afs
          .collection("propriete",  ref => ref.where('isVendre', '==', isVendre))
          .get()
          .subscribe((data) => {
            resolve(data);;
          })
      }catch(error){
        console.error("Error retrieving data : ", error);
        reject();
      }
    });

  }
*/


}
