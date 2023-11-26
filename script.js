// Code JavaScript

let price = 10;

const addBtn1 = document.querySelector(".add1");
const addBtn2 = document.querySelector(".add2");
const addBtn3 = document.querySelector(".add3");
const minusBtn1 = document.querySelector(".minus1");
const minusBtn2 = document.querySelector(".minus2");
const minusBtn3 = document.querySelector(".minus3");
const quantity1 = document.querySelector(".quantity1");
const quantity2 = document.querySelector(".quantity2");
const quantity3 = document.querySelector(".quantity3");
const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");
const total = document.querySelector("#total-price");
const supprimer1 = document.querySelector(".Supprimer1");
const supprimer2 = document.querySelector(".Supprimer2");
const supprimer3 = document.querySelector(".Supprimer3");

const ajusterQuantiteEtPrix = function () {
  // Article 1

  const Article1 = function () {
    let quantityElement = quantity1;
    let currentQuantity = parseInt(quantityElement.textContent);
    addBtn1.addEventListener("click", function () {
      currentQuantity++;

      quantityElement.textContent = currentQuantity;

      const quantityValue1 = parseInt(quantity1.textContent);
      price1.textContent = quantityValue1 * price;
    });

    minusBtn1.addEventListener("click", function () {
      if (currentQuantity > 0) {
        currentQuantity--;
        quantityElement.textContent = currentQuantity;

        const quantityValue1 = parseInt(quantity2.textContent);
        price1.textContent = quantityValue1 * price;
      }
    });
    supprimer1.addEventListener("click", function () {
      let quantityElement = quantity1;
      let currentQuantity = parseInt(quantityElement.textContent);
      currentQuantity = 0;

      quantityElement.textContent = currentQuantity;

      const quantityValue1 = parseInt(quantity1.textContent);
      price1.textContent = quantityValue1 * price;
    });
  };
  Article1();

  // Article 2
  const Article2 = function () {
    addBtn2.addEventListener("click", function () {
      let quantityElement = quantity2;
      let currentQuantity = parseInt(quantityElement.textContent);
      currentQuantity++;

      quantityElement.textContent = currentQuantity;

      const quantityValue2 = parseInt(quantity2.textContent);
      price2.textContent = quantityValue2 * price;
    });

    minusBtn2.addEventListener("click", function () {
      let quantityElement = quantity2;
      let currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 0) {
        currentQuantity--;
        quantityElement.textContent = currentQuantity;

        const quantityValue2 = parseInt(quantity2.textContent);
        price2.textContent = quantityValue2 * price;
      }
    });
    supprimer2.addEventListener("click", function () {
      let quantityElement = quantity2;
      let currentQuantity = parseInt(quantityElement.textContent);
      currentQuantity = 0;

      quantityElement.textContent = currentQuantity;

      const quantityValue2 = parseInt(quantity2.textContent);
      price2.textContent = quantityValue2 * price;
    });
  };
  Article2();
  // Article 3
  const Article3 = function () {
    addBtn3.addEventListener("click", function () {
      let quantityElement = quantity3;
      let currentQuantity = parseInt(quantityElement.textContent);
      currentQuantity++;

      quantityElement.textContent = currentQuantity;

      const quantityValue3 = parseInt(quantity3.textContent);
      price3.textContent = quantityValue3 * price;
    });

    minusBtn3.addEventListener("click", function () {
      let quantityElement = quantity3;
      let currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 0) {
        currentQuantity--;
        quantityElement.textContent = currentQuantity;

        const quantityValue3 = parseInt(quantity3.textContent);
        price3.textContent = quantityValue3 * price;
      }
    });
    supprimer3.addEventListener("click", function () {
      let quantityElement = quantity3;
      let currentQuantity = parseInt(quantityElement.textContent);
      currentQuantity = 0;

      quantityElement.textContent = currentQuantity;

      const quantityValue3 = parseInt(quantity3.textContent);
      price3.textContent = quantityValue3 * price;
    });
  };
  Article3();

  const updateSomme = function () {
    const quantityValue1 = parseInt(quantity1.textContent);
    const quantityValue2 = parseInt(quantity2.textContent);
    const quantityValue3 = parseInt(quantity3.textContent);

    const total1 = quantityValue1 * price;

    const total2 = quantityValue2 * price;

    const total3 = quantityValue3 * price;

    // Calculer la somme
    const somme = total1 + total2 + total3;

    total.textContent = somme;
  };

  addBtn1.addEventListener("click", updateSomme);
  addBtn2.addEventListener("click", updateSomme);
  addBtn3.addEventListener("click", updateSomme);

  minusBtn1.addEventListener("click", updateSomme);
  minusBtn2.addEventListener("click", updateSomme);
  minusBtn3.addEventListener("click", updateSomme);

  supprimer1.addEventListener("click", updateSomme);
  supprimer2.addEventListener("click", updateSomme);
  supprimer3.addEventListener("click", updateSomme);

  updateSomme();

  const heart1 = document.querySelector(".heart1");
  const far1 = document.querySelector("#far1");
  heart1.addEventListener("click", function () {
    far1.classList.toggle("liked");
  });

  const heart2 = document.querySelector(".heart2");
  let far2 = document.querySelector("#far2");
  heart2.addEventListener("click", function () {
    far2.classList.toggle("liked");
  });

  const heart3 = document.querySelector(".heart3");
  let far3 = document.querySelector("#far3");
  heart3.addEventListener("click", function () {
    far3.classList.toggle("liked");
  });
};
ajusterQuantiteEtPrix();
