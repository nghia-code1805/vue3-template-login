import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (!isClient)
    return

  const userStore = useUserStore()

  router.beforeEach((to) => {
    if (to.name === 'login' && userStore.isAuthenticated) {
      router.push({ path: '/test/homeTest' })
    }
    if ((to.name !== 'login') && !userStore.isAuthenticated) {
      router.push({ name: 'login' })
    }
  })
}
