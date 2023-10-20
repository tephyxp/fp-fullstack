<template>
  <div>
    <nav class="bg-white p-4 flex justify-between items-center">
      <div id="" class="flex items-center space-x-1">
        <img class="w-16" src="../src/assets/logo-forma.png" alt="logo forma">
        <h2 class="text-[#3e3232] text-3xl font-bold">튤맆 Tulip.</h2>
      </div>
      <div class="flex items-center space-x-2">
        <ul class="hidden md:flex space-x-4">
          <li>
            <a href="#" class="hover:text-[#613e0a]  text-[#707070]">Home</a>
          </li>
          <li>
            <a href="#" class="hover:text-[#613e0a]  text-[#707070]">Categories</a>
          </li>
          <li>
            <a href="#" class="hover:text-[#613e0a]  text-[#707070]">Products</a>
          </li>
          <li>
            <a href="#" class="hover:text-[#613e0a] text-[#707070]">Contact Us</a>
          </li>
          <li>
            <button @click="toggleCart" class="hover:text-[#613e0a] text-[#707070]">Shopping Cart
              {{ shoppingCart.length }}</button>
          </li>
        </ul>
        <ShoppingCart :selectedProducts="shoppingCart" />
      </div>
    </nav>



    <!-- Initial section -->

    <main class="pt-12 pb-12 px-7 bg-white">
      <div class="flex flex-1">
        <section class="flex-1 bg-white  pt-12 flex flex-col items-center justify-center">
          <h1 class="text-3xl md:text-5xl lg:text-6xl text-center text-[#c32d28]">
            YOUR SKIN IS OUR MISSION
          </h1>
          <h2 class="py-3 text-center text-lg md:text-xl lg:text-2xl">
            Good skin health starts with an appropriate routine
          </h2>
          <button class="bg-[#ff6961] hover:bg-[#C3241A] text-white font-bold py-2 px-4 rounded">
            <a href="#" class="text-white">Learn More</a>
          </button>
        </section>

        <section class="flex-1 bg-white p-4">
          <img class="h-full p-6" src="../src/assets/starterkit.png" alt="skincare starter kit" />
        </section>
        <section class="flex-1 bg-white p-4">
          <img src="../src/assets/koreanskincare-model.png" alt="" />
        </section>
      </div>
    </main>

  </div>

  <!-- first category -->

<div class="bg-[#ffd8d6] pt-10 ">  
  <h2 class="text-3xl lg:text-7xl font-bold text-[#707070] text-center p-8">Our Categories</h2>
  <div class="flex flex-1 bg-[#ffd8d6] py-10 px-7">
    <section class="flex-1 p-4">
      <img src="../src/assets/male-model.png" alt="" />
    </section>
    <section class="flex-1 p-4">
      <h2 class="text-3xl lg:text-7xl font-bold text-[#c32d28]">Skincare.</h2>
      <p class="my-6 text-[#707070] text-justify">
        A well-maintained skincare routine is an essential part of a healthy
        lifestyle. Build your skincare routine with the best skincare products
        that TULIP has to offer, ranging from face care, eye care, body care,
        and skincare product sets. No matter what your skin type is, TULIP aims
        to provide you with the finest skincare products to enhance your daily
        skincare routine,while targeting your skin concerns and revitalize your look from within. Having curated numerous
        top-rated K-beauty and J-beauty picks, Stylevana introduces healthy skin care products and effective skin care
        tools to enhance your skincare ritual, including facial cleansers, toners, moisturizers, masks, and more. From
        leading K-beauty skincare brands to cult-favorite skin care products, Stylevana helps you invest in the right
        beauty products with lasting results to enhance your natural beauty and create natural healthy-looking skin for
        the years to come. Choose the right skin care products for your skin type and explore the Korean skin care
        products to step up your routine now!
      </p>
      <button class="bg-[#ff6961] hover-bg-[#C3241A] text-white font-bold py-2 px-4 rounded"
        @click.prevent="scrollToSkincareProducts">
        <a href="#" class="text-white">See Products</a>
      </button>

    </section>
  </div>
