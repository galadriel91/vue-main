<template>
    <div class="contact">
        <h1>CONTACT</h1>
        <!-- <ContactInfo /> -->
        <ContactForm />
        <ContactModal :isModal="isModal">
            <template #alertMessage>{{ modalMessage }}</template>
        </ContactModal>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactModal from '@/components/contact/ContactModal.vue';

export default defineComponent({
    components: {
        ContactForm,
        ContactModal,
    },
    setup() {
        const commonStore = useCommon();
        const { isModal, modalMessage } = storeToRefs(commonStore);
        // useLoading();
        return {
            isModal,
            modalMessage,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/contact/MainContact.scss';
</style>
