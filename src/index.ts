import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([7, 3, -18, 64, -5]);
console.log(`Not sorted: ${numbersCollection.data}`);
numbersCollection.sort();
console.log(`Sorted: ${numbersCollection.data}`);

console.log('-----');

const str = new CharactersCollection('Xayab');
console.log(`Not sorted: ${str.data}`);
str.sort();
console.log(`Sorted: ${str.data}`);

console.log('-----');

const lst = new LinkedList();

lst.add(4);
lst.add(6);
lst.add(-12);
console.log(`Not sorted:`);
lst.print();

console.log(`Sorted:`);
lst.sort();
lst.print();