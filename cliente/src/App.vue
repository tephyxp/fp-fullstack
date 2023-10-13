<template>
  <div>
    <h1 class="text-3xl font-bold underline text-blue-500">
      Hello world!
    </h1>
    
    <div class="flex items-center gap-10">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.prevent="getProducts">Get
      products</button>
      <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.prevent ="getProduct">Get product</button> -->
      <form class ="flex flex-col">
        <label for="name">Name</label>
        <input name="name" v-model="name" />
        <label for="price">Price</label>
        <input name="price" v-model="price" />
        <label for="description">Description</label>
        <input name="description" v-model="description" />
        <label for="type">Type</label>
        <input name="type" v-model="type" />
      <button class=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.prevent="postProduct">Add Product</button>
      </form>
      <p>{{name}}</p>
      <p>{{ price }}</p>
      <p>{{ description }}</p>
      <p>{{ type }}</p>

      <!---------- Mostrar productos ----------->
      <ul>
        <li v-for="product in products" :key="product.id" @click.prevent="getProduct(product.id)">{{ product.name }}</li>
      </ul>
      <h2>{{ product }}</h2>

      <!-- Mostrar el producto seleccionado -->

    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      products: [],
      product: "",
      name:"",
      price: "",
      description: "",
      type: "",
    };
  },
  methods: {
    async getProducts() {

      const response = await fetch('http://localhost:2006/api/ecommerce-products')
      const data = await response.json()
      return this.products = data.data
    },
    async getProduct(id) {
      const response = await fetch(`http://localhost:2006/api/ecommerce-products/${id}`)
      const data = await response.json()
      return this.product = data.data
    },
    async postProduct(){
      const newProduct = {
        name: this.name,
        price: this.price,
        description: this.description,
        type: this.type

      }
      console.log(newProduct);
      const response = await fetch('http://localhost:2006/api/ecommerce-products' ,{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(newProduct),
      })
      const data = await response.json();
      return this.products.push(data.data)
    }




  }
}
</script>

<style lang="scss" scoped></style>