
import { cleanText } from "./clean-text.method";
import { multiplyText} from './make-a-lotta-text.method'
import { openText } from "./open.method";
import { sortWordCounts } from "./sort-word-counts.method";


const countTimesForWord = words => {

  const wordCounts = {};

  const c = words.length;
  let i = 0;
  let word;
  let count;

  for ( ; i !== c; i++ ) {
    word = words[i];
    count = wordCounts[word];
    wordCounts[word] = !!count ? ++count : 1;
  }

  return wordCounts;
}


const parseText = text => {
  text = cleanText(text);
  const words = text.split(' ');
  const wordCounts = countTimesForWord(words.slice(0, -1));
  const sortedWordCounts = sortWordCounts(wordCounts)
  console.log(sortedWordCounts)
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
