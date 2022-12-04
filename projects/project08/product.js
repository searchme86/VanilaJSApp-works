const url = 'https://course-api.com/javascript-store-single-product';

const productDOM = document.querySelector('.product');

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<h4 class="error">there was a problem loading the product, please try again later...</h4>`;
  }
};

const displayProduct = (product) => {
  console.log(product);
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];

  document.title = title.toUpperCase();
  const colorList = colors
    .map((color) => {
      return `<div class="product-color" style="background:${color}"></div>`;
    })
    .join('');

  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" alt="${title}" class="img" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${price / 100}</span>
          <div class="colors">${colorList}</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            nesciunt nostrum, iste consectetur dolores quasi tempore aspernatur
            consequuntur cupiditate rem expedita. Dolor eligendi tempore quis
            exercitationem id corporis quod recusandae!
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
