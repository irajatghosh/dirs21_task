<template>
  <v-card class="mt-5 " max-width="344" hover>
    <v-list-item three-line>
      <v-list-item-content>
        <v-slot name="menuName"></v-slot>
        <v-divider></v-divider>
        <v-list-item-title class=" mt-2">
          Description
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-slot name="menuDescription"></v-slot>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-slot name="availableTimeandPrice"></v-slot>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-slot name="preparationTime"></v-slot>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-slot name="count"></v-slot>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions class="justify-end">
      <v-slot name="actionBtn"></v-slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
