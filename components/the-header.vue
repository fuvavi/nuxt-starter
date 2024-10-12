<template>
    <header
        class="backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0"
    >
        <div
            class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]"
        >
            <div class="lg:flex-1 flex items-center gap-1.5">
                <TheLogo />
            </div>
            <div class="items-center gap-x-8 hidden lg:flex">
                <nav>
                    <ul class="flex space-x-8">
                        <li v-for="menu in HEADER_MENU" :key="menu.id">
                            <NuxtLink :to="menu.url" class="text-sm hover:text-primary font-medium">
                                {{ $t(menu.title) }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="flex items-center justify-end lg:flex-1 gap-1.5">
                <button
                    class="focus:outline-none rounded-full text-2xl focus-visible:outline-0 inline-flex items-center"
                >
                    <Icon name="material-symbols:account-circle-outline" />
                </button>
                <button
                    @click="toggleMenu"
                    class="lg:hidden focus:outline-none rounded-full text-2xl focus-visible:outline-0 inline-flex items-center"
                >
                    <Icon
                        :name="`material-symbols:${isMenuOpen ? 'close-rounded' : 'menu-rounded'}`"
                    />
                </button>
            </div>
        </div>
        <!-- Mobile menu -->
        <Transition name="slide-fade">
            <div
                v-if="isMenuOpen"
                class="lg:hidden bg-white fixed left-0 top-[--header-height] z-50 h-screen w-screen"
            >
                <nav class="p-4">
                    <ul class="space-y-4 text-center">
                        <li v-for="menu in HEADER_MENU" :key="menu.id">
                            <NuxtLink :to="menu.url" class="font-medium">
                                {{ menu.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import { HEADER_MENU } from '~/resources/menu'
const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>

