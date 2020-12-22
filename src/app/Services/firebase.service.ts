import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor(private afs: AngularFirestore) { }


  async getPropriete(isVendre : boolean) : Promise<any>{

    return new Promise((resolve, reject) => {
      try{
        this.afs
          .collection("propriete",  ref => ref.where('isVendre', '==', isVendre))
          .get()
          .subscribe((data) => {
            resolve(data);
          })
      }catch(error){
        console.error("Error retrieving data : ", error);
        reject();
      }
    });

  }

  async wow() {

    return new Promise((resolve, reject) => {
      try{
        this.afs
          .collection("wow")
          .doc("toSddZa04qK4dpwtUmBs").get().subscribe((data) => { resolve(data.data())})
      }catch(error){
        console.error("Error retrieving data : ", error);
        reject();
      }
    });

  }


}
