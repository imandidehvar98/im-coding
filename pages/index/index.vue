<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="main">
        <b-row>
          <b-col cols="12" class="my-2">
            <b-carousel img-width="100%" img-height="100px">
              <b-carousel-slide img-src="/images/kotlin-banner.jpg" />
            </b-carousel>
          </b-col>
        </b-row>
        <b-row>
          <tutorial-card
            v-for="(item, index) in items"
            :key="index"
            :image="item.image"
            :description="item.description"
          />
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"/>