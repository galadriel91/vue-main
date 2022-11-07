import { defineStore } from 'pinia';

export const useCommon = defineStore('common', {
    state: () => ({
        loading: false,
        isModal: false,
        modalMessage: '',
    }),
    actions: {
        ON_LOADING() {
            this.loading = true;
        },
        OFF_LOADING() {
            this.loading = false;
        },
        MODAL_SUCCESS() {
            this.isModal = true;
            this.modalMessage = '성공적으로 메일을 보냈습니다.';
        },
        MODAL_FAIL() {
            this.isModal = true;
            this.modalMessage = '다시 한번 확인해 주세요';
        },
        CLOSE_MODAL() {
            this.isModal = false;
        },
    },
});
