<template>
    <div class="waveWrap">
        <div class="wave wave-bg">&nbsp;</div>
        <div class="waveInnerWrap">
            <div>
                <h2>
                    <slot name="waveMessage"></slot>
                </h2>
                <a href="https://github.com/galadriel91" target="_blank">
                    <img
                        src="@/assets/image/github.png"
                        alt="깃허브 로고 아이콘"
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/MainWave';
</style>
