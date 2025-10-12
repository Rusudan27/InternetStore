<template>
  <div class="home-page">
    <h1 class="home-page__title typography-h1">rocket</h1>

    <p class="home-page__text typography-p3">
      Do you want to get a discount on our products? Leave your email address and get 10% discount.
      <br />
      Subscribe to our newsletter. We will inform you about upcoming launches, news and promotions!
    </p>

    <form class="home-page__form">
      <input
        class="home-page__input typography-p2"
        type="email"
        placeholder="Email"
      />
      <button type="submit" class="home-page__btn">SEND</button>
    </form>

    <div class="brands-marquee">
      <div class="brands-marquee__track">
        <ul class="brands-marquee__lane">
          <li class="brands-marquee__logo"><SvgoAdidasSeeklogo class="brands-marquee__logo-item" /></li>
          <li class="brands-marquee__logo"><SvgoCarhartt class="brands-marquee__logo-item" /></li>
          <li class="brands-marquee__logo"><SvgoNike class="brands-marquee__logo-item" /></li>
          <li class="brands-marquee__logo"><SvgoObey class="brands-marquee__logo-item" /></li>
          <li class="brands-marquee__logo"><SvgoPuma class="brands-marquee__logo-item" /></li>
          <li class="brands-marquee__logo"><SvgoReebok class="brands-marquee__logo-item" /></li>
        </ul>
        <ul class="brands-marquee__lane" aria-hidden="true">
          <li class="brands-marquee__logo"><SvgoAdidasSeeklogo class="brands-marquee__logo-item" /></li>
          <li class="brands-marquee__logo"><SvgoCarhartt class="brands-marquee__logo-item" /></li>
          <li class="brands-marquee__logo"><SvgoNike class="brands-marquee__logo-item" /></li>
          <li class="brands-marquee__logo"><SvgoObey class="brands-marquee__logo-item" /></li>
          <li class="brands-marquee__logo"><SvgoPuma class="brands-marquee__logo-item" /></li>
          <li class="brands-marquee__logo"><SvgoReebok class="brands-marquee__logo-item" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgoNike from '@/assets/icons/nike.svg';
import SvgoObey from '@/assets/icons/obey.svg';
import SvgoCarhartt from '@/assets/icons/carhartt.svg';
import SvgoAdidasSeeklogo from '@/assets/icons/adidas-seeklogo.svg';
import SvgoPuma from '@/assets/icons/puma.svg';
import SvgoReebok from '@/assets/icons/reebok.svg';
</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
  color: $white;

  @include breakpoint((pad, down)) {
    padding: 48px 16px;
  }

  &__title {
    line-height: 1;
    margin-left: -30px;

    @include breakpoint((pad, down)) {
      margin-left: 0;
    }
  }

  &__text {
    letter-spacing: 0.3px;
    margin-top: 95px;
    line-height: calc(1em + 10px);

    @include breakpoint((pad, down)) {
      margin-top: 32px;
      letter-spacing: 1.5px;
      font-size: $font-size-xxs;
      line-height: 20px;
      padding: 0 19px;
      max-width: 400px;
    }
  }

  &__form {
    display: inline-flex;
    gap: 20px;
    margin-top: 40px;

    @include breakpoint((pad, down)) {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 16px;
      width: 355px;
      max-width: 640px;
      margin: 24px auto 0;
      padding: 0 19px;
      box-sizing: border-box;
    }
  }

  &__input {
    height: 69px;
    display: inline-flex;
    line-height: 1;
    padding: 15px 24px;
    border: none;
    box-shadow: 4px 4px 0 0 $white;
    width: 420px;
    background-color: $lightgrey;
    color: $white;

    @include breakpoint((pad, down)) {
      height: 50px;
      width: 100%;
      text-align: center;
      padding: 12px 16px;
      box-shadow: 3px 3px 0 0 $white;
    }
  }

  &__btn {
    height: 69px;
    display: inline-flex;
    align-items: center;
    line-height: 1;
    padding: 15px 61px;
    border: none;
    box-shadow: 4px 4px 0 0 $white;
    background-color: $green;
    color: $black;
    font-family: $Righteous;
    font-weight: $regular;
    font-size: $font-size-xxl;

    @include breakpoint((pad, down)) {
      height: 50px;
      width: 100%;
      justify-content: center;
      box-shadow: 3px 3px 0 0 $white;
    }
  }
}

.brands-marquee {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 160px;
  width: 100%;
  height: 80px;
  background: $lightgrey;
  box-shadow: 4px 4px 0 0 $white; 

    @include breakpoint((pad, down)) {
		width: 954px;
		height: 50px;
		margin-top: 70px;
  }

  &__track {
    display: flex;
    width: 200%;
    position: absolute;
    overflow: hidden;
    animation: marquee 5s linear infinite;
    will-change: transform;
  }

  &__lane {
    display: flex;
    align-items: center;
  }

  &__logo {
    display: flex;
    align-items: center;
    margin-right: 30px;

    &-item {
      height: 28px;
      width: auto;
      display: block;
      float: left;

		@include breakpoint ((pad, down)) {
			height: 27px;
		}
    }
  }

  @keyframes marquee {
    0% { left: 0; }
    100% { left: -100%; }
  }
}
</style>



