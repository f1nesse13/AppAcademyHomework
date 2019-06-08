
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("Would you like tea?", function (tea) {
  reader.question("Would you like biscuits?", function (biscuits) {
    console.log(`Tea? ${tea} Biscuits? ${biscuits}`)
    reader.close();
  })
});
