var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: "./assets/socks.jpg",
    altText: "A pair of socks",
    link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    inStock: true,
    inventory: 2,
    // inventory: 2
    details: ["80% cotton", "20% polyester", "gender-neutural"],
    valiants: [
      {
      //↓vueが各ノードのIDを追跡できるように、特別なキー属性にすることを勧める
        // id: 1,
        // color: "red",
        valiantId: 1,
        valiantColor: "red",
      },
      {
        id: 2,
        color: "bule"
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  }
});