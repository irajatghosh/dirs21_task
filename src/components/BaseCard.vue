<template>
  <v-card class="mt-5 " max-width="344" hover>
    <v-list-item three-line>
      <v-list-item-content>
        <slot name="menuName"></slot>
        <v-divider></v-divider>
        <v-list-item-title class=" mt-2">
          Description
        </v-list-item-title>
        <v-list-item-subtitle>
          <slot name="menuDescription"></slot>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <slot name="availableTimeandPrice"></slot>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <slot name="preparationTime"></slot>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <slot name="count"></slot>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions class="justify-end">
      <slot name="actionBtn"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
