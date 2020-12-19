const core = require('@nlpjs/core');
const nlp = require('@nlpjs/nlp');
// const langenmin = require('@nlpjs/lang-en-min');
const langtr = require('@nlpjs/lang-tr');

window.nlpjs = { ...core, ...nlp, ...langtr };