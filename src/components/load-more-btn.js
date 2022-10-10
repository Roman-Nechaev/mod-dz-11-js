class loadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);
    hidden && this.refs;
  }
  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector('.label');
    refs.spinner = refs.button.querySelector('.spinner');
    return refs;
  }
  enable() {
    this.refs.button.disable = false;
    this.refs.label.textContent = 'Показать ещё';
    this.refs.spinner.classList.add('is-hidden');
  }
  disable() {
    this.refs.button.disable = false;
    this.refs.label.textContent = 'Загружаем...';
    this.refs.spinner.classList.remove('is-hidden');
  }
  show() {
    this.refs.spinner.classList.remove('is-hidden');
  }
  hide() {
    this.refs.spinner.classList.add('is-hidden');
  }
}
