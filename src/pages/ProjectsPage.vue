<template>
    <div class="projects">
        <div class="projectsTitle">
            <h2>PROJECTS</h2>
            <ProjectsList />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectsList from '../components/projects/ProjectsList.vue';

export default defineComponent({
    components: {
        ProjectsList,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/ProjectsPage';
</style>
