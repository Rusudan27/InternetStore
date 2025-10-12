<template>
  <div class="sneakers-card">
    <div class="sneakers-card__top">
      <a :href="href || '#'" class="sneakers-card__img">
        <img :src="img" :alt="alt" loading="lazy" decoding="async" />
      </a>

      <button
        class="sneakers-card__fav"
        type="button"
        :aria-pressed="fav ? 'true' : 'false'"
        :aria-label="fav ? 'Удалить из избранного' : 'Добавить в избранное'"
        @click="$emit('toggle-fav')"
      >
        <SvgoSavedbtn class="sneakers-card__fav-icon" />
      </button>

      <div class="sneakers-card__bottom">
        <a :href="href || '#'" class="sneakers-card__title typography-p1">
          {{ title }}
        </a>

        <div class="sneakers-card__prices">
          <span class="sneakers-card__prices-discount typography-p1">
            {{ price }}$
          </span>
          <span v-if="oldPrice" class="sneakers-card__prices-common">
            {{ oldPrice }}$
          </span>
        </div>

        <button
          class="sneakers-card__btn"
          type="button"
          :aria-label="`Добавить в корзину: ${title}`"
          @click="$emit('add-to-cart')"
        >
          <SvgoBasketbtn class="sneakers-card__btn-icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  img: string
  alt: string
  price: number | string
  oldPrice?: number | string
  href?: string
  fav?: boolean
}>()

defineEmits<{
  (e: 'toggle-fav'): void
  (e: 'add-to-cart'): void
}>()
</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
.sneakers-card {
  width: 310px;
  border: 1px solid $white;
  overflow: hidden;
  background: transparent;
  display: flex;
  flex-direction: column;

	@include breakpoint((pad, down)) {
		width: 100%; 
		box-sizing: border-box;
	}

  &__top {
    position: relative;
  }

  &__fav {
    position: absolute;
    display: grid;
    right: 15px;
    top: 12px;

    &-icon {
      width: 22px;
      height: 22px;
      color: $white;
    }
  }

  &__img {
    height: 310px;
    background: $white;
    border-bottom: 1px solid $black;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 24px 16px;

	 	@include breakpoint((pad, down)) {
			height: 260px; 
			padding: 20px 14px;
		}

    img {
      width: 100%;
      object-fit: contain;
      object-position: center bottom;
      display: block;
    }
  }

  &__bottom {
    display: grid;
    grid-template-columns: 1fr 40px;
    grid-template-rows: auto auto;
    grid-template-areas:
      'title title'
      'prices btn';
    gap: 12px;
    padding: 16px;
    background: $black;
	 
	 	@include breakpoint((pad, down)) {
			min-height: 100px; 
			gap: 10px; 
			padding: 14px; 
		}
  }

  &__title {
    grid-area: title;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    text-align: left;
    line-height: 1.2;
    min-height: calc(1.2em * 2);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__prices {
    grid-area: prices;
    align-self: end;
    display: flex;
    gap: 12px;

    &-discount {
      color: $green;
    }

    &-common {
      color: $white;
      font-family: $Righteous;
      font-size: $font-size-xs;
      text-decoration: line-through;
    }
  }

  &__btn {
    grid-area: btn;
    justify-self: end;
    align-self: end;
    color: $white;
    width: 30px;
    height: 30px;
    place-items: center;
  }
}
</style>


