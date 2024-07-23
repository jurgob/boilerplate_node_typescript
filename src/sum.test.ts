
import {sum} from './sum';
import {test} from "node:test"
import {strictEqual} from "node:assert"

test('sum(1,2) equeals 3', () => {
    strictEqual(sum(1, 2), 3);
});