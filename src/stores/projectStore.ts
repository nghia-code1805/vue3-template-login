import { acceptHMRUpdate, defineStore } from "pinia";
import requestData from "~/composables/RequestDataProject";
import { Project } from "~/types";

const projectStore = defineStore('project', {
    state: () => ({
        project: undefined as Project | undefined,
        error: undefined as unknown,
    }),
    getters: {
        isData: (state) => {
            return state.project?.author
        }
    },
    actions: {
        async isGetData() {
            try {
                const { response, error, isLoading } = requestData('/quotes', { method: 'GET' }, { immediate: true });
                

                watch(response, (value) => {
                    this.$patch({
                        project: {
                            // id: value.id,
                            // quote: value.quote,
                            // author: value.author
                        }
                    })
                })

                watch(isLoading, (value) => {
                    if (!value && !error) {
                        const author = this.project?.author
                        this.$patch({
                            project: {
                                author
                            },
                        })
                    }
                })

                watch(error, (value) => {
                    if (value)
                        this.$patch({ error: value })
                })
            } catch (error) {
                alert(error)
            }
        }
    },
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))

export default projectStore