</div>

  <!--- second category -->

  <div class="flex flex-col lg:flex-row bg-[#f9daa9] py-10 px-7">
    <section class="flex-1 p-4">
      <h2 class="text-2xl lg:text-7xl text-[#613e0a] font-bold">Make up.</h2>
      <p class="my-5 text-[#613e0a] text-justify lg:text-xl">
        Launched as a Korean cosmetics online shop with worldwide shipping, Tulip has become one of the best websites to
        buy Korean makeup products for those who are on a beauty budget. Like any Korean makeup store near you, Tulip
        offers women at every age numerous Korean cosmetics products with an easy-to-use, easy-to-choose, easy-to-gift
        range. From Korean makeup foundations to eyeshadow palettes, Tulip's rich and opulent beauty collection echoes the
        exquisite elegance and precious compositions of its skincare collection. Redefining your beauty and makeup
        philosophy, Tulip helps you discover the ins and outs of the hottest Korean makeup trends, as well as Korean
        makeup tips from K-pop celebrities and K-dramas, and transform you into a Kbeauty know-it-all. Featuring the most
        trendsetting products, Tulip has an eponymous collection of Korean cosmetics and beauty products that you'll love
        at every price. Shop the best and latest Korean makeup products from highly-coveted K beauty brands now!
      </p>
      <button class="bg-[#F1AA3C] hover:bg-[#cb8d2a] text-white font-bold py-2 px-4 rounded"
        @click.prevent="scrollToMakeupProducts">
        <a href="#" class="text-white">See Products</a>
      </button>
    </section>
    <section class="flex-1 lg:ml-8">
      <h2 class="text-3xl lg:text-4xl text-[#525252]"></h2>
      <p class="my-6 text-[#707070] lg:text-base"></p>
      <div class="h-full">
        <img src="../src/assets/zyro-image.png" alt="" class="w-full h-auto">
      </div>
    </section>
  </div>

  <!--- Third category - Products --->
  <div>
    <h1 class="text-3xl lg:text-7xl font-bold text-[#c32d28] text-center p-8 pb-12">Our products</h1>
    <h2 id="skincare" class="text-xl lg:text-5xl font-bold text-[#c32d28] text-center">Skincare</h2>
    <section class="bg-white py-10">

      <!-- GRID PRODUCTOS SKINCARE -->

      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

          <div v-for="product in products.slice(0, 6)" :key="product.id"
            class="bg-white border border-gray-200 rounded-lg shadow-lg p-4 h-full">
            <img :src="'../src/assets/image-' + product.id + '.jpeg'" alt="Producto 1"
              class="w-full h-40 object-cover rounded-lg">
            <h2 class="text-xl font-semibold mt-2 text-center">{{ product.name }}</h2>
            <p class="text-gray-600">{{ product.description }}</p>

            <div class="flex justify-end mt-2">
              <p class="text-black font-semibold mt-2 mx-4">{{ product.price }}
              €</p>
              <button class="bg-[#ff6961] hover:bg-[#C3241A] text-white font-bold py-2 px-4 rounded" @click ="addToCart(product)" >shop now</button>
            </div>
          </div>
        </div>
      </div>

      <!-- GRID PRODUCTOS COMÉTICOS -->
      <h2 id="makeup" class="text-xl lg:text-5xl font-bold text-[#c32d28] text-center pt-10">Make up</h2>
      <section class="bg-white py-10">

        <div  class="container mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

            <div v-for="product in products.slice(10, 16)" :key="product.id"
              class="bg-white border border-gray-200 rounded-lg shadow-lg p-4 h-full">
              <img :src="'../src/assets/image-' + product.id + '.jpeg'" alt="Producto 1"
                class="w-full h-40 object-cover rounded-lg">
              <h2 class="text-xl font-semibold mt-2 text-center">{{ product.name }}</h2>
              <p class="text-gray-600">{{ product.description }}</p>
                <div class="flex justify-end mt-2">
              <p class="text-black font-semibold mt-2 mx-4">{{ product.price }}
              €</p>
              <button class="bg-[#ff6961] hover:bg-[#C3241A] text-white font-bold py-2 px-4 rounded" @click="addToCart(product)">Shop now</button>
            </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  </div>

  <!---------- FOOTER --------->
  <footer class="px-4 py-20 text-white bg-[#C3241A]">
  <div class="mx-auto max-w-7xl">
    <div class="grid grid-cols-2 gap-4 mb-3 md:grid-cols-4">
      <nav class="mb-8 flex items-center space-x-2 b-8">
        <img class="w-16" src="../src/assets/logo-rojo.jpg" alt="">
        <h2 class="text-white text-2xl font-bold">튤맆 Tulip.</h2>
      </nav>
      <nav class="mb-8">
        <p class="mb-3 text-s font-bold tracking-wider text-white  uppercase">Product</p>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Features</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Integrations</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Documentation</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">FAQs</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Pricing</a>
      </nav>
      <nav class="mb-8">
        <p class="mb-3 text-s font-bold tracking-wider text-white  uppercase">About</p>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Press-Kit</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Company</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Privacy</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Blog</a>
      </nav>
      <nav class="mb-8">
        <p class="mb-3 text-s font-bold tracking-wider text-white  uppercase">Contact</p>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Twitter</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Instagram</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Email</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Advertising</a>
        <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Chat</a>
      </nav>
    </div>
    <p class="text-sm font-medium text-left text-white md:text-center">© Copyright 2020 Skcript Inc. All Rights Reserved.</p>
  </div>
