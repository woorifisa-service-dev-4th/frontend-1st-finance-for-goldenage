let currentPage = 1; // 현재 페이지

// DOM 요소
const productList = document.getElementById('product-list');
const pagination = document.getElementById('pagination');

// 현재 페이지 상품 유형 가져오기
const currentType = document.body.id; // 'deposits', 'foreign-exchange', 'loans', 'funds' 중 하나

// API에서 데이터 가져오기
const fetchProducts = async (type, page) => {
    try {
        const response = await fetch(`/products/${type}/${page}`);
        if (!response.ok) throw new Error('Failed to fetch products');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return { data: [], totalItems: 0, totalPages: 1 };
    }
};

// 상품 렌더링
const renderProducts = (products) => {
    productList.innerHTML = ''; // 기존 내용을 초기화

    products.forEach((product) => {
        const productItem = document.createElement('product-item');

        // 상품 유형별 데이터 매핑
        if (currentType === 'deposits') {
            productItem.setAttribute('image', '예금');
            productItem.setAttribute('category', product.category || '카테고리 없음');
            productItem.setAttribute('title', product.title || '상품명 없음');
            productItem.setAttribute('description', product.description || '상품 설명 없음');
            productItem.setAttribute('rate', product.rate || '금리 없음');
            productItem.setAttribute('duration', product.period ? `${product.period}개월` : '기간 정보 없음');
        } else if (currentType === 'foreign-exchange') {
            productItem.setAttribute('image', '외환');
            productItem.setAttribute('category', product.category || '카테고리 없음');
            productItem.setAttribute('title', product.title || '상품명 없음');
            productItem.setAttribute('description', product.description || '상품 설명 없음');
            productItem.setAttribute('rate', '금리 없음'); // 외환에는 금리 없음
            productItem.setAttribute('duration', '기간 정보 없음'); // 외환에는 기간 정보 없음
        } else if (currentType === 'loans') {
            productItem.setAttribute('image', '대출');
            productItem.setAttribute('category', product.category || '카테고리 없음');
            productItem.setAttribute('title', product.title || '상품명 없음');
            productItem.setAttribute('description', product.condition || '상품 설명 없음');
            productItem.setAttribute('rate', product.interest || '금리 없음');
            productItem.setAttribute('duration', product.maxTerm ? `${product.maxTerm}개월` : '기간 정보 없음');
        } else if (currentType === 'funds') {
            productItem.setAttribute('image', '펀드');
            productItem.setAttribute('category', product.category || '카테고리 없음');
            productItem.setAttribute('title', product.title || '상품명 없음');
            productItem.setAttribute('description', product.description || '상품 설명 없음');
            productItem.setAttribute('rate', '금리 없음'); // 펀드는 금리 없음
            productItem.setAttribute('duration', '기간 정보 없음'); // 펀드에는 기간 정보 없음
        }

        // product-item을 productList에 추가
        productList.appendChild(productItem);
    });
};


// 페이지네이션 버튼 렌더링
const renderPagination = (totalPages) => {
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.className = `px-4 py-2 rounded ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`;
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            loadPage(currentType, i);
        });
        pagination.appendChild(button);
    }
};

// 페이지 로드
const loadPage = async (type, page) => {
    const { data, totalPages } = await fetchProducts(type, page);
    renderProducts(data);
    renderPagination(totalPages);
};

// 초기 로드
loadPage(currentType, currentPage);
