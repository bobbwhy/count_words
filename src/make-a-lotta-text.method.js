
export const multiplyText = (text, multiplier) => {
  if ( multiplier < 2 ) return text;

  let result = text;
  let i = 1;
  for ( ; i !== multiplier; i++ ) {
    result = result.concat(text);
  }
  return result;
}
