function getDataTable(data) {
    let beforeTable = '<h3>Results:</h3>';
    let tableStart = '<div><table id="resultsTable"><tbody>';
    let tableContent = '';
    let tableEnd = '</tbody></table></div>';

    tableContent += `<tr><th>Text:</th><td>${data.sentence_list[0].text}</td></tr>`;
    tableContent += `<tr><th>Sentiments Agreement:</th><td>${data.agreement}</td></tr>`;
    tableContent += `<tr><th>Confidence:</th><td>${data.confidence}</td></tr>`;
    tableContent += `<tr><th>Irony:</th><td>${data.irony}</td></tr>`;
    tableContent += `<tr><th>Model:</th><td>${data.model}</td></tr>`;
    tableContent += `<tr><th>Score Tag:</th><td>${data.score_tag}</td></tr>`;
    tableContent += `<tr><th>Subjectivity:</th><td>${data.subjectivity}</td></tr>`;

    return beforeTable+tableStart+tableContent+tableEnd;
}

export { getDataTable }