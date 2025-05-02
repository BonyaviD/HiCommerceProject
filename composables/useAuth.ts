export const useAuth = () => {
    const authToken = useState('authToken', () => {
        // فقط در مرورگر از localStorage استفاده می‌کنیم
        if (typeof window !== 'undefined') {
          return localStorage.getItem('token') || ''
        }
        return '' // برای حالت SSR یا سرور
      })
      
        const user = useState('user', () => null)
    
  
    const fetchUser = async () => {
      if (!authToken.value) return
  
      try {
        const res = await fetch('http://api.hicommerce.ir/api/Identity/Scanner/InsertAuthorizedEndpoints', {
          headers: {
            Authorization: `Bearer ${authToken.value}`
          }
        })
  
        if (!res.ok) throw new Error('خطا در دریافت اطلاعات کاربر')
  
        const data = await res.json()
        console.log('دریافت اطلاعات کاربر:', data)
        user.value = data.result // فرض بر اینه که این داده شامل رول هم هست
      } catch (err) {
        console.error('خطا در دریافت اطلاعات کاربر:', err)
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
  