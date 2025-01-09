class WooriNavbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    // Shadow Root 내부에 TailwindCSS를 직접 주입 (CDN 또는 로컬 빌드 CSS)
    // 만약 로컬 output.css를 쓰고 싶다면 <link rel="stylesheet" href="./src/output.css"> 식으로 넣어주면 됨
    this.shadowRoot.innerHTML = `
          <!-- Tailwind CDN -->
          <link rel="stylesheet" href="https://cdn.tailwindcss.com/3.4.16" />
          <style>
            /* 빌드된 TailwindCSS 스타일 */
            @import url("./src/output.css");
          </style>
          <!-- 실제 Navbar HTML 코드 -->
          <nav class="bg-white px-0 py-2 shadow-md 2xl:px-6 3xl:px-8">
            <div
              class="container mx-auto flex max-w-[1600px] flex-nowrap items-center justify-center gap-2 lg:px-8 3xl:gap-4"
            >
              <div class="flex-shrink-0">
                <a href="/frontend-1st-finance-for-goldenage" class="hover:opacity-80">
                  <img
                    src="./src/img/Logo.svg"
                    alt="우리은행"
                    class="h-auto w-[21rem] md:w-[16rem] xl:w-[21rem]"
                  />
                </a>
              </div>
              <!-- 메뉴 -->
              <div
                class="mx-0 flex flex-nowrap items-center gap-4 text-[4rem] md:gap-0 md:text-[1.8rem] lg:gap-1 lg:text-[1.95rem] xl:text-[2.2rem] 2xl:text-[3rem]"
              >
                <a
                  href="/frontend-1st-finance-for-goldenage/product_view.html"
                  class="flex items-center space-x-4 rounded px-2 py-1 transition hover:bg-gray-100"
                >
                  <img
                    src="./src/img/Save.svg"
                    alt="저축"
                    class="h-[3rem] w-[4rem] md:h-[2rem] md:w-[3rem] lg:h-[2.5rem] lg:w-[3.5rem]"
                  />
                  <span class="font-daumBold text-gray-900">예금</span>
                </a>
                <a
                  href="#"
                  class="flex items-center space-x-4 rounded px-2 py-1 transition hover:bg-gray-100"
                >
                  <img
                    src="./src/img/Foreign-Exchange.svg"
                    alt="외환"
                    class="h-[3rem] w-[4rem] md:h-[2rem] md:w-[ 3rem] lg:h-[2.5rem] lg:w-[3.5rem]"
                  />
                  <span class="font-daumBold text-gray-900">외환</span>
                </a>
                <a
                  href="#"
                  class="flex items-center space-x-4 rounded px-2 py-1 transition hover:bg-gray-100"
                >
                  <img
                    src="./src/img/Loan.svg"
                    alt="대출"
                    class="h-[3rem] w-[4rem] md:h-[2rem] md:w-[3rem] lg:h-[2.5rem] lg:w-[3.5rem]"
                  />
                  <span class="font-daumBold text-gray-900">대출</span>
                </a>
                <a
                  href="#"
                  class="flex items-center space-x-4 rounded px-2 py-1 transition hover:bg-gray-100"
                >
                  <img
                    src="./src/img/Fund.svg"
                    alt="펀드"
                    class="h-[3rem] w-[4rem] md:h-[2rem] md:w-[3rem] lg:h-[2.5rem] lg:w-[3.5rem]"
                  />
                  <span class="font-daumBold text-gray-900">펀드</span>
                </a>
              </div>
              <!-- 유저 이미지 -->
              <div class="flex-shrink-0">
                <a href="#" class="hover:opacity-80">
                  <img
                    src="./src/img/User.png"
                    alt="유저"
                    class="h-[6rem] w-[6rem] md:h-[4rem] md:w-[4rem] lg:h-[5rem] lg:w-[5rem]"
                  />
                </a>
              </div>
            </div>
          </nav>
        `;
  }
}

// "woori-navbar"라는 이름으로 커스텀 엘리먼트를 등록
customElements.define('woori-navbar', WooriNavbar);