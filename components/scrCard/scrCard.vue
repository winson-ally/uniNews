<template>
	<view class="scrCard">
		<!-- mode='base' -->
		<view class="mode-base" v-for="item in cardList">
			<image src="../../static/logo.png" />
			<view class="base-right">
				<view class="card-title">
					<text>发生范德萨范德萨</text>
					<view class="" @click="clickLike(item._id)">
						<uni-icons type="heart-filled" color="#f07373" ></uni-icons>
						<uni-icons type="heart" color="#f07373" ></uni-icons>
					</view>

				</view>
				<view class="tag-count">
					<view class="tag">
						发生范德
					</view>
					<view class="count">
						发生范德
					</view>
				</view>
			</view>
		</view>
		<!-- mode='column' -->
		<view class="mode-column">

		</view>
		<!-- mode='image' -->
		<view class="mode-image">

		</view>
	</view>
</template>

<script>
	export default {
		name: "scrCard",
		props: {
			cardList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			async clickLike(aid) {
				const res = await uniCloud.callFunction({
					name: 'updateLike',
					data: {
						aid
					}
				})
				console.log(res.result);
				
			}
		}
	}
</script>

<style lang="scss">
	.mode-base {
		background-color: #fff;
		margin: 10rpx;
		border-radius: 10rpx;
		display: flex;

		image {
			width: 120rpx;
			height: 120rpx;
		}
	}
</style>
