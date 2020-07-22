function getDataTable(data) {
    let tableStart = '<table style="width:100%">';
    let tableContent = '';
    let tableEnd = '</table>';

    tableContent += `<tr><th>Text:</th><td>${data.sentence_list[0].text}</td></tr>`;
    tableContent += `<tr><th>Agreement between Sentiments:</th><td>${data.agreement}</td></tr>`;
    tableContent += `<tr><th>Confidence:</th><td>${data.confidence}</td></tr>`;
    tableContent += `<tr><th>Irony:</th><td>${data.irony}</td></tr>`;
    tableContent += `<tr><th>Model:</th><td>${data.model}</td></tr>`;
    tableContent += `<tr><th>Score Tag:</th><td>${data.score_tag}</td></tr>`;
    tableContent += `<tr><th>Subjectivity:</th><td>${data.subjectivity}</td></tr>`;

    return tableStart+tableContent+tableEnd;
}

export { getDataTable }