<template>
	<ul class="colors" :class="{ 'colors--black': isShortType }">
		<li class="colors__item" v-for="color in colors" :key="color.id">
			<label class="colors__label">
				<input
				v-model="colorLocal" class="colors__radio sr-only" type="radio" name="color" :value="color.id"/>
				<span class="colors__value" :style="{'background-color': color.color}"></span>
			</label>
		</li>
	</ul>
</template>

<script>
import colors from "@/data/colors.js";

export default {
	data() {
		return {
			colorLocal: this.colorStart
		}
	},
	props: {
		colorStart: {
			type: Number,
			require: true
		},
		isShortType: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		colors() {
			if(this.isShortType)
				return colors.filter(item => item.short === true);
			else 
				return colors;
		}
	},
	watch: {
		colorLocal(value) {
			this.$emit('update:colorStart', value);
		}
	}
}
</script>