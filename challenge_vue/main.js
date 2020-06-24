var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: "./assets/socks.jpg",
    altText: "A pair of socks",
    link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    inStock: false,
    inventory: 2,
    // inventory: 2
    details: [
      "80% cotton",
      "20% polyester",
      "gender-neutural"
    ],
    valiants: [
      {
      //↓vueが各ノードのIDを追跡できるように、特別なキー属性にすることを勧める
        // id: 1,
        // color: "red",
        valiantId: 1,
        valiantColor: "blue",
        valiantImage: "./assets/socks-blue.jpg"
      },
      {
        id: 2,
        color: "red"
      },
      {
        valiantId: 3,
        valiantColor: "green",
        valiantImage: "./assets/socks.jpg",
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0,
  },
  methods: {
    addToCart: function() {
      this.cart += 1
    },
    removeToCart: function () {
      this.cart -= 1
    },
    // updateProduct: function(vImage) {
    //   this.image = vImage
    // }
    // 上と下同じ　下は無名関数
    updateProduct(vImage) {
      this.image = vImage
    }

  }
});