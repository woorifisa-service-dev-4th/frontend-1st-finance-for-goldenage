import express, { json } from 'express';

import dummyEventsData from './db/events.js';
import dummyNewsData from './db/news.js';
import dummyDepositsData from './db/deposits.js';
import dummyForeignExchangeData from './db/foreign-exchange.js';
import dummyLoansData from './db/loans.js';
import dummyFundsData from './db/funds.js';


const API_SERVER_PORT = 3000;
const app = express();

// app.use(express.static('public')); 
app.use(json());

// Frontend
app.get('/', (request, response) => {
    response.sendFile('index.html');
});

// 이벤트
app.get('/events', (request, response) => {
    response.send(JSON.stringify(dummyEventsData));
});

// 뉴스
app.get('/news', (request, response) => {
    response.send(JSON.stringify(dummyNewsData));
});

// 금융 상품 - 전체
app.get('/products', (request, response) => {
    const data = [...dummyDepositsData, ...dummyFundsData, ...dummyLoansData, ...dummyForeignExchangeData];
    response.send(JSON.stringify(data));
});

// 금융 상품 - 예금
app.get('/products/deposits', (request, response) => {
    response.send(JSON.stringify(dummyDepositsData));
});

// 금융 상품 - 외환
app.get('/products/foreign-exchange', (request, response) => {
    response.send(JSON.stringify(dummyForeignExchangeData));
});

// 금융 상품 - 대출
app.get('/products/loans', (request, response) => {
    response.send(JSON.stringify(dummyLoansData));
});

// 금융 상품 - 펀드
app.get('/products/funds', (request, response) => {
    response.send(JSON.stringify(dummyFundsData));
});

// Backend
app.listen(API_SERVER_PORT, () => {
    console.log(`Example app listening on port ${API_SERVER_PORT}`);
});

