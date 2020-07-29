import { getAppKey } from '../src/client/js/getKey'
const localurl = 'http://localhost:8081/appkey'


describe("Testing getting API keys from Express functionality", () => {
    test("Testing the getAppKey() function", async () => {
        const response = await getAppKey(localurl);
        expect(response).toEqual({"applicationKey": "eb1bd3ab2713b429c1577fcab18b56c6"});
})});