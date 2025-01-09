class WooriBox extends HTMLElement {
    constructor() {
        super();

        // Shadow DOM 생성
        this.attachShadow({ mode: 'open' });

        // Shadow DOM 내부 HTML 및 Tailwind CSS 적용
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.tailwindcss.com/3.4.16" />
        <style>@import url("./src/output.css");</style>
        <div
          class="flex flex-col items-center rounded-[30px] bg-white p-6 shadow-md"
        >
          <h3 class="font-['Noto Sans'] mb-4 text-[40px] font-bold text-black">
            <!-- Title -->
          </h3>
          <div class="mb-6 w-5/6 border-t-2 border-[#0093bd]"></div>
          <p
            class="font-['Noto Sans'] text-center text-2xl font-bold text-black"
          >
            <!-- Content -->
          </p>
          <div class="flex items-center gap-4 icon-container" style="display: none;">
            <img
              class="h-[60px] w-[60px]"
              alt="Icon"
            />
            <p class="font-['Inter'] text-[40px] font-bold text-black icon-text">
              <!-- Icon Text -->
            </p>
          </div>
        </div>
      `;
    }

    static get observedAttributes() {
        return ['title', 'content', 'icon', 'icon-text'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const titleElement = this.shadowRoot.querySelector('h3');
        const contentElement = this.shadowRoot.querySelector('p');
        const iconContainer = this.shadowRoot.querySelector('.icon-container');
        const iconElement = this.shadowRoot.querySelector('img');
        const iconTextElement = this.shadowRoot.querySelector('.icon-text');

        if (name === 'title') {
            titleElement.textContent = newValue || '';
        }

        if (name === 'content') {
            contentElement.textContent = newValue || '';
        }

        if (name === 'icon') {
            if (newValue) {
                iconContainer.style.display = 'flex';
                iconElement.src = newValue;
            } else {
                iconContainer.style.display = 'none';
            }
        }

        if (name === 'icon-text') {
            iconTextElement.textContent = newValue || '';
        }
    }
}

customElements.define('woori-box', WooriBox);
