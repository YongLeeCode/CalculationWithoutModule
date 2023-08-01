const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// 유저가 기입한 입력 값이 문자인지 숫자인지 알 수 없다. 
// 그렇기 때문에 이런 식으로 알려줘야한다.
// function으로 넣은 이유는 밑에 outputResult 설명과 동일
function transNum(){
  let user = parseFloat(userInput.value);
  return user;
}
  
function createAndWriteOutput(operator, resulBeforeCalc, calcNumber){
  const calDescription = `${resulBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription );
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
  //객체(object) - 한 변수에 여러 가지 데이터를 한꺼번에 저장
  const logEntry = {
    opreation: operationIdentifier,
    number: prevResult,
    prevResult: operationNumber,
    result: newResult
  }

    // 객체 뒤에 .을 사용하여 특정 property를 가져올 수 있다.
    console.log(logEntry.result)
    // push의 경우 어레이에 원하는 숫자를 계속 밀어 넣는 것
    logEntries.push(logEntry);
    console.log(logEntries);
    // 위에 것과 아래 것과 결과는 비슷하게 나온다. 
    // logEntries = [transNum()]
    
}

// outputResult가 function 안에 있어야 하는 이유는 자바스크립트는 항상 위에서 아래로 읽는다.
// 그렇기 때문에 이미 읽고 지나간 곳을 다시 바꾸지 않는다.
// 하지만 function은 다르다. 함수(function)은 바로 실행되지는 않지만 호출하였을 때 실행되는 것이기 때문이다.
// 그래서 어떤 이벤트를 사용하여 변화를 주고 싶을 땐 함수 안에 집어넣어 만들어야 한다.
function add() {
  const initialResult = currentResult;
  currentResult = currentResult + transNum();
  createAndWriteOutput('+', initialResult, transNum());
  // get object
  writeToLog('ADD', initialResult, transNum(), currentResult);
}
function sub() {
  const initialResult = currentResult;
  currentResult = currentResult - transNum();
  createAndWriteOutput('-', initialResult, transNum())
  // get object
  writeToLog('SUBTRACT', initialResult, transNum(), currentResult);
}
function mul() {
  const initialResult = currentResult;
  currentResult = currentResult * transNum();
  createAndWriteOutput('*', initialResult, transNum())
  // get object
  writeToLog('MULTIPLY', initialResult, transNum(), currentResult);
}
function div() {
  const initialResult = currentResult;
  currentResult = currentResult / transNum();
  createAndWriteOutput('/', initialResult, transNum());
  // get object
  writeToLog('DIVIDE', initialResult, transNum(), currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);

