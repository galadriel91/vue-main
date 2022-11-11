<template>
    <div class="projects">
        <ProjectsItem />
        <div class="projectsTitle">
            <h2>PROJECTS</h2>
            <ProjectsList />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectsList from '@/components/projects/ProjectsList.vue';
import ProjectsItem from './ProjectsItem.vue';

export default defineComponent({
    components: {
        ProjectsList,
        ProjectsItem,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/projects/MainProjects.scss';
</style>
