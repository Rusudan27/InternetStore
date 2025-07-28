<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__inner-logo">
        <span class="header__inner-logo-title">Rocket</span>
        <span class="header__inner-logo-subtitle">Store</span>
      </div>

      <div class="header__right">
        <div class="header__right-search">
          <SvgoSearch class="header__right-search-icon" />
          <input
            class="header__right-search-input"
            type="search"
            placeholder=""
          />
        </div>

        <nav class="header__nav">
          <NuxtLink
            v-for="item in navLinks"
            :key="item.to"
            :to="item.to"
          >
            <component :is="item.icon" class="header__nav-icon" />
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>


<script setup lang="ts">
import SvgoUser from '@/assets/icons/user.svg'
import SvgoSaved from '@/assets/icons/saved.svg'
import SvgoBasket from '@/assets/icons/basket.svg'

const navLinks = [
  { to: '/user', icon: SvgoUser },
  { to: '/saved', icon: SvgoSaved },
  { to: '/basket', icon: SvgoBasket }
]

</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;

.header {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 10px;
  max-width: 1300px;
  margin: 0 auto;

  &__inner {
    width: 100%;
    background: $grey;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    position: relative;
    box-shadow: 4px 4px $white;

    @include breakpoint((pad, down)) {
      align-items: center;
      gap: 12px;
      padding: 12px;
    }

    &-logo {
      display: flex;
      flex-direction: column;
      align-items: center;

      &-title {
        font-family: $Righteous;
        font-size: $s;
        line-height: 100%;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: $white;

        @include breakpoint((pad, down)) {
          font-size: 15px;
        }
      }

      &-subtitle {
        font-family: $Raleway;
        font-size: $xxs;
        font-weight: $regular;
        letter-spacing: 7.58px;
        text-transform: uppercase;
        color: $white;
        width: fit-content;

        @include breakpoint((pad, down)) {
          font-size: 7px;
        }
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 39px;

    @include breakpoint((pad, down)) {
      gap: 15px;
    }

    &-search {
      display: flex;
      align-items: center;
      border-top: 3px solid $white;
      border-left: 3px solid $white;
      background-color: $black;
      height: 40px;
      width: 421px;
      position: relative;

      @include breakpoint((pad, down)) {
        width: 130px;
      }

      &-icon {
        position: absolute;
        left: 5px;
        top: 5px;
        width: 30px;
        height: 30px;
        color: $black;
        stroke: $white;

        @include breakpoint((pad, down)) {
          width: 12px;
          height: 12px;
        }
      }

      &-input {
        flex: 1;
        border: none;
        background: transparent;
        outline: none;
        font-size: $xs;
        font-family: $Raleway;
        padding: 35px;
        color: $white;

        @include breakpoint((pad, down)) {
          font-size: $xxs;
          padding: 0;
        }
      }
    }
  }

  &__nav {
    display: flex;
    gap: 30px;

    @include breakpoint((pad, down)) {
      gap: 20px;
    }

    &-icon {
      width: 30px;
      height: 30px;
      color: $grey;
      stroke: $white;

      @include breakpoint((pad, down)) {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>






