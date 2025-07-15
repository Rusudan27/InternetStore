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
          <input class="header__right-search-input" type="search" placeholder="" />
        </div>
        <nav class="header__nav">
          <NuxtLink to="/user">
            <SvgoUser class="header__nav-icon" />
          </NuxtLink>
          <NuxtLink to="/saved">
            <SvgoSaved class="header__nav-icon" />
          </NuxtLink>
          <NuxtLink to="/basket">
            <SvgoBasket class="header__nav-icon" />
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>


<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;

main {
  padding-top: 80px;
}

.header {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 10px;

  &__inner {
    max-width: 1300px;
    background: $grey;
    backdrop-filter: blur(20px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    position: relative;

    @include breakpoint((pad, down)) {
      align-items: center;
      gap: 12px;
      padding: 12px;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 4px;
      right: 0;
      height: 4px;
      background: $white;
    }

    &::before {
      content: "";
      position: absolute;
      top: 4px;
      bottom: -4px;
      right: -4px;
      width: 4px;
      background: $white;
    }

    &-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: auto;

      &-title {
        font-family: 'Righteous', sans-serif;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: $white;

        @include breakpoint((pad, down)) {
          font-size: 15px;
        }
      }

      &-subtitle {
        font-family: 'Raleway', sans-serif;
        font-size: 12px;
        font-weight: 400;
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
        font-size: 12px;
        padding: 0;
        color: $white;

        @include breakpoint((pad, down)) {
          font-size: 12px;
          padding: 0;
        }
      }
    }
  }

  &__nav {
    display: flex;
    gap: 16px;

    @include breakpoint((pad, down)) {
      width: 100%;
      gap: 20px;
    }

    &-icon {
      width: 25px;
      height: 25px;
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




