<template>
    <teleport to="#teleports">
        <div v-if="show" class="modal-overlay" @click="close">
            <div class="modal-content" @click.stop>
                <slot></slot>
                <button @click="close">Đóng</button>
            </div>
        </div>
    </teleport>
</template>

<script setup>
const props = defineProps({
    show: Boolean
})
const emit = defineEmits(['close'])

function close() {
    emit('close')
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
}
</style>
