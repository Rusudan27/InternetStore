<template>
  <div class="selection-menu typography-p2">
    <NuxtLink
      v-for="{ label, to, icon } in menuLinks"
      :key="to"
      :to="to"
      class="selection-menu__link"
    >
      <span>{{ label }}</span>
      <component :is="icon" class="selection-menu__icon" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import SvgoArrow from '@/assets/icons/arrow.svg'

const menuLinks = [
  { label: "Women’s footwear", to: "/women", icon: SvgoArrow },
  { label: "Men’s Footwear", to: "/men", icon: SvgoArrow },
  { label: "Kids’ Footwear", to: "/kids", icon: SvgoArrow },
  { label: "Accessories", to: "/accessories", icon: SvgoArrow }
]
</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;

.selection-menu {
  display: flex;
  align-items: center;
  gap: 81px;
  color: $white;
  margin-top: 140px;

  @include breakpoint((pad, down)) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 48px;
  }

  &__link {
	 align-items: center;

    @include breakpoint((pad, down)) {
      flex-direction: column;
    }
  }

  &__icon {
    width: 15px;
    height: 15px;
    margin-left: 10px;
 

    @include breakpoint((pad, down)) {
      width: 12px;
      height: 12px;
      margin-left: 0;
      margin-top: 4px;
    }
  }
}
</style>

