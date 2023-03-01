<template>
	<view class="home">
		<navbar />
		<tab :list="tab_lable" :tabIndex="tabIndex" @tabChange="tabChange" />
		<!-- current属性控制swiper-item活动到当前index 
		current变化时，触发@change事件,同时把current值传递给change事件
		-->
		<swiper class="swp" :current="tabIndex" @change="swpChange">
			<swiper-item class="swp-item" v-for="(item,index) in tab_lable">
				<view class="">
					{{index}}
				</view>
				<scroll-view scroll-y class="scr-view">
					<scrCard :cardList="cardList" />
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab_lable: [],
				cardList: [],
				tabIndex: 0
			}
		},
		onLoad() {
			this.getLable()

		},
		methods: {
			async getLable() {
				const res = await uniCloud.callFunction({
					name: 'getList',
					data: {
						listName: 'label'
					}
				})
				// console.log(res);
				this.tab_lable = res.result.data
				this.getCardList(this.tab_lable[0].name)
			},
			async getCardList(label) {
				const res = await uniCloud.callFunction({
					name: 'getList',
					data: {
						listName: 'article',
						filter: {
							'content': false
						},
						wkv: {
							'classify': label
						}
					}
				})
				// console.log(res);
				this.cardList = res.result.data
				console.log(this.cardList);
			},
			tabChange(e) {
				// console.log(e);
				this.tabIndex = e.i
				this.getCardList(e.n)
			},
			swpChange(e) {
				// console.log(e.detail);
				this.tabIndex = e.detail.current
				this.getCardList(this.tab_lable[e.detail.current].name)
			}
		}
	}
</script>

<style lang="scss">
	.home {
		padding-top: 90rpx;

		.navbar {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
		}

		background-color: #ccc;

		.swp {
			height: calc(100vh - 180rpx - var(--window-bottom));
			touch-action: none;

			.scr-view {
				height: 100%;
				touch-action: none;

				::-webkit-scrollbar {
					width: 0;
					height: 0;
					color: transparent;

				}
			}
		}

	}
</style>