</footer>

  <!----------------------------EJEMPLOS DE CLASE--------------------------------->
  <!-- <div>
    <h1 class="text-3xl font-bold underline text-blue-500">Hello world!</h1>

    <div class="flex items-center gap-10"> -->
  <!-- <button class="bg-[#ff6961] hover:bg-[#C3241A] text-white font-bold py-2 px-4 rounded" @click.prevent="getProducts">
        Get products
      </button> -->
  <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.prevent ="getProduct">Get product</button> -->
  <!-- <form class="flex flex-col">
        <label for="name">Name</label>
        <input name="name" v-model="name" />
        <label for="price">Price</label>
        <input name="price" v-model="price" />
        <label for="description">Description</label>
        <input name="description" v-model="description" />
        <label for="type">Type</label>
        <input name="type" v-model="type" />
        <button class="mt-4 bg-[#ff6961] hover:bg-[#C3241A] text-white font-bold py-2 px-4 rounded"
          @click.prevent="postProduct">
          Add Product
        </button>
      </form>
      <p>{{ name }}</p>
      <p>{{ price }}</p>
      <p>{{ description }}</p>
      <p>{{ type }}</p> -->

  <!---------- Mostrar productos ----------->
  <!-- <ul>
        <li v-for="product in featuredProducts()" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
      <h2>{{ product.description }}</h2>
      <h2>{{ product.price }}</h2> -->

  <!-- Mostrar el producto seleccionado -->
  <!-- </div>
  </div> -->
  <!---------------------------- FINAL ----------------------->


</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  components: {
    ShoppingCart,
  },

  name: "App",
  data() {
    return {
      products: [],
      product: "",
      name: "",
      price: "",
      description: "",
      type: "",
      shoppingCart: []
    };
  },
  created() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      const response = await fetch(
        "http://localhost:2006/api/ecommerce-products"
      );
      const data = await response.json();
      console.log('data', data);
      return (this.products = data.data);
    },
    scrollToSkincareProducts() {
      
      const skincareProducts = document.getElementById("skincare");

      if (skincareProducts) {
       
        skincareProducts.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToMakeupProducts() {
    const makeupProducts = document.getElementById("makeup");

    if (makeupProducts) {
      makeupProducts.scrollIntoView({ behavior: "smooth" });
      }
    },

    addToCart(product){
      this.shoppingCart.push(product);
    },


    //get product by ID
    async getProduct(id) {
      const response = await fetch(
        `http://localhost:2006/api/ecommerce-products/${id}`
      );
      const data = await response.json();
      console.log(data);
      return (this.product = data.data);

    },
    async postProduct() {
      const newProduct = {
        name: this.name,
        price: this.price,
        description: this.description,
        type: this.type,
      };
      console.log(newProduct);
      const response = await fetch(
        "http://localhost:2006/api/ecommerce-products",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newProduct),
        }
      );
      const data = await response.json();
      return this.products.push(data.data);
    },
  },


  // computed: {
  //   featuredProducts() {
  //     const featuredProducts = [];
  //     featuredProducts.push(this.products[0], this.products[11], this.products[2], this.products[12], this.products[3], this.products[13]);
  //     return featuredProducts;
  //   }
  // }


};
</script>

<style lang="scss" scoped></style>
