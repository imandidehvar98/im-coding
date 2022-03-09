<template>
  <b-col cols="3" class="mb-2">
    <b-card role="button">
      <b-card-img :src="image"></b-card-img>
      <b-card-body class="text">{{ description }}</b-card-body>
    </b-card>
  </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TutorialCard extends Vue{

    @Prop({required: true}) readonly image!: string 
    @Prop({required: true}) readonly description!: string 

};
</script>

<style>
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>