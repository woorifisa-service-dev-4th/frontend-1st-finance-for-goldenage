const API_SERVER_PORT = 3000;

async function fetchData(endpoint) {
    const response = await fetch(`http://localhost:${API_SERVER_PORT}/${endpoint}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(`Error fetching data from ${endpoint}:`, error);
        })
        .finally(() => {
            console.log(`Fetching data from ${endpoint} completed.`);
        });

    return response;
}

function updateContent(data, elementId) {
    if (data) {
        let content = data.title;

        if (content.length > 10) {
            content = content.substring(0, 10) + '...';
        }

        document.getElementById(elementId).innerText = content;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const endpoints = ['events', 'news', 'products'];
    const elementIds = ['events-content', 'news-content', 'products-content'];

    const data = [];
    for (const endpoint of endpoints) {
        const fetchedData = await fetchData(endpoint);
        data.push(fetchedData);
    }

    let index = 0;
    setInterval(() => {
        updateContent(data[index], elementIds[index]);
        index = (index + 1) % endpoints.length;
    }, 1000);

});
