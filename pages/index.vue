<script setup>
const token = useState('token')
const user = useState('user')
</script>
<template>
  <div>
    <header class="header">
      <NuxtLink to="/login" class="btn btn-primary">ورود</NuxtLink>
      <NuxtLink to="/admin/dashboard" class="btn btn-secondary">Admin panel</NuxtLink>
    </header>
<p>{{ token }}</p>
<p>{{ user }}</p>
  </div>
</template>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  font-size: 1.5rem;
  color: #fff;

}
a {
  color: rgb(9, 82, 40);
  text-decoration: none;
}
</style>