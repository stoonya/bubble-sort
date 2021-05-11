import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';


const numbersCollection = new NumbersCollection([7, 3, -18, 64, -5]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);