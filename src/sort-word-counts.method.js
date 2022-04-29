
export const sortWordCounts = (wordCounts) => {
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
