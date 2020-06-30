var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    // image: '',
    selectedVariant: 0,
    altText: "A pair of socks",
    link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    // inStock: false,
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
        valiantId: 312,
        valiantColor: "blue",
        valiantImage: "./assets/socks-blue.jpg",
        variantQuantity: 10,
      },
      {
        id: 3122,
        color: "red"
      },
      {
        valiantId: 4578,
        valiantColor: "green",
        valiantImage: "./assets/socks.jpg",
        variantQuantity: 0,
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
    updateProduct(index) {
      // console.log(index);
      this.selectedVariant = index
    }
  },
  computed: {
    title: function() {
      return this.brand+' '+this.product
    },
    image() {
      return this.valiants[this.selectedVariant].valiantImage
    },
    inStock() {
      return this.valiants[this.selectedVariant].variantQuantity
    }
  }
});