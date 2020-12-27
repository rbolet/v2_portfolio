import { KEYWORDS, RESPONSES } from "./keywords";

export default async function getBotResponse(text) {
  const wordArray = getWords(text);
  console.log(wordArray);
  const matchingKeywords = matchKeyWords(wordArray);
  console.log(matchingKeywords);

  return RESPONSES[matchingKeywords[0]].phrases[0];
}

function getWords(text) {
  const separator = /([ ,.!"()? | *\d])/;
  const letters = /[a-z]+\w/;
  return text
    .toLowerCase()
    .split(separator)
    .filter((word) => word && letters.test(word));
}

function matchKeyWords(array) {
  let matchingKeywords = [];
  for (const word of array) {
    if (KEYWORDS[word]) {
      matchingKeywords.push(KEYWORDS[word]);
    }
  }

  return matchingKeywords.length ? matchingKeywords : ["unknown"];
}
