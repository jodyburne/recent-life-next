import "@testing-library/jest-dom";
// global.mock.js
global.structuredClone = (v) => JSON.parse(JSON.stringify(v));
