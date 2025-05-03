<script setup>
import { useHead } from '#imports'
import { ref } from 'vue'
import { useState } from '#app'
const { authToken, user, fetchUser, logout, loginAndGetToken } = useAuth()

useHead({
  title: 'ورود کاور - صفحات | فرست - قالب مدیریت بوت‌استرپ',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0' },
    { name: 'description', content: '' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/assets/img/favicon/favicon.ico' },
    { rel: 'stylesheet', href: '/assets/vendor/fonts/boxicons.css' },
    { rel: 'stylesheet', href: '/assets/vendor/fonts/fontawesome.css' },
    { rel: 'stylesheet', href: '/assets/vendor/fonts/flag-icons.css' },
    { rel: 'stylesheet', href: '/assets/vendor/css/rtl/core.css' },
    { rel: 'stylesheet', href: '/assets/vendor/css/rtl/theme-default.css' },
    { rel: 'stylesheet', href: '/assets/css/demo.css' },
    { rel: 'stylesheet', href: '/assets/vendor/css/rtl/rtl.css' },
    { rel: 'stylesheet', href: '/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css' },
    { rel: 'stylesheet', href: '/assets/vendor/libs/typeahead-js/typeahead.css' },
    { rel: 'stylesheet', href: '/assets/vendor/libs/formvalidation/dist/css/formValidation.min.css' },
    { rel: 'stylesheet', href: '/assets/vendor/css/pages/page-auth.css' }
  ],
  script: [
    { src: '/assets/vendor/js/helpers.js'},
    { src: '/assets/vendor/js/template-customizer.js'},
    { src: '/assets/js/config.js'},
    { src: '/assets/vendor/libs/jquery/jquery.js'},
    { src: '/assets/vendor/libs/popper/popper.js'},
    { src: '/assets/vendor/js/bootstrap.js'},
    { src: '/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js'},
    { src: '/assets/vendor/libs/hammer/hammer.js'},
    { src: '/assets/vendor/libs/i18n/i18n.js'},
    { src: '/assets/vendor/libs/typeahead-js/typeahead.js'},
    { src: '/assets/vendor/js/menu.js'},
    { src: '/assets/vendor/libs/formvalidation/dist/js/FormValidation.min.js' },
    { src: '/assets/vendor/libs/formvalidation/dist/js/plugins/Bootstrap5.min.js' },
    { src: '/assets/vendor/libs/formvalidation/dist/js/plugins/AutoFocus.min.js'},
    { src: '/assets/js/main.js'},
    { src: '/assets/js/pages-auth.js'}
  ]
})

const email = ref('programmer')
const password = ref('Test@123')
const remember = ref(false)
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}



const handleLogin = async () => {
  // await loginAndGetToken(email.value, password.value)
  // console.log('Login successful', authToken.value)
  // await fetchUser()
  // console.log('User fetched', user.value)
  navigateTo('/admin/dashboard')
  // if(user.value.role === "Admin" || "Programmer"){
  //   navigateTo('/admin/dashboard')
  // }else if (user.value.role === "User") {
  //   navigateTo('/')
  // }

}


</script>

<template>
    <div class="authentication-wrapper authentication-cover">
      <!-- <div>Token{{ authToken }}</div> -->
      <div class="authentication-inner row m-0">
        <!-- /Left Text -->
        <div class="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
          <div class="flex-row text-center mx-auto">
            <img
              src="/assets/img/pages/login-light.png"
              alt="Auth Cover Bg color"
              width="520"
              class="img-fluid authentication-cover-img"
              data-app-light-img="pages/login-light.png"
              data-app-dark-img="pages/login-dark.png"
            />
            <div class="mx-auto">
              <h3>به قالب مدیریت قدرتمند فرست خوش آمدید</h3>
              <p>
                کاملا مناسب برای هر سطح از توسعه‌دهندگان که به شما کمک می‌کند
                <br />
                تا پروژه و برنامه بزرگ بعدی خود را شروع کنید.
              </p>
            </div>
          </div>
        </div>
        <!-- /Left Text -->
  
        <!-- Login -->
        <div class="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
          <div class="w-px-400 mx-auto">
            <!-- Logo -->
            <div class="app-brand mb-4">
              <a href="/" class="app-brand-link gap-2 mb-2">
                <span class="app-brand-logo demo">
                  <!-- آیکون SVG -->
                  <!-- ... SVG حذف شده برای اختصار ... -->
                </span>
                <span class="app-brand-text demo h3 mb-0 fw-bold">فرست</span>
              </a>
            </div>
            <!-- /Logo -->
            <h4 class="mb-3 secondary-font">به فرست خوش آمدید!</h4>
            <p class="mb-4">لطفا وارد حساب خود شده و ماجراجویی را شروع کنید</p>
  
            <form id="formAuthentication" class="mb-3" @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">ایمیل یا نام کاربری</label>
                <input
                  type="text"
                  class="form-control text-start"
                  id="email"
                  v-model="email"
                  placeholder="ایمیل یا نام کاربری خود را وارد کنید"
                  dir="ltr"
                />
              </div>
  
              <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">رمز عبور</label>
                  <NuxtLink to="/forgot-password"><small>رمز عبور را فراموش کردید؟</small></NuxtLink>
                </div>
                <div class="input-group input-group-merge">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    class="form-control text-start"
                    v-model="password"
                    placeholder="············"
                    dir="ltr"
                  />
                  <span class="input-group-text cursor-pointer" @click="togglePassword">
                    <i :class="showPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
                  </span>
                </div>
              </div>
  
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="remember-me" v-model="remember" />
                  <label class="form-check-label" for="remember-me"> به خاطر سپاری </label>
                </div>
              </div>
  
              <button type="submit" class="btn btn-primary d-grid w-100">ورود</button>
            </form>
  
            <p class="text-center">
              <span>کاربر جدید هستید؟</span>
              <NuxtLink to="/register"><span>یک حساب بسازید</span></NuxtLink>
            </p>
  
            <div class="divider my-4">
              <div class="divider-text">یا</div>
            </div>
  
            <div class="d-flex justify-content-center">
              <a href="#" class="btn btn-icon btn-label-facebook me-3">
                <i class="tf-icons bx bxl-facebook"></i>
              </a>
              <a href="#" class="btn btn-icon btn-label-google-plus me-3">
                <i class="tf-icons bx bxl-google-plus"></i>
              </a>
              <a href="#" class="btn btn-icon btn-label-twitter">
                <i class="tf-icons bx bxl-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- /Login -->
      </div>
    </div>
  </template>
  