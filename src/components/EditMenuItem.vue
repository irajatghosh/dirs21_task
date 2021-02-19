<template>
  <div>
    <v-btn right icon fab depressed small @click="dialog = true">
      <v-icon color="primary">mdi-circle-edit-outline</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Menu</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name of the Menu"
                  :rules="[(v) => !!v || 'Name is required']"
                  required
                  v-model="menuName"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Menu Description"
                  :rules="[(v) => !!v || 'Description is required']"
                  required
                  v-model="menuDescription"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="4">
                <v-select
                  :items="['Starter', 'Main Course', 'Dessert', 'Beverage']"
                  label="Category*"
                  :rules="[(v) => !!v || 'Category is required']"
                  required
                  v-model="menuCategory"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  :items="[
                    'Breakfast',
                    'Lunch',
                    'Dinner',
                    'Any Time',
                    'Weekends',
                  ]"
                  label="Availability"
                  :rules="[(v) => !!v || 'Available at is required']"
                  required
                  v-model="menuAvailableTime"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Price"
                  v-model="menuPrice"
                  :rules="[(v) => !!v || 'Price is required']"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Time required"
                  v-model="menuPreparationTime"
                  :rules="[(v) => !!v || 'Time is required']"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Available"
                  v-model="menuCount"
                  :rules="[(v) => !!v || 'Number count is required']"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="updateMenu">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["selectedMenuItem"],
  emits: ["update-menu"],
  data() {
    return {
      dialog: false,
      menuId: this.selectedMenuItem._id,
      menuName: this.selectedMenuItem.name,
      menuDescription: this.selectedMenuItem.description,
      menuCategory: this.selectedMenuItem.category,
      menuAvailableTime: this.selectedMenuItem.availableTime,
      menuPrice: this.selectedMenuItem.price,
      menuPreparationTime: this.selectedMenuItem.preparationTime,
      menuCount: this.selectedMenuItem.count,
    };
  },
  methods: {
    updateMenu() {
      this.$emit(
        "update-menu",
        this.menuId,
        this.menuName,
        this.menuDescription,
        this.menuCategory,
        this.menuAvailableTime,
        this.menuPrice,
        this.menuPreparationTime,
        this.menuCount
      );
      // console.log(this.menuName);
      this.dialog = false;
    },
  },
};
</script>

<style></style>
