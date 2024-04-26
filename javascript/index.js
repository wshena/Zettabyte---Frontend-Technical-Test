const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  const evenNumber = number.filter(item => item % 2 == 0);
  const oddNumber = number.filter(item => item % 2 != 0);
  
  const answer = [];
  answer.push(oddNumber);
  answer.push(evenNumber);
  
  return answer;
}

console.log(result(number));