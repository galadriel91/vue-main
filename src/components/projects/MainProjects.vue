<template>
    <div class="projects">
        <div class="projectsTitle">
            <h2>PROJECTS</h2>
            <ProjectFilter />
            <ProjectsList />
            <ProjectsPagi />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectsList from '@/components/projects/ProjectsList.vue';
import ProjectsPagi from './ProjectsPagi.vue';
import ProjectFilter from './ProjectFilter.vue';

export default defineComponent({
    components: {
        ProjectsList,
        ProjectsPagi,
        ProjectFilter,
    },

    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/projects/MainProjects.scss';
</style>
