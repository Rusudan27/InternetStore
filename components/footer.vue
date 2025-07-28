<template>
  <footer class="footer">
    <div class="footer__left">
      <span class="footer__left-contact typography-p1">Contact</span>
      <span class="footer__left-info typography-p2">info@rocketsneakers.com</span>
      <span class="footer__left-contact typography-p1">Join us</span>
      <div class="footer__left-icons">
        <SvgoFacebook class="footer__left-icons-icon" />
        <SvgoInst class="footer__left-icons-icon" />
      </div>
    </div>

    <div class="footer__middle">
      <SvgoVector class="footer__middle-vector" />
      <span class="footer__rights typography-p2">
        Copyright © 2023. All Rights Reserved
      </span>
    </div>

    <div class="footer__right">
      <NuxtLink to="#" class="footer__right-account typography-p1">
        My account
      </NuxtLink>

      <NuxtLink
        v-for="{ id, label, to } in footerRightLinks"
        :key="id"
        :to="to"
        class="footer__right-component typography-p2"
      >
        {{ label }}
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">

interface FooterLink {
  id: string;
  label: string;
  to: string;
}

const footerRightLinks: FooterLink[] = [
  { id: 'login', label: 'Log in', to: '/login' },
  { id: 'registration', label: 'Registration', to: '/registration' },
  { id: 'basket', label: 'Shopping basket', to: '/basket' },
  { id: 'favourites', label: 'Favourites', to: '/favourites' },
];

</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;

.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  height: 350px;
  padding: 40px 20px 10px;
  background: $lightgrey;

  @include breakpoint((pad, down)) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    height: auto;
    padding: 30px 16px;
    gap: 32px;
    text-align: center;
  }

  &__rights {
    color: $white;
    margin-top: 100px;
    letter-spacing: 1.2px;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: 39px;
    color: $white;

    @include breakpoint((pad, down)) {
      align-items: center;
      margin-left: 0;
      gap: 20px;
      width: 48%;
    }

    &-contact {
      margin-top: 10px;
    }

    &-info {
      letter-spacing: 1px;
    }

    &-icons {
      display: flex;
      gap: 20px;

      @include breakpoint((pad, down)) {
        justify-content: center;
      }

      &-icon {
        width: 30px;
        height: 30px;
        color: $lightgrey;

        @include breakpoint((pad, down)) {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  &__middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: none;

    @include breakpoint((pad, down)) {
      width: 100%;
      margin-top: 30px;
      order: 3;
    }

    &-vector {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      margin-left: -19px;
      color: $white;
      width: 199px;
      height: 70px;

      @include breakpoint((pad, down)) {
        margin: 0 auto;
        margin-top: 0;
        width: 101px;
        height: 36px;
      }
    }
  }

  &__right {
    flex: none;
    max-width: 200px;
    margin-right: 105px;
    margin-top: 15px;

    @include breakpoint((pad, down)) {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-account {
      color: $white;
    }

    &-component {
      display: flex;
      flex-direction: column;
      color: $white;
      margin-top: 23px;
    }
  }
}
</style>




