import axios, {AxiosResponse} from 'axios'
import {ref} from "vue";
import {RomDataRaw} from "@/dto/romDataRaw";
import {RomData} from "@/dto/romData";



export const getRom = (hash: string) => {
    const loading = ref(true);
    const rom = ref<RomData>();
    const status = ref();

    axios
        .get(`rom/${hash}`)
        .then((response: AxiosResponse<RomDataRaw>) => {
            loading.value = false;
            status.value = {code: response.status};
            rom.value = RomData.fromRomDataRaw(response.data);
        })

    return { loading, rom, status }
}