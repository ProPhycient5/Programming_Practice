class HashTable{
    constructor(size){
      this.table = new Array(size);
      this.size = this.table.length;
    }

    hashingFn(key){
        let total = 0;
        for (let i = 0; i < key.length; i++){
            total = total + key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value){
        const idx = this.hashingFn(key);
        if(!this.table[idx]){
            this.table[idx] = []
        }
        this.table[idx].push([key, value])
    }

    get(key){
        const idx = this.hashingFn(key);
        const bucket = this.table[idx]
        if (bucket){
          const sameKeyItem = bucket.find((item) => item[0] === key)
          if (sameKeyItem){
            return sameKeyItem[1]
          }
        }
        return undefined;
    }

    remove(key){
        const idx = this.hashingFn(key);
        const bucket = this.table[idx];
        if(bucket){
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }
}


const MyHashTable = new HashTable(50);

MyHashTable.set("grapes", 10000);
MyHashTable.set("apple", 5000);
MyHashTable.set("chiku", 2000);
MyHashTable.remove("apple");
console.log(MyHashTable.render())
console.log(MyHashTable.get("grapes"));
console.log(MyHashTable.remove("apple"));