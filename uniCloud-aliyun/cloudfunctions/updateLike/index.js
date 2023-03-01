'use strict';
const db = uniCloud.database()
const uList = db.collection('user')
const dbCmd = db.command
exports.main = async (event, context) => {
	const {
		aid,
		uid
	} = event
	const res = await uList.doc('6232ddf710012500010a31fc').get()
	console.log(res);
	let like = null
	if (res.data[0].article_likes_ids.includes(aid)) {
		console.log(res.data[0].article_likes_ids.includes(aid));
		await uList.doc('6232ddf710012500010a31fc').update({
			'article_likes_ids': dbCmd.pull(aid)
		})
		like=false
	} else {
		console.log(22);
		await uList.doc('6232ddf710012500010a31fc').update({
			article_likes_ids: dbCmd.addToSet(aid)
		})
		like=true
	}
	return like
};


// 如果id存在则移除目标id， 否则把id增加到article_likes_ids 数组里面
