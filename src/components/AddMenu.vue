<template>
  <v-row>
    <v-col cols="12" md="12" xs="12" lg="12">
      <v-btn color="success" dark @click="openDialog">
        <v-icon>add</v-icon>
        Add Menu
      </v-btn>
      <v-form v-model="valid">
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
                      v-model="menuName"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Menu Description"
                      required
                      v-model="menuDescription"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-select
                      :items="['Starter', 'Main Course', 'Dessert', 'Beverage']"
                      label="Category*"
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
                      label="Availability*"
                      required
                      v-model="menuAvailableTime"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      label="Price"
                      v-model="menuPrice"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      label="Time required"
                      v-model="menuPreparationTime"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      label="Total"
                      v-model="menuCount"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeModel">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="addMenu">
                Add
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  emits: ["add-menu"],

  data() {
    return {
      valid: false,
      nameRules: [(v) => !!v || "Name is required"],
      dialog: false,
      message: this.confirmMessage,
      menuName: "",
      menuDescription: "",
      menuCategory: "",
      menuAvailableTime: "",
      menuPrice: "",
      menuPreparationTime: "",
      menuCount: "",
    };
  },
  methods: {
    openDialog() {
      console.log(this.dialog);
      this.dialog = true;
    },
    closeModel() {
      this.menuName = "";
      this.menuDescription = "";
      this.menuCategory = "";
      this.menuPrice = "";
      this.menuAvailableTime = "";
      this.dialog = false;
    },
    addMenu() {
      this.$emit(
        "add-menu",
        this.menuName,
        this.menuDescription,
        this.menuCategory,
        this.menuAvailableTime,
        this.menuPrice,
        this.menuPreparationTime,
        this.menuCount
      );
      this.menuName = "";
      this.menuDescription = "";
      this.menuCategory = "";
      this.menuAvailableTime = "";
      this.menuPrice = "";
      this.menuPreparationTime = "";
      this.menuCount = "";
      this.dialog = false;
    },
  },
};
</script>

<style></style>
