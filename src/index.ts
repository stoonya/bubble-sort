import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';


const numbersCollection = new NumbersCollection([7, 3, -18, 64, -5]);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersCollection.data);

const str = new CharactersCollection('Xayab');
const stringSorter = new Sorter(str);
stringSorter.sort();
console.log(str.data);