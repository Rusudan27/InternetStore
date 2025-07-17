<template>
  <div class="layout">
    <MainHeader />
    <NuxtPage  class="layout__page"/>
	 <MainFooter />
  </div>
</template>


<style lang="scss">
.layout {
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;

  &__page{
		flex-grow: 1;
  }
}
</style>
