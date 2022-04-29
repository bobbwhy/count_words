

import * as fs from 'fs';


import { cleanText } from "./clean-text.method";

import { openText } from './open.method';
import { sortWordCounts } from "./sort-word-counts.method";
import {multiplyText} from "./make-a-lotta-text.method";

const parseText = (text) => {
  text = cleanText(text);

  const words = text.split(' ');
  words.sort();
  const wordCounts = countTimesForWord(words.slice(0, -1));

  const sortedCounts = sortWordCounts(wordCounts);
  console.log(sortedCounts);
}

const countTimesForWord = (words) => {
  console.log(words)
  const c = words.length;
  let i = 1;

  let lastWord;
  let thisWord;
  let thisWordCount = 1;

  lastWord = words[0];
  const wordCounts = {
    [lastWord]: 1,
  };

  for ( ; i !== c; i++ ) {

    thisWord = words[i];
    if ( thisWord !== lastWord ) {

      wordCounts[lastWord] = thisWordCount;
      thisWord = words[i];
      thisWordCount = 1;
      lastWord = thisWord;
    }
    else
    {
      thisWordCount++;
    }
  }

  return wordCounts;

}


const timeLogs = [];

const runByMultiple = (text, multiple) => {
  text = multiplyText(text, multiple);
  const startTime = new Date();
  parseText(text);
  const endTime = new Date();
  const elapsed = endTime - startTime;
  timeLogs.push({multiple, elapsed});
}

const multiples = [
  1, 100000, 200000, 300000, 400000
];
const text = openText();
multiples.forEach(multiple => runByMultiple(text, multiple));
console.log( timeLogs );
