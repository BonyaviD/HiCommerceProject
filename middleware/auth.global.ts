// middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { authToken, user, fetchUser } = useAuth();

//   if (!authToken.value) {
//     if (to.path.startsWith("/admin/dashboard")) {
//       return navigateTo("/login");
//     }
//     return;
//   }

  if (!user.value) {
    try {
      await fetchUser();
      console.log("User fetched:", user.value);
      console.log("Auth token:", authToken.value);
      // if (!user.value) {
      //   return navigateTo("/login")
      // }

      // if (to.path.startsWith("/admin/dashboard") && user.value.role !== 'admin') {
      //   return navigateTo("/unauthorized")
      // }
    } catch (e) {
      console.error(e);
      // return navigateTo("/login")
    }
  }

//   if (to.path.startsWith("/admin/dashboard") && user.value?.role !== "admin") {
//     return navigateTo("/login");
//   }
});
