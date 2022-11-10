import { useCommon } from '@/store/commonStore';

const getPage = () => () => {
    const common = useCommon();
    const { ON_LOADING } = common;
    ON_LOADING();
};

export { getPage };
