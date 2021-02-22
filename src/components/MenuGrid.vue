<template>
  <v-card
    class="mt-5 "
    max-width="344"
    hover
    :disabled="dishCount === 0 || availableMenu === false"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{ dishName }}
        </div>
        <v-divider></v-divider>
        <v-list-item-title class=" mt-2">
          Description
        </v-list-item-title>
        <v-list-item-subtitle>
          <p>{{ dishDescription }}</p>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Available At:
          <v-chip color="orange lighten-2">
            {{ dishAvailableTime }}
          </v-chip>
          <span class="ml-4">
            Price:
            <v-chip color="light-green lighten-1"> {{ dishPrice }} $ </v-chip>
          </span>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <p class="red--text mt-2">
            Preparation Time: {{ dishPreparationTime }}
          </p>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <p>
            Available Count:
            <v-chip class="yellow">{{ dishCount }}</v-chip>
          </p>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions class="justify-end">
      <v-btn depressed fab text small @click="dishCount--">
        <v-icon color="info">mdi-cart-plus</v-icon>
      </v-btn>
      <EditMenuItem
        :dishId="dishId"
        :dishName="dishName"
        :dishDescription="dishDescription"
        :dishCategory="dishCategory"
        :dishPrice="dishPrice"
        :dishAvailability="dishAvailableTime"
        :dishCount="dishCount"
        :dishPrepareTime="dishPreparationTime"
        @update-menu="update"
      />
      <v-btn
        right
        icon
        fab
        small
        depressed
        @click="$emit('delete-menu', dishId)"
      >
        <v-icon color="error">mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import EditMenuItem from "./EditMenuItem";
// import BaseCard from "./BaseCard";

export default {
  props: [
    "id",
    "menuName",
    "menuDescription",
    "menuCategory",
    "menuAvailableTime",
    "menuPrice",
    "menuPreparationTime",
    "menuCount",
  ],
  emits: ["delete-menu", "update-menu"],
  components: {
    EditMenuItem,
    // BaseCard,
  },
  data() {
    return {
      dishId: this.id,
      dishName: this.menuName,
      dishDescription: this.menuDescription,
      dishCategory: this.menuCategory,
      dishAvailableTime: this.menuAvailableTime,
      dishPrice: this.menuPrice,
      dishPreparationTime: this.menuPreparationTime,
      dishCount: this.menuCount,
      time: "",
      show: true,
      availableMenu: true,
    };
  },

  //to fetch the system date and time every 1 sec
  created() {
    setInterval(() => {
      this.fetchTime();
    }, 1000);
  },
  //For different color to each menu Grid
  // computed: {
  //   chooseClass() {
  //     var color = "";
  //     if (this.dishCategory === "Starter") {
  //       color = "purple accent-1";
  //     } else if (this.dishCategory === "Main Course") {
  //       color = "blue lighten-3";
  //     } else if (this.dishCategory === "Dessert") {
  //       color = "brown lighten-2";
  //     } else if (this.dishCategory === "Beverage") {
  //       color = "deep-orange lighten-2";
  //     }
  //     return color;
  //   },
  // },
  methods: {
    add() {
      this.menuCount--;
    },

    //disabling lunch grid after lunch time is over in a day. only tested with lunch time at the moment. Comparing time have some fault which can be fixed later.
    fetchTime() {
      var currentDate = new Date();
      this.time =
        currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds();

      var lunchTime = "15:58:00";

      if (this.dishAvailableTime === "Lunch" && this.time > lunchTime) {
        this.availableMenu = false;
      }
    },
    display() {
      this.show = false;
    },
    update(
      id,
      name,
      description,
      category,
      menuAvailableTime,
      price,
      preparationTime,
      count
    ) {
      this.dishId = id;
      this.dishName = name;
      this.dishDescription = description;
      this.dishCategory = category;
      this.dishAvailableTime = menuAvailableTime;
      this.dishPrice = price;
      this.dishPreparationTime = preparationTime;
      this.dishCount = count;

      this.$emit(
        "update-menu",
        this.dishId,
        this.dishName,
        this.dishDescription,
        this.dishCategory,
        this.dishAvailableTime,
        this.dishPrice,
        this.dishPreparationTime,
        this.dishCount
      );
    },
  },
};
</script>

<style></style>
