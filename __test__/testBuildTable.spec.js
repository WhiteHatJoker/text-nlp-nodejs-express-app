import { getDataTable } from '../src/client/js/buildTable'
const expinput = {"status":{"code":"0","msg":"OK","credits":"1","remaining_credits":"19982"},"model":"general_en","score_tag":"NONE","agreement":"AGREEMENT","subjectivity":"OBJECTIVE","confidence":"100","irony":"NONIRONIC","sentence_list":[{"text":"hello","inip":"0","endp":"4","bop":"y","confidence":"100","score_tag":"NONE","agreement":"AGREEMENT","segment_list":[{"text":"hello","segment_type":"secondary","inip":"0","endp":"4","confidence":"100","score_tag":"NONE","agreement":"AGREEMENT","polarity_term_list":[]}],"sentimented_entity_list":[],"sentimented_concept_list":[]}],"sentimented_entity_list":[],"sentimented_concept_list":[]};

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
