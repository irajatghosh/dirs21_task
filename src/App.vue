<template>
  <v-app>
    <Header />
    <v-main>
      <MenuLists />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/layout/Header";
import MenuLists from "./components/MenuLists";

export default {
  name: "App",

  components: {
    Header,
    MenuLists,
  },

  data: () => ({
    //
  }),
};
</script>
