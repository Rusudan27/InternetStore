<template>
  <footer class="footer">
    <div class="footer__left">
      <span class="footer__left-contact typography--p1-display">Contact</span>
      <span class="footer__left-info typography--p2-body">info@rocketsneakers.com</span>
      <span class="footer__left-contact typography--p1-display">join us</span>
      <nav class="footer__left-nav">
        <SvgoFacebook class="footer__left-nav-icon" />
        <SvgoInst class="footer__left-nav-icon" />
      </nav>
    </div>
    <div class="footer__middle">
      <div class="footer__middle-logo">
        <SvgoVector class="footer__middle-logo-vector" />
      </div>
      <span class="footer__middle-rights typography--p2-body">
        Copyright © 2023. All Rights Reserved
      </span>
    </div>
    <div class="footer__right">
      <span class="footer__right-account typography--p1-display">my account</span>
      <span
        v-for="(label, index) in footerRightLinks"
        :key="index"
        class="footer__right-component typography--p2-body"
      >
        {{ label }}
      </span>
    </div>
  </footer>
</template>


<script setup lang="ts">

const footerRightLinks = [
  'Log in',
  'Registration',
  'Shopping basket',
  'Favourites',
];

</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;

.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 40px auto;
  padding: 40px;
  background: $grey2;
  position: relative;
  flex-wrap: wrap;

  @include breakpoint((pad, down)) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    gap: 30px;
    overflow: hidden;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @include breakpoint((pad, down)) {
      align-items: center;
    }

    &-contact {
      color: $white;

      @include breakpoint((pad, down)) {
        font-size: $font-size-xm;
      }
    }

    &-info {
      margin: 30px 0;
      color: $white;

      @include breakpoint((pad, down)) {
        font-size: $font-size-xss;
      }
    }

    &-nav {
      display: flex;
      gap: 20px;
      margin-top: 30px;

      @include breakpoint((pad, down)) {
        margin-top: 20px;
      }

      &-icon {
        width: 30px;
        height: 30px;
        color: $grey2;

        @include breakpoint((pad, down)) {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  &__middle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex: none;

    @include breakpoint((pad, down)) {
      order: 3;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      flex: none;
    }

    &-logo {
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @include breakpoint((pad, down)) {
        margin-top: 0;
      }

      &-vector {
        color: $white;
        width: 199px;
        height: 70px;
        margin: 0 auto;

        @include breakpoint((pad, down)) {
          width: 101px;
          height: 36px;
        }
      }
    }

    &-rights {
      color: $white;
      margin-top: 100px;

      @include breakpoint((pad, down)) {
        font-size: $font-size-xss;
        margin-top: 20px;
        text-align: center;
        word-break: break-word;
      }
    }
  }

  &__right {
    flex: none;
    max-width: 200px;

    @include breakpoint((pad, down)) {
      align-items: center;
      display: flex;
      flex-direction: column;
      flex: none;
    }

    &-account {
      color: $white;

      @include breakpoint((pad, down)) {
        font-size: $font-size-xm;
      }
    }

    &-component {
      display: flex;
      flex-direction: column;
      color: $white;
      margin-top: 20px;

      @include breakpoint((pad, down)) {
        font-size: $font-size-xss;
      }
    }
  }
}
</style>



