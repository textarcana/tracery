var tracery = require('tracery-grammar');

var grammar = tracery.createGrammar({
   'category-a': 'testing success winning'.split(' '),
   'category-b': 'checking failure losing'.split(' '),
   'origin':['#category-a# vs. #category-b#.'],
 });

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#origin#'));
