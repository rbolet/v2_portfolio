import { KEYWORDS, RESPONSES } from "./keywords";

export default function getBotResponse(text) {
  const wordArray = getWords(text);
  console.log("words", wordArray);
  const matchingKeywords = matchKeyWords(wordArray);
  console.log("keywords", matchingKeywords);
  return RESPONSES[matchingKeywords[0]].respond();
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
