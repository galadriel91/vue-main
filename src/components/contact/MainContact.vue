<template>
    <div class="contact">
        <h1>CONTACT</h1>
        <ContactForm />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '@/components/contact/ContactForm.vue';

export default defineComponent({
    components: {
        ContactForm,
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/contact/MainContact.scss';
</style>
