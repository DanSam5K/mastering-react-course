import {
  removeNonAlpha,
  countCharacters,
  countWords,
  log,
} from './text-helpers.js';
import freel from './mt-freel.js';

log(removeNonAlpha('Hello, World!')); // Output: HelloWorld
log(countCharacters('Hello, World!')); // Output: 13

log(countWords('Hello, World!')); // Output: 2

freel.print();
