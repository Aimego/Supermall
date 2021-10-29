import Vue from 'vue'
import Vuex from 'vuex'
import {Message} from 'element-ui'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		AppTab:true, // 判断app中navbar是否出现
		PersonCar:[],
		AllSelect:false,
		PersonUser:{
			name:'',
			password:'',
			avatar:'https://i.loli.net/2021/10/27/bpmqfJu17FCI4HA.jpg',
			collect:[],
			information:{
				phone:'',
				realName:'',
				idCard:'',
				sex:'',
			},
			Address:[]
		}
	},
	mutations:{
		MyTabIf(state,payload){
			state.AppTab = payload
		},
		JoinCar(state,goods){
				goods.pick = false
				goods.number = 1
				state.PersonCar.push(goods)
				Message({
					message:'添加商品成功',
					type:'success',
					offset:30
				})
		},
		AddNumber(state,goods){
			goods.number++
			Message({
				message:'商品+1',
				type:'success',
				offset:30
			})
		},
		PickGoods(state,id){
			let index = state.PersonCar.findIndex((item)=>{
				return item.id === id
			})
			state.PersonCar[index].pick = !state.PersonCar[index].pick
		},
		AllPick(state){
			let flag = state.PersonCar.some((item,index)=>{
				return item.pick == false
			})
			if(flag){
				state.PersonCar.forEach((item,index,arr)=>{
					if(!item.pick){
						arr[index].pick = flag
					}
				})
			}else{
				state.PersonCar.forEach((item,index,arr)=>{
					if(item.pick){
						arr[index].pick = flag
					}
				})
			}
		},
		DeleteCar(state,arr){
			for(let i=0;i<arr.length;i++){
				let flag = state.PersonCar.findIndex(item=>{
					return item.id === arr[i].id
				})
				if(flag!=-1){
					state.PersonCar.splice(flag,1)
				}
			}
			
		},
		
		// 用户登录
		UserLogin(state,payload){
			state.PersonUser.name = payload.name
			state.PersonUser.password = payload.password
		},
		
		// 加入个人收藏夹
		UserCollect(state,item){
			Message({
				message:'收藏成功',
				type:"success",
				offset:30
			})
			state.PersonUser.collect.push(item)
		},
		
		// 取消收藏
		UserCollectDelete(state,index){
			Message({
				message:'取消收藏',
				offset:30
			})
			state.PersonUser.collect.splice(index,1)
		},
		
		
		// 新增地址(active)
		increaseAdd_active(state,item){
			state.PersonUser.Address.forEach(val=>{
				val.active = false
			})
			item.active = true
			state.PersonUser.Address.unshift(item)
		},
		
		// 新增地址
		increaseAdd(state,item){
			state.PersonUser.Address.push(item)
		},
		
		// 删除地址(保存后删除之前的地址)
		DeleteAdd(state,index){
			state.PersonUser.Address.splice(index,1)
		},
		
		// 设置真实手机
		SetPhone(state,payload){
			state.PersonUser.information.phone = payload
		},
		
		// 设置真实姓名
		SetRealName(state,payload){
			state.PersonUser.information.name = payload
		},
		
		// 设置身份证
		SetIdCard(state,payload){
			state.PersonUser.information.idCard = payload
		},
		
		// 设置性别
		SetSex(state,payload){
			state.PersonUser.information.sex = payload
		}
		
		
		
	},
	actions:{
		JoinMyCarOrNumber(content,payload){
			let flag = content.state.PersonCar.find(item=>item.id == payload.id)
			if(flag) content.commit('AddNumber',flag)
			else content.commit('JoinCar',payload)
		},
		JoinMyCollect(content,item){
			let flag = content.state.PersonUser.collect.findIndex(val=> val.id == item.id)
			if(flag!=-1){
				content.commit('UserCollectDelete',flag)
			}else{
				content.commit('UserCollect',item)
			}
		},
		JoinAddress(content,item){
				if(item.active){
					content.commit('increaseAdd_active',item)
				} else content.commit('increaseAdd',item)
		},
		EditAddress(content,index){
				console.log(index)
				if(content.state.PersonUser.Address[index].active){
					content.commit('increaseAdd_active',content.state.PersonUser.Address[index])
					content.commit('DeleteAdd',Number(index)+1)
				}
		}
	},
	getters:{
		// 封装PersonCar变量中被选中的商品
		SumOrder(state){
			let sum = 0
			let SumPick = []
			state.PersonCar.forEach((item)=>{
				if(item.pick){
					sum+=Number(item.price*item.number)
					SumPick.push(item)
				}
			})
			return {
			SumPrice:sum.toFixed(2)
			,SumPick}
		},
		AllCheckPick(state){
			if(state.PersonCar.length !=0){
				return !(state.PersonCar.some((item,index)=>{
					return item.pick == false
				}))
			}
			return false
		},
		// getters传参用法
		GoodsCollect:(state)=>(id)=>{
			console.log('111111')
			return state.PersonUser.collect.some(val=>val.id === id)
		}
	}
})
