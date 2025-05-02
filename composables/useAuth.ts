// composables/useAuth.ts
import type { User } from '~/types/User'

export const useAuth = () => {
  const config = useRuntimeConfig()

  const authToken = useState<string>('authToken', () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token') || ''
    }
    return ''
  })

  const user = useState<User | null>('user', () => null)

  const fetchUser = async () => {
    if (!authToken.value) return

    try {
      const res = await fetch(`${config.public.apiBase}/Admin/Users/GetUser/1`, {
        headers: {
          Authorization: `Bearer ${authToken.value}`
        }
      })

      if (!res.ok) throw new Error('خطا در دریافت اطلاعات کاربر')

      const data = await res.json()
      user.value = data.result as User // اطمینان از تایپ
    } catch (err) {
      user.value = null
    }
  }

  const logout = () => {
    authToken.value = ''
    user.value = null
    localStorage.removeItem('token')
    navigateTo('/login')
  }

  return { authToken, user, fetchUser, logout }
}
