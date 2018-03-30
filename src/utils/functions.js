export function sortListQuery(queryListFrequency) {
  // Function that sorts a list of tuple based on the second item of the tuple.
  // It returns a list of sorted interlocutors and/or activities
  queryListFrequency.sort((first, second) => second[1] - first[1]);
  let requestResult = [];
  queryListFrequency.forEach((result) => {
    requestResult = requestResult.concat(result[0]);
  });
  return requestResult;
}

function replaceAccent(tag) {
  const strAccents = tag.split('');
  let strAccentsOut = [];
  const strAccentsLen = strAccents.length;
  const accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  const accentsOut = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
  for (let y = 0; y < strAccentsLen; y++) {
    if (accents.indexOf(strAccents[y]) !== -1) {
      strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
    } else { strAccentsOut[y] = strAccents[y]; }
  }
  strAccentsOut = strAccentsOut.join('');
  return strAccentsOut;
}

export function cleanTag(tag) {
  return replaceAccent(tag.toLowerCase()).replace(/[^a-zA-Z0-9]/g, '');
}
