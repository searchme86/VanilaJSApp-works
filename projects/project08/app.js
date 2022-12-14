const url = 'https://course-api.com/javascript-store-products';

const productDOM = document.querySelector('.product-center');

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;

      return `<a href="product.html?id=${id}&name=john&age=25" class="single-product">
            <img src="${img}" alt="${title}" class="single-product-img img" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">${formatPrice}</span>
            </footer>
          </a>   `;
    })
    .join('');
  productDOM.innerHTML = `<div class="product-container">${productList}</div>`;
};

const fetchProducts = async () => {
  productDOM.innerHTML = '<div class="loading"></div>';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
