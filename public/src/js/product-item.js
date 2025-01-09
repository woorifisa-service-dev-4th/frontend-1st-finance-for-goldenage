class ProductItem extends HTMLElement {
    constructor() {
        super();

        // Shadow DOM 생성
        this.attachShadow({ mode: 'open' });

        // Shadow DOM 내부 HTML 및 CSS
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdn.tailwindcss.com/3.4.16" />
            <style>@import url("./src/output.css");</style>
            <div
            class="m-4 mx-auto flex w-2/3 items-center justify-between space-x-4 rounded-2xl border-4 border-wooriBlue p-6"
            >
            <!-- 이미지 -->
            <img
                alt="상품 이미지"
                class="h-auto max-h-20 flex-grow-0 object-contain p-1 product-image"
            />
            <!-- 금융 상품 설명 -->
            <div class="flex flex-grow flex-col items-center space-y-2 px-4">
                <div class="w-full text-xl font-medium text-wooriDeepBlue product-category">
                <!-- 상품 카테고리 -->
                </div>
                <div class="w-full text-4xl font-bold product-title">
                <!-- 상품 제목 -->
                </div>
                <div class="w-full text-2xl product-description">
                <!-- 상품 설명 -->
                </div>
            </div>
            <!-- 금리 정보 -->
            <div class="flex flex-grow-0 flex-col items-center space-y-1 px-4">
                <div class="text-xl product-rate-text">최고 연</div>
                <div class="text-4xl font-bold product-rate">
                <!-- 금리 -->
                </div>
                <div class="text-xl product-duration">
                <!-- 기간 -->
                </div>
            </div>
            </div>
        `;
    }

    static get observedAttributes() {
        return ['image', 'category', 'title', 'description', 'rate', 'duration'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const shadow = this.shadowRoot;

        const imageMap = {
            "예금": "./src/img/Save.svg",
            "외환": "./src/img/Foreign-Exchange.svg",
            "대출": "./src/img/Loan.svg",
            "펀드": "./src/img/Fund.svg",
        };

        switch (name) {
            case 'image': {
                // 'image' 속성 값에 따라 경로를 설정
                const mappedImage = imageMap[newValue] || '';
                shadow.querySelector('.product-image').src = mappedImage;
                break;
            }

            case 'category': {
                shadow.querySelector('.product-category').textContent = newValue || '';
                break;
            }

            case 'title': {
                shadow.querySelector('.product-title').textContent = newValue || '';
                break;
            }

            case 'description': {
                shadow.querySelector('.product-description').textContent = newValue || '';
                break;
            }

            case 'rate': {
                shadow.querySelector('.product-rate').textContent = newValue || '';
                break;
            }

            case 'duration': {
                shadow.querySelector('.product-duration').textContent = newValue || '';
                break;
            }
        }
    }
}

customElements.define('product-item', ProductItem);