# Mock-Factory-Pattern in TypeScript

This repository shows a mock-factory-pattern-example in typescript.

The mock-factory-pattern uses a combination of TypeScript's `Partial` together with a factory function to be able to create scalabe, reusable and focused test data.

You can find two implementations of this pattern in the files [src/createMockUser.ts](./src/createMockUser.ts) (simple example) and [src/createMockTodo.ts](./src/createMockTodo.ts) (example using `cloneDeep` to ensure immutability).

You can read more about it in my [blog-post](tbd.) which this repository accompanies.

## Setup

To execute the tests:

- Clone this repository and `cd` into it on your terminal
- `npm install`
- `npm test`
