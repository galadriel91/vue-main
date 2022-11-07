<template>
    <div class="visualWrap">
        <div :class="{ on: isFirst }">
            <img
                src="@/assets/image/bg-1.jpg"
                alt="메인 이미지"
                @load="onLoadImage"
            />
        </div>
        <div :class="{ on: isSecond }">
            <img
                src="@/assets/image/bg-2.jpg"
                alt="메인 이미지"
                @load="onLoadImage"
            />
        </div>
        <div :class="{ on: isThird }">
            <img
                src="@/assets/image/bg-3.jpg"
                alt="메인 이미지"
                @load="onLoadImage"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import { useCommon } from '@/store/commonStore';
export default defineComponent({
    setup() {
        const commonStore = useCommon();
        const { OFF_LOADING } = commonStore;

        const isFirst = ref(true);
        const isSecond = ref(false);
        const isThird = ref(false);
        const interval = ref(0);

        const onChangeScreen = () => {
            if (isFirst.value) {
                isFirst.value = false;
                isSecond.value = true;
            } else if (isSecond.value) {
                isSecond.value = false;
                isThird.value = true;
            } else if (isThird.value) {
                isThird.value = false;
                isFirst.value = true;
            }
        };
        const onLoadImage = () => {
            OFF_LOADING();
        };
        onMounted(() => {
            interval.value = setInterval(onChangeScreen, 3000);
        });
        onBeforeUnmount(() => {
            clearInterval(interval.value);
        });
        return {
            isFirst,
            isSecond,
            isThird,
            onChangeScreen,
            onLoadImage,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/main/MainSlide';
</style>
