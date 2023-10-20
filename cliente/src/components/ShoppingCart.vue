<template>
  <div class="cart-dropdown absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg p-4"
    v-if="isCartOpen">
    <!-- <h1>Hola soy el componente Shooping Cart</h1> -->
    <button class="bg-[#ff6961] hover:bg-[#C3241A] text-white font-bold py-2 px-4 rounded">Shopping cart
      {{ selectedProducts.length }}</button>
    <!-- <h1>{{ selectedProducts }}</h1> -->
    <div class="cart-dropdown absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg p-4"
      v-if="isCartOpen">
      <h2 class="text-lg font-semibold mb-2">Shopping Cart</h2>
      <ul v-if="selectedProducts.length">
        <li v-for="product in selectedProducts" :key="product.id">
          <div class="flex justify-between items-center mb-2">
            <span>{{ product.name }}</span>
            <span>{{ product.price }} €</span>
          </div>
        </li>
      </ul>
      <p v-else>No items in the cart</p>
    </div>
  </div>
</template>
  
<script>
export default {
  props: ["selectedProducts"],
  data() {
    return {
      isCartOpen: false,

    };
  },
  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
  },
};
</script>
  
<style scoped></style>
  