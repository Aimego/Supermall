<template>
	<Swiper>
		<SwiperItem v-for="(item,index) in Mybanners" :key="index">
			<a :href="item.link">
				<img :src="item.image" alt="" @load="imageLoad">
			</a>
		</SwiperItem>
	</Swiper>
</template>

<script>
	import {Swiper , SwiperItem} from 'components/common/swiper/index.js'
	export default{
		components:{
			Swiper,
			SwiperItem
		},
		props:{
			Mybanners:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			imageLoad(){
				this.$emit('swiperImageLoad')
			}
		}
	}
</script>

<style scoped="scoped">
</style>
