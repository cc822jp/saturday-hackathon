import butter from '../assets/butter.png';

/**
 * <img>タグの拡張 - HTMLImageElementを継承
 */
class MyImg extends HTMLImageElement {
  constructor() {
    super();
    this.times = 0;
    this.type = '';
    this.innerHTML = `
      <style>
        :host { display: block; cursor: pointer; }
        .rotate1 { animation: rotate 0.75s linear infinite; }
        .rotate2 { animation-duration: 0.5s; }
        .rotate3 { animation-duration: 0.25s; }
        .rotate4 { animation-duration: 0.125s; }
        .rotate5 { animation-name: none; }
        @keyframes rotate {
          0% { transform: rotate(0deg) translate(-50px) rotate(0deg); }
          100% { transform: rotate(-360deg) translate(-50px)  rotate(360deg); }
        }
      </style>
    `;
    this.addEventListener('click', this.rotate);
  }

  rotate() {
    this.times++;
    this.classList.add(`rotate${this.times}`);

    // バターになる
    if (this.times === 5) {
      this.src = butter;
    }
  }
}

customElements.define('my-img', MyImg, { extends: 'img' });
