

import * as fs from 'fs';



const parseText = (text) => {
  text = cleanText(text);

  const words = text.split(' ');
  words.sort();
  const wordCounts = countTimesForWord(words.slice(0, -1));

  const sortedCounts = sortWordCounts(wordCounts);
  console.log(sortedCounts);
}

const cleanText = text =>
  text.toLowerCase().replace(/[^a-z-\s]/g, '');


const sortWordCounts = (wordCounts) => {
  const wordCountsList = [];
  const keys = Object.keys(wordCounts);
  keys.forEach( key => {
    wordCountsList.push({key, count: wordCounts[key]})
  });
  console.log(wordCountsList);
  wordCountsList.sort((a, b) => a.count > b.count ? -1 : 1);
  console.log(wordCountsList)
  return wordCountsList;
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


const run = () => {
  const fn = process.argv.splice(-1)[0];
  const fileContents = String(fs.readFileSync(`./src/${fn}`));
  parseText(fileContents)
}


run();


