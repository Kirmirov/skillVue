<template>
	<div class="form__counter" :class="{product__counter: addFrame}">
		<button type="button" class="minus" aria-label="Убрать один товар" @click="countMinus()">
		<svg width="12" height="12" fill="currentColor">
			<use xlink:href="#icon-minus"></use>
		</svg>
		</button>

		<input type="text" v-model.number="counterLocal" name="count">

		<button type="button" class="plus" aria-label="Добавить один товар" @click="countPlus()">
		<svg width="12" height="12" fill="currentColor">
			<use xlink:href="#icon-plus"></use>
		</svg>
		</button>
	</div>
</template>

<script>
export default {
  data() {
    return {
      counterLocal: this.counterStart,
    };
  },
  props: {
    addFrame: {
      type: Boolean,
      default: false,
    },
    counterStart: {
      type: Number,
    },
  },
  methods: {
    countMinus() {
      if (this.counterLocal <= 1) return;

      this.counterLocal -= 1;
      this.$emit('update:counterStart', this.counterLocal);
    },
    countPlus() {
      if (this.counterLocal >= 100) return;

      this.counterLocal += 1;
      this.$emit('update:counterStart', this.counterLocal);
    },
  },
  watch: {
    counterLocal(value) {
      if (this.counterLocal <= 1 || this.counterLocal >= 100) return;

      this.counterLocal = value;
      this.$emit('update:counterStart', this.counterLocal);
    },
  },
};
</script>

<style scoped>
button {
	cursor: pointer;
}
</style>
