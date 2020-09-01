const api = require("../src/server/index");

describe("Testing Express Server", () => {  
    test("Testing the print port function", () => {
        expect(api).toBeDefined();
    })})
