<template>
  <section class="sale-section">
    <div class="sales">
      <h1 class="sales__title typography-h2">sale</h1>
      <p class="sales__all-items">VIEW ALL</p>
    </div>

    <div class="sneakers-cards">
      <SneakersCard
        v-for="it in items"
        :key="it.id"
        :title="it.title"
        :img="it.img"
        :alt="it.alt"
        :price="it.price"
        :oldPrice="it.oldPrice"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import imgOzelia from '@/assets/img/adidaso.jpg'
import imgOzweego from '@/assets/img/adidas.jpg'
import imgNB from '@/assets/img/newbalance.jpg'
import imgChild from '@/assets/img/child.jpg'

type Item = {
  id: number
  title: string
  img: string
  alt: string
  price: number
  oldPrice?: number
  href?: string
  fav?: boolean
}

const items: Item[] = [
  {
    id: 1,
    title: 'adidas Originals Ozelia',
    img: imgOzelia,
    alt: 'adidas Originals Ozelia',
    price: 97,
    oldPrice: 136,
  },
  {
    id: 2,
    title: 'adidas Originals Ozweego W',
    img: imgOzweego,
    alt: 'adidas Originals Ozweego W',
    price: 97,
    oldPrice: 136,
  },
  {
    id: 3,
    title: 'New Balance',
    img: imgNB,
    alt: 'New Balance',
    price: 46,
    oldPrice: 85,
  },
  {
    id: 4,
    title: "Children's sandals Merrell Panther",
    img: imgChild,
    alt: "Children's sandals Merrell Panther",
    price: 20,
    oldPrice: 33,
  },
]

const onAdd = (item: Item) => {
  console.log('add to cart:', item.title)
}
</script>

<style scoped lang="scss"> 
@use "@/assets/scss/breakpoints" as *;

.sale-section {
  position: relative;
  width: 100%;
  padding: 0;
}

.sales {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-top: 70px;
  margin-bottom: 40px;

  @include breakpoint((pad, down)) {
		font-size: 64px;
	}
  &__all-items {
    font-family: $Raleway;
    font-size: $font-size-xm;
    text-decoration-line: underline;
    font-weight: $regular;
    line-height: 20px;
 		
	 @include breakpoint((pad, down)) {
		font-size: $font-size-s;
	}
  } 
}

.sneakers-cards {
  display: grid;
  grid-template-columns: repeat(4, 310px);
  gap: 20px;
  margin: 0 0 64px 0;
  padding: 0;

   @include breakpoint((pad, down)) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: 12px;
		row-gap: 16px;
		padding: 0 12px;
	}
}

</style>
