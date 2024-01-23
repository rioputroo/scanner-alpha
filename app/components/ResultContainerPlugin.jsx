import React from 'react';

function filterResults(results) {
    let filteredResults = [];
    for (var i = 0; i < results.length; ++i) {
        if (i === 0) {
            filteredResults.push(results[i]);
            continue;
        }

        if (results[i].decodedText !== results[i - 1].decodedText) {
            filteredResults.push(results[i]);
        }
    }
    return filteredResults;
}

const ResultContainerTable = ({ data }) => {
    return (
        <table className={'Qrcode-result-table'}>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Decoded Text</td>
                    <td>Format</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ data }}</td>
                </tr>
            </tbody>
        </table>
    );
};

const ResultContainerPlugin = (props) => {
    return (
        <div className='Result-container'>
            <div className='Result-header'>Scanned results ({props})</div>
            <div className='Result-section'>
                <ResultContainerTable data={props} />
            </div>
        </div>
    );
};

export default ResultContainerPlugin;