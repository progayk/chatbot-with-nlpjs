const core = require('@nlpjs/core');
const nlp = require('@nlpjs/nlp');
const ner = require('@nlpjs/ner');
// const langenmin = require('@nlpjs/lang-en-min');
const langtr = require('@nlpjs/lang-tr');
const requestrn = require('@nlpjs/request-rn');

window.nlpjs = { ...core, ...nlp, ...langtr, ...ner, ...requestrn };

