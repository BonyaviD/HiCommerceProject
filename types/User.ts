// types/User.ts
export interface User {
    id: number
    userName: string
    email: string
    phoneNumber: string | null
    emailConfirmed: boolean
    isActive: boolean
    phoneNumberConfirmed: boolean
    role?: 'Admin' | 'User' | 'Programmer' // اگر در دیتا نیست، می‌تونه اختیاری باشه
  }
  