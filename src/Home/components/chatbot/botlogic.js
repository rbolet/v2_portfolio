export default async function getBotResponse(text) {
  console.log(getWords(text));

  return "It lives!";
}

function getWords(text) {
  const separator = /([ ,.!"()? | *\d])/;
  const letters = /[a-z]+\w/;
  return text
    .toLowerCase()
    .split(separator)
    .filter((word) => word && letters.test(word));
}
