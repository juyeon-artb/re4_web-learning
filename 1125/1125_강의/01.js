//재귀함수





let fruits1 = ["복숭아", "수박", "포도", "딸기", "오렌지"];

// for문 모든 요소 출력
console.log("===for문 모든 요소 출력===")
for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i]);
}

// for...of 모든 요소 출력
console.log("===for...of 모든 요소 출력===")
for (let fruit of fruits1) {
  console.log(fruit);
}

// forEach 모든 요소 출력
console.log("===forEach 모든 요소 출력===")
fruits1.forEach(function(fruit) {
  console.log(fruit);
});




let numbers = [3, 7, 2, 9, 5, 1, 8];

// 1. 5보다 큰 숫자만 필터링
console.log("==1==")
let greaterThanFive = numbers.filter(num => num > 5);
console.log("5보다 큰 수:", greaterThanFive);

// 2. 각 숫자를 제곱
console.log("==2==")
let squaredNumbers = numbers.map(num => num * num);
console.log("제곱:", squaredNumbers);

// 3. 오름차순 정렬
console.log("==3==")
let ascendingOrder = numbers.sort((a, b) => a - b);
console.log("오름차순 정렬:", ascendingOrder);

