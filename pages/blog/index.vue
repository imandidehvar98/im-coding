<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="main">
        <b-row align-h="start" class="my-3">
          <h1>My Blog</h1>
        </b-row>
        <b-row>
          <b-col v-for="(item, index) in items" :key="index" cols="12" class="my-2">
            <b-card no-body class="overflow-hidden">
              <b-row no-gutters>
                <b-col md="12">
                  <b-card-img
                    :src="item.image"
                    alt="Image"
                    class="rounded-0"
                    style="max-height: 210px;"
                  ></b-card-img>
                </b-col>
                <b-col md="12">
                  <b-card-body class="text-left" title="Horizontal Card">
                    <b-card-text>
                      This is a wider card with supporting text as a natural
                      lead-in to additional content. This content is a little
                      bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
                <b-col cols="12">
                  <b-card-footer>
                    <b-row>
                      <b-col cols="6"><span class="mx-2">Publish Date:</span> <span>2020-12-12</span></b-col>
                      <b-col cols="6">ReadMore</b-col>
                    </b-row>
                  </b-card-footer>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"/>