<template>
		<header class="header">
			<div class="header__logo">
				<h3 class="header__title">Rocket</h3>
				<h3 class="header__subtitle">Store</h3>
			</div>
			 <div class="header__search">
				<SvgoSearch class="header__search-icon"/>
				<input class="header__search-input" type="search" placeholder="" />  
			 </div>
			<nav class="header__nav"> 
				<NuxtLink to="/user"> <SvgoUser class="header__nav-icon" /></NuxtLink>
				<NuxtLink to="/saved"> <SvgoSaved class="header__nav-icon"/></NuxtLink>
				<NuxtLink to="basket"> <SvgoBasket class="header__nav-icon"/></NuxtLink>
		   </nav>
		</header>
	
</template>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;

.header {
  max-width: 1300px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: $color-hf;
  box-shadow: 2px 2px 0px 2px $color-text;
  backdrop-filter: blur(10px);

  @include breakpoint((pad, down)) {
    max-width: 100%;
    padding: 10px;
    gap: 10px;
  }

  &__title {
    font-family: 'Righteous', sans-serif;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: $color-text;
  }

  &__subtitle {
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 9.24px;
    text-transform: uppercase;
    color: $color-text;
  }

  &__search {
    display: flex;
    align-items: center;
    border-top: 2px solid $color-text;
    border-left: 2px solid $color-text;
    background-color: $color-bg;
    height: 40px;
    width: 400px;
    padding: 0 10px;
    margin-left: 0;

    @include breakpoint((pad, down)) {
      width: 200px;
    }

    &-input {
      flex: 1;
      border: none;
      background: transparent;
      outline: none;
      font-size: 16px;
      color: $color-text;

      @include breakpoint((pad, down)) {
        font-size: 14px;
      }
    }
  }

  &__nav {
    display: flex;
    gap: 16px;

    &-icon {
      width: 30px;
      height: 30px;
      color: $color-hf;
      stroke: $color-text;

      @include breakpoint((pad, down)) {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>

