
describe("Testing getting API keys from Express functionality", () => {
    test("Testing the getAppKey() function", async () => {
        const mockUrl = '/appkey';
        const mockResponse = {"applicationKey": "eb1bd3ab2713b429c1577fcab18b56c6"};
        const getAppKey = jest.fn(url => mockResponse);
        const response = await getAppKey(mockUrl);
        expect(response).toEqual({"applicationKey": "eb1bd3ab2713b429c1577fcab18b56c6"});
})});