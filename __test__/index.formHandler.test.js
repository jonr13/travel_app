const func = require("../src/client/js/app");

describe("Testing HandleSubmit", () => {  
  test("Testing HandleSubmit", () => {
      const data = {'color': 'blue'}
      expect(func.dataTrans(data).toBeDefined());
})});
