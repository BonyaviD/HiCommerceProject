// composables/useAuth.ts
export const useAuth = () => {
  const config = useRuntimeConfig()
  const authToken = useState('authToken', () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token') || ''
    }
    return ''
  })
  const user = useState('user', () => null)

  // const getUserStatus = () => {

  // }

  const fetchUser = async () => {
    if (!authToken.value) return

    try {
      const res = await fetch(`${config.public.apiBase}/Admin/Users/GetUser/1`, {
        headers: {
          Authorization: `Bearer ${authToken.value}`,
        },
      })

      if (!res.ok) throw new Error('خطا در دریافت اطلاعات کاربر')

      const data = await res.json()
      console.log('دریافت اطلاعات کاربر:', data)
      user.value = data.result
    } catch (err) {
      console.error('خطا در دریافت اطلاعات کاربر:', err)
      user.value = null
    }
  }

  const logout = () => {
    // endpoin deactive refresh token
    authToken.value = ''
    user.value = null
    localStorage.removeItem('token')
    navigateTo('/login')
  }

  const loginAndGetToken = async (username: string, password: string) => {
    try {
      const res = await fetch(`${config.public.apiBase}/Identity/Auth/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!res.ok) throw new Error('خطا در ورود به سیستم')

      const data = await res.json()
      const token = data.result.token
      const refreshToken = data.result.refreshToken

      localStorage.setItem('token', token)
      authToken.value = token
    } catch (err) {
      console.error('خطا در درخواست ورود:', err)
    }
  }

  return {
    authToken,
    user,
    fetchUser,
    loginAndGetToken,
    logout,
  }
}
