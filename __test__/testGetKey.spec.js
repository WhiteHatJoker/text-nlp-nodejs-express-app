
describe("Testing getting API keys from Express functionality", () => {
    test("Testing the getAppKey() function", async () => {
        const mockUrl = '/appkey';
        const mockResponse = {"applicationKey": "fake app key"};
        const getAppKey = jest.fn(url => mockResponse);
        const response = await getAppKey(mockUrl);
        expect(response).toEqual({"applicationKey": "fake app key"});
})});
