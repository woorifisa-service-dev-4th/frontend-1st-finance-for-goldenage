import express, { json } from 'express';
import path from 'path';
import { promises as fs } from 'fs';

const API_SERVER_PORT = 3000;
const app = express();

app.use(json());
app.use(express.static('public'));

app.get('/', (_, response) => {
    response.sendFile('index.html', { root: 'public' });
});

app.get('/deposits', (_, response) => {
    response.sendFile('deposits.html', { root: 'public' });
});

app.get('/foreign-exchange', (_, response) => {
    response.sendFile('foreign-exchange.html', { root: 'public' });
});

app.get('/loans', (_, response) => {
    response.sendFile('loans.html', { root: 'public' });
});

app.get('/funds', (_, response) => {
    response.sendFile('funds.html', { root: 'public' });
});

// JSON 데이터를 저장할 변수들
let dummyEventsData = [];
let dummyNewsData = [];
let dummyDepositsData = [];
let dummyForeignExchangeData = [];
let dummyLoansData = [];
let dummyFundsData = [];

// JSON 데이터를 비동기적으로 로드하는 함수
async function loadJSONData(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Failed to load JSON from ${filePath}:`, error);
        return [];
    }
}

// 서버 시작 전 JSON 데이터 로드
async function loadAllData() {
    dummyEventsData = await loadJSONData(path.resolve('./db/events.json'));
    dummyNewsData = await loadJSONData(path.resolve('./db/news.json'));
    dummyDepositsData = await loadJSONData(path.resolve('./db/deposits.json'));
    dummyForeignExchangeData = await loadJSONData(path.resolve('./db/foreign-exchange.json'));
    dummyLoansData = await loadJSONData(path.resolve('./db/loans.json'));
    dummyFundsData = await loadJSONData(path.resolve('./db/funds.json'));
    console.log('All JSON data loaded successfully.');
}

// 이벤트
app.get('/events', (request, response) => {
    response.json(dummyEventsData);
});

// 뉴스
app.get('/news', (request, response) => {
    response.json(dummyNewsData);
});

// 금융 상품 - 전체
app.get('/products', (request, response) => {
    const data = [
        ...dummyDepositsData,
        ...dummyFundsData,
        ...dummyLoansData,
        ...dummyForeignExchangeData,
    ];
    response.json(data);
});

// 금융 상품 - 예금
app.get('/products/deposits', (request, response) => {
    response.json(dummyDepositsData);
});

// 금융 상품 - 외환
app.get('/products/foreign-exchange', (request, response) => {
    response.json(dummyForeignExchangeData);
});

// 금융 상품 - 대출
app.get('/products/loans', (request, response) => {
    response.json(dummyLoansData);
});

// 금융 상품 - 펀드
app.get('/products/funds', (request, response) => {
    response.json(dummyFundsData);
});

//////////////////////////////////////////////////////////////////////////

// 한 페이지에 보여줄 데이터 수
const ITEMS_PER_PAGE = 5;

// Pagination
app.get('/products/deposits/:page', (request, response) => {
    const page = parseInt(request.params.page, 10) || 1; // 요청받은 페이지 번호, 기본값은 1
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // 데이터를 페이지 단위로 나눔
    const paginatedData = dummyDepositsData.slice(startIndex, endIndex);

    // 응답 데이터
    const result = {
        page,
        totalItems: dummyDepositsData.length,
        totalPages: Math.ceil(dummyDepositsData.length / ITEMS_PER_PAGE),
        data: paginatedData,
    };

    response.json(result);
});

app.get('/products/foreign-exchange/:page', (request, response) => {
    const page = parseInt(request.params.page, 10) || 1; // 요청받은 페이지 번호, 기본값은 1
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // 데이터를 페이지 단위로 나눔
    const paginatedData = dummyForeignExchangeData.slice(startIndex, endIndex);

    // 응답 데이터
    const result = {
        page,
        totalItems: dummyForeignExchangeData.length,
        totalPages: Math.ceil(dummyForeignExchangeData.length / ITEMS_PER_PAGE),
        data: paginatedData,
    };

    response.json(result);
});

app.get('/products/loans/:page', (request, response) => {
    const page = parseInt(request.params.page, 10) || 1; // 요청받은 페이지 번호, 기본값은 1
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // 데이터를 페이지 단위로 나눔
    const paginatedData = dummyLoansData.slice(startIndex, endIndex);

    // 응답 데이터
    const result = {
        page,
        totalItems: dummyLoansData.length,
        totalPages: Math.ceil(dummyLoansData.length / ITEMS_PER_PAGE),
        data: paginatedData,
    };

    response.json(result);
});

app.get('/products/funds/:page', (request, response) => {
    const page = parseInt(request.params.page, 10) || 1; // 요청받은 페이지 번호, 기본값은 1
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // 데이터를 페이지 단위로 나눔
    const paginatedData = dummyFundsData.slice(startIndex, endIndex);

    // 응답 데이터
    const result = {
        page,
        totalItems: dummyFundsData.length,
        totalPages: Math.ceil(dummyFundsData.length / ITEMS_PER_PAGE),
        data: paginatedData,
    };

    response.json(result);
});

// Backend
loadAllData().then(() => {
    app.listen(API_SERVER_PORT, () => {
        console.log(`Example app listening on port ${API_SERVER_PORT}`);
    });
});
