<template>
  <div class="about">
    <h1>This is an about page</h1>
    <DishList />
  </div>
</template>

<script>
// @ is an alias to /src
import DishList from '@/components/DishList.vue'

export default {
  name: 'HomeView',
  components: {
    DishList
  }
}
</script>