import {request} from './request.js'

export function getDetail(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}

export function getRecomment(){
	return request({
		url:'/recommend'
	})
}

// 利用对象来进行整合数据
export class NetGoods{
	constructor(itemInfo,columns,services) {
	    this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.services = services
		this.realPrice = itemInfo.lowNowPrice
	}
}

export class Shop{
	constructor(shopMsg) {
	    this.shopLogo = shopMsg.shopLogo
		this.name = shopMsg.name
		this.sells = shopMsg.cSells
		this.goods = shopMsg.cGoods
		this.score = shopMsg.score
		this.shopUrl = shopMsg.shopUrl
	}
}

// 5. 整合商品参数信息
export class Parameter{
	constructor(info,rule){
		this.product = info.set
		this.sizeKind = rule.tables[0]
	}
}

// 6. 整合推荐数据
export class GoodsList{
	constructor(list){
		const GoodsArr = []
	    list.forEach((val)=>{
			GoodsArr.push({
				iid:val.item_id,
				show:{
					img:val.image
				},
				title:val.title,
				price:val.price,
				orgPrice:val.discountPrice
			})
		})
		this.Arr = GoodsArr
	}
}

// 7. 整合购物车数据
export class JoinCar{
	constructor(id,goods,img,desc){
		this.id = id
		this.title = goods.title
		this.price = goods.realPrice
		this.img = img
		this.desc = desc
	}
}

export class GoodsCollect{
	constructor(goods,id,img){
		this.realPrice = goods.realPrice
		this.oldPrice = goods.oldPrice
		this.title = goods.title
		this.id = id
		this.img = img
	}
}


// 整合立即购买数据
export class FastBuy{
	constructor(item){
		this.id = item.id
		this.img = item.img
		this.price = item.realPrice
		this.title = item.title
		this.number = 1
	}
}