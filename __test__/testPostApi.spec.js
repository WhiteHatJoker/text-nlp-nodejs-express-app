import { postMeaningCloudApi } from '../src/client/js/postApi'
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const params = '&lang=en&of=json&txt=';
const appkey = 'fake app key'
const text = 'hello'


describe("Testing posting Data to MeaningCloud's API", () => {
    test("Testing the postMeaningCloudApi() function", async () => {
        const response = await postMeaningCloudApi(baseURL, appkey, params, text);
        const score = await response.score_tag;
        const model = await response.model;
        const agreement = await response.agreement;
        const subjectivity = await response.subjectivity;
        const irony = await response.irony;
        expect(score).toEqual("NONE");
        expect(model).toEqual("general_en");
        expect(agreement).toEqual("AGREEMENT");
        expect(subjectivity).toEqual("OBJECTIVE");
        expect(irony).toEqual("NONIRONIC");
})});
