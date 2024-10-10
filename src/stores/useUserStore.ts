import { acceptHMRUpdate, defineStore } from 'pinia'
import jwt_decode from 'jwt-decode'
import type { DecodedUserFromToken, User, UserCredentials } from '~/types'

const useUserStore = defineStore('user', {
  state: () => ({
    user: undefined as User | undefined,
    error: undefined as unknown,
  }),
  getters: {
    isAuthenticated: (state) => {
      if (!state.user?.accessToken)
        return false
      return (jwt_decode(state.user.accessToken) as DecodedUserFromToken).exp > Math.floor(Date.now() / 1000)
    },

    isUserName: (state) => {
      return state.user?.username;
    },
    
  },
  actions: {
    async login(credentials: UserCredentials) {
      const { data, error, isLoading } = useRequest('/auth/signin', { data: credentials, method: 'POST' }, { immediate: true })
      console.log(data)

      watch(data, (value) => {
        this.$patch({
          user: {
            accessToken: value.accessToken,
            username: value.username,
            email: value.email,
            roles: value.roles[0]
          }
        })
      })

      watch(isLoading, (value) => {
        if (!value && !error) {
          const accessToken = this.user?.accessToken
          this.$patch({
            user: {
              accessToken
            },
          })
        }
      })

      watch(error, (value) => {
        if (value)
          this.$patch({ error: value })
      })
    },
    logout() {
      this.$reset()
      this.router.push({ name: 'login' })
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))

export default useUserStore
