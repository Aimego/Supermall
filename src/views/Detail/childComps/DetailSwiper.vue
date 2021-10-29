<template>
	<div>
		<Swiper class="detail-swiper">
			<SwiperItem v-for="(item,index) in topImage" :key="index">
				<img :src="item" alt="">
			</SwiperItem>
		</Swiper>
	</div>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
	export default{
		components:{
			Swiper,
			SwiperItem
		},
		props:{
			topImage:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.detail-swiper{
		/* border: 1px solid red; */
		height: 300px;
		overflow: hidden;
	}
	/* .swiper img{
		width: 100%;
		height: 100%;
	} */
</style>
