# Mock-Factory-Pattern in TypeScript

This repository shows a mock-factory-pattern-example in typescript.

The mock-factory-pattern uses a combination of TypeScript's `Partial` together with a factory function to be able to create scalabe, reusable and focused test data:

```typescript
const defaultObject: ExampleType = {
  key1: 'value1',
  key2: 'value2'
  // ...
};

const createMockObject = (overwrites: Partial<ExampleType> = {}) => ({
  ...defaultObject,
  ...overwrites
});

export {
  createMockObject
};
```

You can find two implementations of this pattern here:

- [src/createMockUser.ts](./src/createMockUser.ts): simple example
- [src/createMockTodo.ts](./src/createMockTodo.ts): example using `cloneDeep` to ensure immutability.

You can read more about it in my [blog-post](tbd.) which this repository accompanies.

## Setup

To execute the tests:

- Clone this repository and `cd` into it on your terminal
- `npm install`
- `npm test`
