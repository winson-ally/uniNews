<template>
	<view class="tab">
		<scroll-view scroll-x class="tab-src" :scroll-into-view="actid">
			<view class="scr-view">
				<view :id="'id'+index" @click="clickTitle(index,item.name)" :class="{tabact:tabIndex===index}" class="scr-item"
					v-for="(item,index) in list">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="menu-btn">
			<uni-icons type="gear" size="30"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tab",
		props: {
			list: {
				type: Array,
				default: []
			},
			tabIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				actid: ''
			};
		},
		watch: {
			tabIndex(n, o) {
				this.actid = 'id' + n
			}
		},
		methods: {
			clickTitle(index,name) {
				this.$emit('tabChange', {i:index,n:name})
				this.actid = 'id' + index
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		background-color: #fff;
		display: flex;
		align-items: center;

		.tab-src {
			width: 90%;
			border-right: 1px solid red;

			::-webkit-scrollbar {
				width: 0;
				height: 0;
				color: transparent;
			}

			.scr-view {
				display: flex;
				height: 90rpx;
				align-items: center;
				width: auto;

				.scr-item {
					padding: 0 20rpx;
					white-space: nowrap;

					&.tabact {
						color: $base-color;
					}
				}
			}

		}
	}
</style>
