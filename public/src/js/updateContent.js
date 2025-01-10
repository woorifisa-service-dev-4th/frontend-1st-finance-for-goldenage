const API_SERVER_PORT = 80;

async function fetchData(endpoint) {
    const response = await fetch(`/${API_SERVER_PORT}/${endpoint}`)
        .then(response => response.json())
        .catch(error => {
            console.error(`Error fetching data from ${endpoint}:`, error);
        });

    // 필독!!! resposne가 JSON이 아니라 배열로 Return 되고 있어요!!!!!
    // 서버 잘못 짰어요... 미안해요...ㅠㅠ
    return response ? response : null;
}

function updateContent(data, elementId) {
    if (data) {
        const content = data.title;
        console.log(content);

        const element = document.getElementById(elementId);
        if (element) {
            element.setAttribute('content', content);
        }
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
        // 필독!!! resposne가 JSON이 아니라 배열로 Return 되고 있어요!!!!!
        // 서버 잘못 짰어요... 미안해요...ㅠㅠ
        const fetchedData = data[index];
        const randomIndex = Math.floor(Math.random() * fetchedData.length);

        // 랜덤한 데이터로 업데이트
        updateContent(fetchedData[randomIndex], elementIds[index]);

        index = (index + 1) % endpoints.length;
    }, 1000);

});
