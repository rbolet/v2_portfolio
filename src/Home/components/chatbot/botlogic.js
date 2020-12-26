export default function askBot(text) {
  const separator = /[( |,|.|;|?|!)]/;
  const words = text.split(separator);
  console.log(words);
}
