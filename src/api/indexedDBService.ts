import { openDB, DBSchema } from 'idb'
// import { IfoodSKU } from '../types/food'

// interface mmDB extends DBSchema {
//     'search-results': { 
//         IfoodSKU 
//     }
// }


// auto-exist checks
const dbPromise = async (storeName:string) => {
    // Check support for indexedDB on browser
    if (!('indexedDB' in window)) {
        throw new Error('Browser does not support IndexedDB')
    }
    // @args: name, version
    return await openDB('monthly-meals-db', 2, { 
      upgrade(db) {
        console.log('running upgrade');
        
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName)
        }
      } 
    });
}

const checkStorage = async (storeName:string, key:string) => {
    try {
      const db = await dbPromise(storeName)
      const tx = db.transaction(storeName, 'readonly')
      const store = tx.objectStore(storeName)
      return store.get(key)
    } catch (error) {
      return error
    }
}


const saveToStorage = async (storeName:string, val:any, key:string) => {
    try {
      console.log('saving...');
      
      const db = await dbPromise(storeName)
      
      const tx = db.transaction(storeName, 'readwrite')
      const store = tx.objectStore(storeName)
      //@args: value, key
      store.put(val, key)
      return await tx.done;
    } catch (error) {
      return error
    }
}

export default {
    checkStorage,
    saveToStorage
}