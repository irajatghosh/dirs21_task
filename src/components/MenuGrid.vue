<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
      lg="4"
      sm="3"
      xs="2"
      v-for="menuItem in items"
      :key="menuItem._id"
    >
      <v-card
        class="mt-5 "
        max-width="344"
        :disabled="menuItem.count === 0"
        hover
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              {{ menuItem.name }}
            </div>
            <v-divider></v-divider>
            <v-list-item-title class=" mt-2">
              Description
            </v-list-item-title>
            <v-list-item-subtitle>
              <p>{{ menuItem.description }}</p>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Available At:
              <v-chip color="orange lighten-2">
                {{ menuItem.availableTime }}
              </v-chip>
              <span class="ml-4">
                Price:
                <v-chip color="light-green lighten-1">
                  {{ menuItem.price }} $
                </v-chip>
              </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <p class="red--text mt-2">
                Preparation Time: {{ menuItem.preparationTime }}
              </p>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <p>
                Available Count:
                <v-chip class="yellow">{{ menuItem.count }}</v-chip>
              </p>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions class="justify-end">
          <v-btn depressed fab text small @click="menuItem.count--">
            <v-icon color="info">mdi-cart-plus</v-icon>
          </v-btn>
          <EditMenuItem :selectedMenuItem="menuItem" @update-menu="update" />
          <v-btn
            right
            icon
            fab
            small
            depressed
            @click="$emit('delete-menu', menuItem._id)"
          >
            <v-icon color="error">mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import EditMenuItem from "./EditMenuItem";
// import BaseCard from "./BaseCard";
export default {
  props: ["items"],
  emits: ["delete-menu", "update-menu"],
  components: {
    EditMenuItem,
    // BaseCard,
  },
  data() {
    return {
      menuId: "",
      menuName: "",
      menuDescription: "",
      menuCategory: "",
      menuAvailableTime: "",
      menuPrice: "",
      menuPreparationTime: "",
      menuCount: 0,
      time: "",
      show: true,
    };
  },
  created() {
    setInterval(() => {
      this.fetchTime();
    }, 1000);
  },
  methods: {
    add() {
      this.menuCount--;
    },
    fetchTime() {
      var currentDate = new Date();
      this.time =
        currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds();
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
      this.menuId = id;
      this.menuName = name;
      this.menuDescription = description;
      this.menuCategory = category;
      this.menuAvailableTime = menuAvailableTime;
      this.menuPrice = price;
      this.menuPreparationTime = preparationTime;
      this.menuCount = count;

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
    },
  },
};
</script>

<style></style>
