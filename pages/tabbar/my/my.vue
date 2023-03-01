<template>
	<view>
		<view class="" v-if="isLogin">
			<view class="">
				{{loginInfo.author_name}}
			</view>
			<view class="" @click="logout">
				退出登录
			</view>
		</view>
		<navigator url="/pages/login/login" v-else>登录</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginInfo: {},
				isLogin: false
			}
		},
		onLoad() {
			this.getLoginInfo()
		},
		methods: {
			async getLoginInfo() {
				const uid = uni.getStorageSync('uid')
				if (uid) {
					this.isLogin = true
				}
				const res = await uniCloud.callFunction({
					name: 'getList',
					data: {
						listName: 'user',
						wkv: {
							_id: uid
						}
					}
				})
				console.log(res);
				this.loginInfo = res.result.data[0]
			},
			logout() {
				uni.removeStorageSync('uid')
				this.loginInfo = {}
				this.isLogin = false
			}
		}
	}
</script>

<style>

</style>
