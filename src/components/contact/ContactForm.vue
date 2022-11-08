<template>
    <div class="contactForm">
        <form ref="form" @submit.prevent="onSendEmail">
            <div>
                <label for="inputName">이름</label>
                <input
                    id="inputName"
                    type="text"
                    placeholder="이름을 입력해주세요."
                    name="from_name"
                    v-model="name"
                />
            </div>
            <div>
                <label for="inputEmail" v-if="isValid">이메일</label>
                <label for="inputEmail" class="failCheck" v-else
                    >유효한 이메일을 입력해 주세요</label
                >
                <input
                    id="inputEmail"
                    type="text"
                    placeholder="이메일을 입력해주세요"
                    name="from_email"
                    v-model="email"
                />
            </div>
            <div>
                <label for="inputTel">연락처</label>
                <input
                    id="inputTel"
                    type="text"
                    placeholder="연락처를 입력해주세요"
                    v-model="number"
                    name="from_number"
                />
            </div>
            <div>
                <label for="inputTitle">제목</label>
                <input
                    id="inputTitle"
                    type="text"
                    placeholder="제목을 입력해주세요"
                    v-model="title"
                    name="from_title"
                />
            </div>
            <div class="inputContentWrap">
                <label for="inputContent">메세지를 남겨주세요</label>
                <textarea
                    id="inputContent"
                    type="text"
                    placeholder="내용을 입력해주세요"
                    name="from_message"
                    v-model="content"
                ></textarea>
            </div>
            <button class="inputButton" value="Send" type="submit">
                메세지 보내기
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, type ComputedRef } from 'vue';
import { useCommon } from '@/store/commonStore';
import emailjs from 'emailjs-com';

export default defineComponent({
    setup() {
        const commonStore = useCommon();
        const { ON_LOADING, OFF_LOADING, MODAL_SUCCESS, MODAL_FAIL } =
            commonStore;

        // Email 정보
        const name = ref('');
        const email = ref('');
        const number = ref('');
        const title = ref('');
        const content = ref('');
        const form = ref('');

        const isCheck = ref(true);
        const isValid: ComputedRef<boolean> = computed(() => {
            if (email.value === '') {
                return true;
            } else {
                return checkValidateEmail(email.value);
            }
        });

        const onSendEmail = async () => {
            const valueArray = [
                name.value,
                email.value,
                number.value,
                title.value,
                content.value,
            ];
            valueArray.forEach(v => {
                if (v == '') {
                    isCheck.value = false;
                }
            });
            if (isCheck.value && isValid.value) {
                ON_LOADING();
                await emailjs.sendForm(
                    import.meta.env.VITE_APP_EMAIL_ID,
                    import.meta.env.VITE_APP_EMAIL_TEMPLATE,
                    form.value,
                    import.meta.env.VITE_APP_EMAIL_USER_ID,
                );
                OFF_LOADING();
                MODAL_SUCCESS();
                initForm();
            } else {
                OFF_LOADING();
                MODAL_FAIL();
            }
        };
        const checkValidateEmail = (email: string) => {
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };
        const initForm = () => {
            name.value = '';
            email.value = '';
            number.value = '';
            title.value = '';
            content.value = '';
        };
        return {
            name,
            email,
            number,
            title,
            content,
            form,
            onSendEmail,
            isValid,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/contact/ContactForm';
</style>
