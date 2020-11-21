<template>
  <v-app
      :style="{background: $vuetify.theme.themes.light.ocean}"
      class="calis"
  >
    <v-app-bar
      app
      color="wood"
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
    >
      <img class="calis-logo" src="./assets/calis.svg" alt="calis" />

      <v-spacer></v-spacer>

      <v-avatar
              size="30"
              color="gold"
      >
        <v-icon light>
          mdi-account-circle
        </v-icon>
      </v-avatar>
    </v-app-bar>

    <v-main>
      <transition
              name="fade"
              mode="out-in"
              @beforeLeave="beforeLeave"
              @enter="enter"
              @afterEnter="afterEnter"
      >
         <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    collapseOnScroll: true,
  }),
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  }
};
</script>

<style lang="scss">
  :root {
    --gold: #ffdabb;
    --sunlight: #E06513;
    --forest: #305339;
    --olive: #607d2c;
    --sky: #AEC6F0;
    --wood: #553C2A;
    --wenge: #2B1E16;
  }

  .calis-logo {
    height: 50px;
    width: auto;
  }
  .calis {
    &.v-application {
      .primary--text {
        color: var(--gold) !important;
        caret-color: var(--gold) !important;
      }
      a {
        color: var(--gold);
      }

      .leaf {
        a {
          color: var(--gold);
        }

        .error--text {
          color: var(--sky) !important;
        }
      }

      .error--text {
        color: var(--wenge) !important;
      }
    }
  }

  .leaf {
    &.theme--light.v-card {
      color: rgba(0,0,0,0.87);
    }
    .theme--light.v-btn {
      color: var(--forest);
    }
  }

  .leaf-input {
    &.theme--light.v-input {
      color: var(--gold) !important;
    }
    .theme--light.v-label {
      color: var(--gold) !important;
    }
    .theme--light.v-label.v-label--active {
      color: var(--gold) !important;
    }
    &.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
      border-color: var(--gold) !important;
    }
    &.theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before {
      border-color: var(--gold) !important;
    }
    &.theme--light.v-input input, .theme--light.v-input textarea {
      color: var(--gold) !important;
    }

    &.error--text {
      &.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
        border-color: var(--sky) !important;
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-property: height, opacity;
    overflow: hidden;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>