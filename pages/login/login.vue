<template>
	<view class="login">
		<input type="text" v-model="pnum" />
		<input password v-model="psw" />
		<button type="default" @click="login">登录</button>
		<button type="default" @click="gotoReg">注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pnum: '',
				psw: ''
			};
		},
		methods: {
			gotoReg() {
				uni.navigateTo({
					url: '/pages/reg/reg'
				})
			},
			async login() {
				const res = await uniCloud.callFunction({
					name: 'getList',
					data: {
						listName: 'user',
						wkv: {
							pnum: this.pnum,
							psw: this.psw
						}
					}
				})
				console.log(res);
				if (res.result.data.length > 0){
					uni.setStorageSync('uid',res.result.data[0]._id)
					uni.reLaunch({
						url:'/pages/tabbar/my/my'
					})
				}else{
					uni.showToast({
						title:'账号或密码有误',
						icon:'none'
					})
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
