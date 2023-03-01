'use strict';
const db = uniCloud.database()

exports.main = async (event, context) => {
	const {
		listName,
		filter,
		wkv
	} = event
	if (filter) {
		if (wkv) {
			const res = await db.collection(listName).where(wkv).field(filter).get()
			return res
		}
		const res = await db.collection(listName).field(filter).get()
		return res
	}
	if (wkv) {
		const res = await db.collection(listName).where(wkv).get()
		return res
	}

	const res = await db.collection(listName).get()
	return res
};
