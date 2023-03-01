<template>
	<view class="navbar">
		<!-- #ifdef H5 -->
		<!-- <view class="zhanwei" style="height: 15rpx;"></view> -->
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="zhanwei" :style="{height:stuH+'px'}"></view>
		<!-- #endif -->
		
		<view class="search-bar">
			<icon type="search" color="#999" size="30rpx"/>
			<text>uni-app、vue</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "navbar",
		data() {
			return {
				stuH:0
			};
		},
		created() {
			const info = uni.getSystemInfoSync()
			this.stuH = info.statusBarHeight 
			// const mbinfo=uni.getMenuButtonBoundingClientRect()
			// console.log(mbinfo);
		}
	}
</script>

<style lang="scss">
	.navbar {
		// height: 90rpx;
		background-color: $base-color;
		padding:15rpx 30rpx;

		.search-bar {
			display: flex;
			align-items: center;
			background-color: #fff;
			height: 60rpx;
			border-radius: 30rpx;
			color: #999;
			font-size: 28rpx;
			padding-left: 30rpx;
			icon{
				margin-right: 15rpx;
			}
		}
	}
</style>
