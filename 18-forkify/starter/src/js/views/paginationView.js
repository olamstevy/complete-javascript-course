import View from './view.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const gotToPage = +btn.dataset.goto;
      handler(gotToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupNextBtn(curPage);
    }

    // Last Page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupPrevBtn(curPage);
    }

    // Other Page
    if (curPage < numPages) {
      return `
      ${this._generateMarkupPrevBtn(curPage)}
      ${this._generateMarkupNextBtn(curPage)}
      `;
    }

    // Page 1, and no other pages
    return '';
  }

  _generateMarkupNextBtn(curPage) {
    return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;
    const noBtn = '';
  }

  _generateMarkupPrevBtn(curPage) {
    return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
      `;
  }
}

export default new PaginationView();
