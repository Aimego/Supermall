<template>
	<div ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				bscroll:'',
			}
		},
		props:{
			ProbeType:{
				type:Number,
				default:0
			},
			PullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		mounted() {
				// console.log(this.$refs.wrapper)
				this.bscroll = new BScroll(this.$refs.wrapper,{
					probeType:this.ProbeType,
					pullUpLoad:this.PullUpLoad,
					click:true
				})
				this.bscroll.on('scroll',(e)=>{
					this.$emit('scroll',e)
				})
				if(this.PullUpLoad){
					this.bscroll.on('pullingUp',()=>{
						console.log('触底事件')
						this.$emit('PullUp')
					})
				}
				
		},
		methods:{
			BackTop(x,y,time=500){
				this.bscroll.scrollTo(x,y,time)
			},
			finishPullUp(){
				this.bscroll.finishPullUp()
			},
			MyReFresh(){
				console.log('我被触发了')
				this.bscroll.refresh()
			},
			getScrollY(){
				
				return this.bscroll.y ? this.bscroll.y : 0
			}
		}
	}
</script>

<style scoped="scoped">

</style>
