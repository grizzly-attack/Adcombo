'use strict';
(function () {
  let productCells = document.querySelectorAll(".main-content__item--button");

  productCells.forEach(function(cell) {
    if (!cell.previousElementSibling) {
      cell.classList.add("width");
    }
  })

})();
