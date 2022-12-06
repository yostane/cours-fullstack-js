<template>
  <ul>
    <li v-for="dish in dishes" :key="dish.name">
      {{ dish.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "DishList",
  data(){
    return {
      dishes: []
    }
  },
  async created(){
    const response = await fetch("/dishes");
    this.dishes = await response.json();
  }
}
</script>