<template>
    <header class="text-white">
        <div class="bg-blue-600 fixed top-0 left-0 w-screen">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex-shrink-0">
                        <NuxtLink to="/">
                            <Icon name="icon:nuxt-logo" />
                        </NuxtLink>
                    </div>
                    <div class="hidden md:block">
                        <nav class="flex space-x-4">
                            <NuxtLink
                                to=""
                                class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                                >Home</NuxtLink
                            >
                            <NuxtLink
                                to="about"
                                class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                                >About</NuxtLink
                            >
                            <NuxtLink
                                to="services"
                                class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                                >Services</NuxtLink
                            >
                            <NuxtLink
                                to="contact"
                                class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                                >Contact</NuxtLink
                            >
                        </nav>
                    </div>
                    <div class="md:hidden">
                        <button @click="toggleMenu" class="text-white focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <Transition name="slide-fade">
            <div
                v-if="isMenuOpen"
                class="md:hidden bg-blue-500 fixed left-0 top-16 h-screen w-screen"
            >
                <nav class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NuxtLink
                        to="/"
                        class="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        >Home</NuxtLink
                    >
                    <NuxtLink
                        to="about"
                        class="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        >About</NuxtLink
                    >
                    <NuxtLink
                        to="services"
                        class="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        >Services</NuxtLink
                    >
                    <NuxtLink
                        to="contact"
                        class="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        >Contact</NuxtLink
                    >
                </nav>
            </div>
        </Transition>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>
