'use strict';

const expressApi = require('..');
const assert = require('assert').strict;

assert.strictEqual(expressApi(), 'Hello from expressApi');
console.info('expressApi tests passed');
