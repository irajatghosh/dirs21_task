<template>
  <v-container>
    <AddMenu @add-menu="insertNewMenu" :confirm-message="message" />

    <div class="text-center">
      <h1>Menu Lists</h1>
    </div>
    <v-row>
      <v-col
        cols="12"
        md="4"
        lg="4"
        sm="3"
        xs="2"
        v-for="menuItem in menuItems"
        :key="menuItem._id"
      >
        <MenuGrid
          :id="menuItem._id"
          :menuName="menuItem.name"
          :menuDescription="menuItem.description"
          :menuCategory="menuItem.category"
          :menuAvailableTime="menuItem.availableTime"
          :menuPrice="menuItem.price"
          :menuPreparationTime="menuItem.preparationTime"
          :menuCount="menuItem.count"
          @delete-menu="deleteMenu"
          @update-menu="updateMenu"
        />
      </v-col>
    </v-row>
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
