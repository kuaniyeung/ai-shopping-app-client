import { defineStore, StateTree } from "pinia";

interface State extends StateTree {
  user: Record<string, any> | null;
}
export default (storeId = "auth") => {
  const store = defineStore(storeId, {
    state: () =>
      ({
        user: null,
      }) as State,
    actions: {
      async getUser() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
      },
    },
  });

  return store();
};
