function itemLength(author: string) {
  let example = author;
  let result;
  result = example.substring(0, 20) + '...';
  return result;
}

function titleLength(title: string) {
  let example2 = title;
  let result;
  result = example2.substring(0, 30) + '...';
  return result;
}

function milliSec(duration: number) {
  let minutes = Math.floor(duration / 60000);
  let seconds: number = parseInt(((duration % 60000) / 1000).toFixed(0));
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

export {milliSec, titleLength, itemLength};
