<template>
    <div :style="style"></div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const mousePos = ref({
    x: 0,
    y: 0,
});

const targetPos = ref({
    x: 0,
    y: 0,
});

const distX = ref(0);
const distY = ref(0);

const style = computed(() => {
    return {
        transform: `translate(${mousePos.value.x}px, ${mousePos.value.y}px)`,
    };
});

const render = () => {
    distX.value = targetPos.value.x - mousePos.value.x;
    distY.value = targetPos.value.y - mousePos.value.y;
    mousePos.value.x = mousePos.value.x + distX.value * 0.1;
    mousePos.value.y = mousePos.value.y + distY.value * 0.1;
    requestAnimationFrame(render);
};

render();

const handleMove = (e: any) => {
    if (window.innerWidth >= 760) {
        targetPos.value.x = e.clientX;
        targetPos.value.y = e.clientY;
    }
};

window.addEventListener('mousemove', handleMove);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/MainMouse.scss';
</style>
