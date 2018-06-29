const wordCount = require('./vowel-swap');
const examples = require('./vowel-swap.examples');

let numberOfErrors = 0;
examples.forEach(function(example) {
  let { input, output: expectedOutput } = example;
  let output = wordCount(input);
  if (expectedOutput !== output) {
    console.error(`Error: for the input of ${JSON.stringify(input)}, `);
    console.error(`  Expected the output of ${JSON.stringify(expectedOutput)}, `);
    console.error(`  But got ${JSON.stringify(output)} instead.`);
    numberOfErrors++;
  }
});

if (numberOfErrors === 0) {
  console.log(`All examples passed. Congratulations!!!`);
} else {
  console.log(`Please try again.`);
}
