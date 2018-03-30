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