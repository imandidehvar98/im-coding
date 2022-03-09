<template>
  <header>
    <b-container>
      <b-row align-h="center" align-v="center" class="">
        <b-col cols="4">
          <b-row align-h="center">
            <nuxt-link to="/index" tag="span" role="button"><strong style="font-size: 2.5em"> Iman Didehvar </strong></nuxt-link>
            <small style="">
              Geek - Android & Web Developer - Product Manager
            </small>
          </b-row>
        </b-col>
        <b-col cols="8">
          <b-row class="px-2 flex-row menu" align-h="end">
            <nuxt-link v-for="(item, index) in menu" :to="`/${item.url || item.name || item}`" :key="`menu-item-${index}`">
              <b-button :variant="isSelected($route.name == (item.url || item.name || item))" size="sm">{{item.title || item}}</b-button>
            </nuxt-link>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        "tutorials",
        "blog",
        "resume",
        {name: "interview", title: 'Invite me for an interview :D'}
      ]
    }
  },

  methods: {
    isSelected(condition) {
      return condition ? "dark" : "outline-dark"
    }
  }
  
}
</script>

<style lang="scss">
header {
  border-bottom: 1px solid #cecece;

  .logo {
    font-family: Momtaz;
  }

  .menu {
    button {
      margin: 0px 4px;
    }
  }
}
</style>