export default function cleanSet(set, startString) {
  let txt = '';
  const ar = [];

  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        ar.push(element.slice(startString.length));
      }
    }
    txt = ar.join('-');
  }
  return txt;
}
