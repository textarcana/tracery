var tracery = require('tracery-grammar');

var grammar = tracery.createGrammar({
    'firstname':['Bilbo'],
    'middlenames':[''],
    'lastname':['Baggins'],
    'location':['Bag End'],
    'scion':['son'],
    'parentfirstname':['Lobelia'],
    'parentmiddlenames':['Sackville'],
    'parentlastname':['Baggins'],
   'origin':['#firstname# #middlenames# #lastname# of #location#, #scion# of #parentfirstname# #parentmiddlenames# #parentlastname#.'],
 });

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#origin#'));
