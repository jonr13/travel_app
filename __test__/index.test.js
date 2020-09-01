const api = require("../src/server/index");

describe("Testing Express Server", () => {  
    test("Testing the print port function", () => {
        const port = 8080;
        expect(api.printPort(port)).toBe(`App is listening on port 8080`);
})});
