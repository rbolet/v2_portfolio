export default function getBotResponse(text) {
  const separator = /([ ,.!"()?])/;
  const words = text.split(separator);
  console.log(words);

  return "It lives!";
}
