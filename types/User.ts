// types/User.ts
export interface User {
    id: number
    userName: string
    email: string
    phoneNumber: string | null
    emailConfirmed: boolean
    isActive: boolean
    phoneNumberConfirmed: boolean
    role?: 'admin' | 'user' | 'guest' // اگر در دیتا نیست، می‌تونه اختیاری باشه
  }
  