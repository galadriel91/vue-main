<template>
    <div class="projects">
        <div class="projectsTitle">
            <h2>PROJECTS</h2>
            <ProjectsList />
            <ProjectsPagi />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectsList from '@/components/projects/ProjectsList.vue';
import ProjectsPagi from './ProjectsPagi.vue';

export default defineComponent({
    components: {
        ProjectsList,
        ProjectsPagi,
    },

    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/projects/MainProjects.scss';
</style>
