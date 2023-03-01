<template>
	<view class="reg">
		<input type="text" v-model="pnum" />
		<input type="text" v-model="author_name" />
		<input password v-model="psw" />
		<input password v-model="cfpsw" />
		<button type="default" @click="clickreg">注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pnum: '',
				author_name: '',
				psw: '',
				cfpsw: ''
			};
		},
		methods: {
			async clickreg() {
				// 前端判断省略
				const res = await uniCloud.callFunction({
					name: 'addList',
					data: {
						listName: 'user',
						addObj: {
							"article_likes_ids": [],
							"author_likes_ids": [],
							"author_name": this.author_name,
							"pnum": this.pnum,
							"psw": this.cfpsw
						}
					}
				})
				if (res.result.id) {
					uni.setStorageSync('uid', res.result.id)
					await uni.showToast({
						title: '注册成功'
					})
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/tabbar/my/my'
						})
					}, 1000)
				} else {
					uni.showToast({
						title: res.result,
						icon: 'none'
					})
				}

				console.log(res);
			}
		}
	}
</script>

<style lang="scss">

</style>
