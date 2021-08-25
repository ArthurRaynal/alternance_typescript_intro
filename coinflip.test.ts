import {coinFlip} from "./src";

test('test coinFlip', () => {
    expect(coinFlip()).toMatch(/heads|tails/);
});