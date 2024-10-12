<template>
    <header
        class="sticky top-0 z-50 -mb-px border-b border-gray-200 backdrop-blur lg:mb-0 lg:border-0 dark:border-gray-800"
    >
        <div
            class="mx-auto flex h-[--header-height] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
        >
            <div class="flex items-center gap-1.5 lg:flex-1">
                <TheLogo />
            </div>
            <div class="hidden items-center gap-x-8 lg:flex">
                <nav>
                    <ul class="flex space-x-8">
                        <li v-for="menu in HEADER_MENU" :key="menu.id">
                            <NuxtLink :to="menu.url" class="hover:text-primary font-medium">
                                {{ $t(menu.title) }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="flex items-center justify-end gap-1.5 lg:flex-1">
                <NuxtLink
                    v-if="!isLoggedIn"
                    to="/login"
                    class="inline-flex items-center rounded-full text-2xl !text-black hover:bg-gray-50 focus:outline-none"
                >
                    <Icon name="material-symbols:account-circle-outline" />
                </NuxtLink>
                <NuxtLink
                    v-else
                    to="/account"
                    class="inline-flex items-center rounded-full bg-gray-50"
                >
                    <UAvatar
                        src="https://avatars.githubusercontent.com/u/33111017?v=4"
                        alt="Avatar"
                        class="h-8 w-8"
                    />
                </NuxtLink>
                <button
                    class="inline-flex items-center rounded-full text-2xl focus:outline-none focus-visible:outline-0 lg:hidden"
                    @click="toggleMenu"
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
                class="fixed left-0 top-[--header-height] z-50 h-screen w-screen bg-white lg:hidden"
            >
                <nav class="p-4">
                    <ul class="space-y-4 text-center">
                        <li v-for="menu in HEADER_MENU" :key="menu.id">
                            <NuxtLink :to="menu.url" class="font-medium" @click="toggleMenu">
                                {{ $t(menu.title) }}
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
const isLoggedIn = ref(false)
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
.router-link-active {
    @apply text-primary;
}
</style>
