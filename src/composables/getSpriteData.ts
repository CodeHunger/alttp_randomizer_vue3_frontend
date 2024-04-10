import {ref} from "vue";
import axios, {AxiosResponse} from "axios";
import {SpriteData} from "@/dto/spriteData";


export const getSprites = () => {
    const loading = ref(true);
    const sprites = ref<SpriteData[]>([]);
    const status = ref();

    axios
        .get(`sprites`)
        .then((response: AxiosResponse<SpriteData[]>) => {
            loading.value = false;
            status.value = {code: response.status};
            sprites.value = response.data;
        })

    return { loading, sprites, status }
}