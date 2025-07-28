<template>
  <div class="layout">
    <Header></Header>
    <NuxtPage  class="layout__page"/>
	<Footer></Footer>
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
