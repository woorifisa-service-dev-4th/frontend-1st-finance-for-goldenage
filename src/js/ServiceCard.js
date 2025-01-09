class CardButton extends HTMLElement {
  constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });

      // 컴포넌트 템플릿 생성
      const template = document.createElement('template');
      template.innerHTML = `
      <link rel="stylesheet" href="https://cdn.tailwindcss.com/3.4.16" />
      <style>@import url("./src/output.css");</style>
      <a
        href="#"
        class="flex h-[116px] items-center rounded-3xl border-2 bg-white p-4 pl-10 text-[40px] shadow"
      >
        <slot name="text">기본 텍스트</slot>
        <img src="" alt="바로가기" class="ml-auto h-[100px]" />
      </a>
    `;

      // Shadow DOM에 템플릿 추가
      shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
      return ['image', 'href'];
  }

  connectedCallback() {
      this.updateAttributes();
  }

  attributeChangedCallback() {
      this.updateAttributes();
  }

  updateAttributes() {
      const link = this.shadowRoot.querySelector('a');
      const image = this.shadowRoot.querySelector('img');

      if (this.hasAttribute('href')) {
          link.setAttribute('href', this.getAttribute('href'));
      }
      if (this.hasAttribute('image')) {
          image.setAttribute('src', this.getAttribute('image'));
      }
  }
}

customElements.define('card-button', CardButton);