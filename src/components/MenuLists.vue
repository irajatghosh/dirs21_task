<template>
  <v-container>
    <AddMenu @add-menu="insertNewMenu" :confirm-message="message" />

    <div class="text-center">
      <h1>Menu Lists</h1>
    </div>

    <MenuGrid
      :items="menuItems"
      @delete-menu="deleteMenu"
      @update-menu="updateMenu"
    />
  </v-container>
</template>

<script>
import AddMenu from "./AddMenu";
import MenuGrid from "./MenuGrid";
import MenuService from "../service/MenuService";
import MenuModel from "../model/dishes";
export default {
  name: "MenuLists",
  components: {
    AddMenu,
    MenuGrid,
  },
  data: () => ({
    menuItems: [],
    error: "",
    message: "",
  }),
  methods: {
    async insertNewMenu(
      name,
      description,
      category,
      availableTime,
      price,
      preparationTime,
      count
    ) {
      const menuData = new MenuModel(
        name,
        description,
        category,
        availableTime,
        price,
        preparationTime,
        count
      );

      await MenuService.addMenu(
        menuData.name,
        menuData.description,
        menuData.category,
        menuData.availableTime,
        menuData.price,
        menuData.preparationTime,
        menuData.count
      );
      this.menuItems = await MenuService.getMenu();
    },
    async deleteMenu(id) {
      await MenuService.deleteMenu(id);
      this.menuItems = await MenuService.getMenu();
    },
    async updateMenu(
      id,
      name,
      description,
      category,
      availableTime,
      price,
      preparationTime,
      count
    ) {
      const menuData = new MenuModel(
        name,
        description,
        category,
        availableTime,
        price,
        preparationTime,
        count
      );
      await MenuService.updateMenu(
        id,
        menuData.name,
        menuData.description,
        menuData.category,
        menuData.availableTime,
        menuData.price,
        menuData.preparationTime,
        menuData.count
      );
      this.menuItems = await MenuService.getMenu();
    },
  },

  async created() {
    try {
      this.menuItems = await MenuService.getMenu();
      console.log(this.menuItems);
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
