'use strict';
const db = uniCloud.database()

exports.main = async (event, context) => {
	const {
		listName,
		addObj
	} = event
	const uList = db.collection(listName)
	const pnumList = await uList.field({
		'pnum': true,
		'author_name':true
	}).get()
	if (pnumList.data.some(item => addObj.pnum === item.pnum)) {
		return '注册失败:手机号已被绑定其他账号'
	}
	if(pnumList.data.some(item => addObj.author_name === item.author_name)){
		return '注册失败:用户名已占用'
	}
	const res = await uList.add(addObj)
	return res
};
