import {request} from './request.js'

export function category(){
	return request({
		url:'/category'
	})
}

export function getSubCategory(maitKey){
	return request({
		url:'/subcategory',
		params:{
			maitKey
		}
	})
}