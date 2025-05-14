// CORONA API ====>


    let api = "https://api.rootnet.in/covid19-in/stats/history";

function fetchData() {
    let dateInput = document.getElementById("dateInput").value;
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Loading...";

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let allData = data.data;
            let matchedData = null;

            for (let i = 0; i < allData.length; i++) {
                if (allData[i].day === dateInput) {
                    matchedData = allData[i];
                    break;
                }
            }

            if (!matchedData) {
                outputDiv.innerHTML = "<p>No data found for this date.</p>";
                return;
            }

            let html = `<h2>Date: ${matchedData.day}</h2>`;
            html += `<h3>Total Cases: Confirmed: ${matchedData.summary.total}, Recovered: ${matchedData.summary.discharged}, Deaths: ${matchedData.summary.deaths}</h3>`;

            for (let j = 0; j < matchedData.regional.length; j++) {
                let state = matchedData.regional[j];
                html += `<div class="state"><strong>${state.loc}</strong><br>Confirmed: ${state.totalConfirmed}, Recovered: ${state.discharged}, Deaths: ${state.deaths}</div>`;
            }

            outputDiv.innerHTML = html;
        })
        .catch(function(error) {
            outputDiv.innerHTML = "<p>Error fetching data.</p>";
        });
}



let apiUrl = "https://api.rootnet.in/covid19-in/stats/history";

function fetchData() {
    let dateInput = document.getElementById("dateInput").value;
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Loading...";

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let allData = data.data;
            let matchedData = null;

            for (let i = 0; i < allData.length; i++) {
                if (allData[i].day === dateInput) {
                    matchedData = allData[i];
                    break;
                }
            }

            if (!matchedData) {
                outputDiv.innerHTML = "<p>No data found for this date.</p>";
                return;
            }

            let html = `<h2>Date: ${matchedData.day}</h2>`;
            html += `<h3>Total: Confirmed ${matchedData.summary.total}, Recovered ${matchedData.summary.discharged}, Deaths ${matchedData.summary.deaths}</h3>`;
            html += `<div class="cards-container">`;

            let themeCount = 5;

            for (let j = 0; j < matchedData.regional.length; j++) {
                let state = matchedData.regional[j];
                let themeClass = "card-theme-" + ((j % themeCount) + 1);

                html += `
                    <div class="card ${themeClass}">
                        <h4>${state.loc}</h4>
                        <p><strong>Confirmed:</strong> ${state.totalConfirmed}</p>
                        <p><strong>Recovered:</strong> ${state.discharged}</p>
                        <p><strong>Deaths:</strong> ${state.deaths}</p>
                    </div>
                `;
            }

            html += `</div>`;
            outputDiv.innerHTML = html;
        })
        .catch(function(error) {
            outputDiv.innerHTML = "<p>Error fetching data.</p>";
        });
}
