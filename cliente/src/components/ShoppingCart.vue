<template>
  <div class="relative" @click="toggleCart">
    <button class="bg-[#ff6961] hover:bg-[#C3241A] text-white font-bold py-2 px-4 rounded">
      Shopping Cart ({{ selectedProducts.length }})
    </button>
    <div class="cart-dropdown absolute right-0 mt-2 w-72 bg-white border border-gray-300 shadow-lg rounded-lg p-4" v-show="isCartOpen">
      <h2 class="text-lg font-semibold mb-2">Shopping Cart</h2>
      <ul v-if="selectedProducts.length">
        <li v-for="product in selectedProducts" :key="product.id">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs">{{ product.name }}</span>
            <span class="text-xs">{{ product.price }} €</span>
          </div>
        </li>
      </ul>
      <p v-else>No items in the cart</p>
      <div class="flex justify-between mt-2">
        <span class="font-bold">Total:</span>
        <span class="font-bold">{{ calculateTotalPrice() }} €</span>
      </div>
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
    calculateTotalPrice() {
    return this.selectedProducts.reduce((total, product) => total + product.price, 0);
    },
  },
};
</script>
  
<style scoped></style>
  