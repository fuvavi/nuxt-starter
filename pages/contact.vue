<template>
    <div>
        <h1>Contact</h1>
        <button @click="showModal = true">Hiển thị Modal</button>
        <Modal :show="showModal" @close="showModal = false">
            <h2>Đây là nội dung của modal</h2>
            <p>Nội dung chi tiết...</p>
        </Modal>
    </div>
</template>

<script setup>
const showModal = ref(false)
</script>

<style lang="scss" scoped></style>
