<template>
    <div class="contact">
        <h1>CONTACT</h1>
        <ContactInfo />
        <ContactForm />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactInfo from '../components/contact/ContactInfo.vue';
import ContactForm from '../components/contact/ContactForm.vue';

export default defineComponent({
    components: {
        ContactInfo,
        ContactForm,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/ContactPage';
</style>
