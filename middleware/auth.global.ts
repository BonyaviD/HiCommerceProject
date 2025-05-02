// middleware/auth.global.ts
import type { User } from '~/types/User'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userState = useState<User | null>('user', () => ({
    id: 1,
    name: 'Navid',
    role: 'admin', // تست با 'user' هم می‌تونی بکنی
  }))

  const tokenState = useState<string | null>('token', () => null)

  // فقط در کلاینت می‌تونیم localStorage رو بخونیم
  if (process.client && !tokenState.value) {
    const localToken = localStorage.getItem('token')
    if (localToken) {
      tokenState.value = localToken
    }
  }

  if (!tokenState.value) {
    if (to.path.startsWith('/admin/dashboard')) {
      return navigateTo('/login')
    }
    return
  }

  // اگر بخوای کار واقعی بکنی، این قسمت fetch فعاله:

  /*
  if (!userState.value) {
    try {
      const { data, error } = await useFetch<User>('/api/me', {
        headers: { Authorization: `Bearer ${tokenState.value}` },
      })

      if (error.value || !data.value) {
        return navigateTo('/login')
      }

      userState.value = data.value

      if (to.path.startsWith('/admin/dashboard') && data.value.role !== 'admin') {
        return navigateTo('/unauthorized')
      }
    } catch (e) {
      console.error(e)
      return navigateTo('/login')
    }
  }
  */

  // حالت تست با role دستی:
  if (to.path.startsWith('/admin/dashboard') && userState.value?.role !== 'admin') {
    return navigateTo('/login')
  }
})
