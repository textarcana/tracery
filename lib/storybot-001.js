var tracery = require('tracery-grammar');

var grammar = tracery.createGrammar({
   'category-a': 'ocean desert sea'.split(' '),
   'category-b': 'castle mountain forest tree'.split(' '),
   'person': ''.split(' '),
   'origin':['#person# traveled over #category-a.s# to get to the #category-b#.'],
 });

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#origin#'));
