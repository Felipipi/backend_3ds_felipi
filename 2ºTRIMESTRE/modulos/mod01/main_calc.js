//CommomJS é o sistema nativo de
//modulos do NodeJS (.cjs)
//exige Exports/Require

const calc = require('./utils/calc.cjs');
import { danoJogador } from './utils-game';
import { sum } from './utils/calc.mjs';
console.log(danoJogador(5, 5))
