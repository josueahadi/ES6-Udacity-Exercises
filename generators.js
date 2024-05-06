function* getEmployee() {
  console.log('the function has started');

  const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

  for (const name of names) {
    yield name;
  }

  console.log('the function has ended')
}

const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value;
generatorIterator.next().value;
generatorIterator.next().value;

// sending data into/ot of a generator

function* displayResponse(){
  const response = yield;
  console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next();
iterator.next('Hello there!');