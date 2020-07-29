import { getDataTable } from '../src/client/js/buildTable'
const expInput = {"status":{"code":"0","msg":"OK","credits":"1","remaining_credits":"19982"},"model":"general_en","score_tag":"NONE","agreement":"AGREEMENT","subjectivity":"OBJECTIVE","confidence":"100","irony":"NONIRONIC","sentence_list":[{"text":"hello","inip":"0","endp":"4","bop":"y","confidence":"100","score_tag":"NONE","agreement":"AGREEMENT","segment_list":[{"text":"hello","segment_type":"secondary","inip":"0","endp":"4","confidence":"100","score_tag":"NONE","agreement":"AGREEMENT","polarity_term_list":[]}],"sentimented_entity_list":[],"sentimented_concept_list":[]}],"sentimented_entity_list":[],"sentimented_concept_list":[]};
const expOutput = '<h3>Results:</h3><div><table id="resultsTable"><tbody><tr><th>Text:</th><td>hello</td></tr><tr><th>Sentiments Agreement:</th><td>AGREEMENT</td></tr><tr><th>Confidence:</th><td>100</td></tr><tr><th>Irony:</th><td>NONIRONIC</td></tr><tr><th>Model:</th><td>general_en</td></tr><tr><th>Score Tag:</th><td>NONE</td></tr><tr><th>Subjectivity:</th><td>OBJECTIVE</td></tr></tbody></table></div>';
describe("Testing building results table", () => {
    test("Testing the getDataTable() function", async () => {
        const build = await getDataTable(expInput);
        expect(build).toBe(expOutput);
})});
