var natural = require('natural')
// TOKENIZER
var myString = "I'm surprised! I didn't know how you make it.";

var tokenizer = new natural.RegexpTokenizer({pattern: /[!?.]/});

console.log(tokenizer.tokenize(myString));

// STEMMER
var stemmer = natural.PorterStemmer;

// doesn't work perfectly
console.log(stemmer.stem("mangoes"));
console.log(stemmer.stem("awaking"));
console.log(stemmer.stem("women"));

var myString = "I am baking cakes in the ovens.";
console.log(stemmer.tokenizeAndStem(myString));

// INFLECTOR
var nounInflector = new natural.NounInflector();
console.log(nounInflector.pluralize("mouse"));
console.log(nounInflector.singularize("tomatoes"));

var countInflector = natural.CountInflector;

for (var i = 1; i <= 10; i++){
  console.log(countInflector.nth(i));
}

// NGrams
var NGrams = natural.NGrams;

var myString = "The monkey ate all of the bananas";
console.log(NGrams.ngrams(myString, 4));
