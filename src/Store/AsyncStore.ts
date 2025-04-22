import { createApiStore } from "./CreateAPI";

export const BaseURL = "https://jsonplaceholder.typicode.com/";

//get Apis
export const useUserApiStore = createApiStore<any[]>("users");
