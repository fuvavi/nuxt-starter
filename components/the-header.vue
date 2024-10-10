<template>
    <header
        class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0"
    >
        <div
            class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]"
        >
            <div class="lg:flex-1 flex items-center gap-1.5">
                <NuxtLink to="/">
                    <Icon name="vicon:nuxt-logo" />
                </NuxtLink>
            </div>
            <div class="items-center gap-x-8 hidden lg:flex">
                <nav class="flex space-x-8">
                    <NuxtLink to="/" class="text-sm hover:text-primary font-medium">Home</NuxtLink>
                    <NuxtLink to="about" class="text-sm hover:text-primary font-medium"
                        >About</NuxtLink
                    >
                    <NuxtLink to="services" class="text-sm hover:text-primary font-medium"
                        >Services</NuxtLink
                    >
                    <NuxtLink to="contact" class="text-sm hover:text-primary font-medium"
                        >Contact</NuxtLink
                    >
                </nav>
            </div>
            <div class="flex items-center justify-end lg:flex-1 gap-1.5">
                <button
                    class="focus:outline-none rounded-full text-2xl focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium gap-x-1 p-1 text-gray-700 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                >
                    <Icon name="solar:user-circle-broken" />
                </button>
                <div class="lg:hidden">
                    <button @click="toggleMenu" class="text-primary focus:outline-none">
                        <Icon name="vicon:menu" />
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <Transition name="slide-fade">
            <div
                v-if="isMenuOpen"
                class="lg:hidden bg-primary fixed left-0 top-16 h-screen w-screen"
            >
                <nav class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NuxtLink
                        to="/"
                        class="text-white block px-4 py-2 rounded-md text-base font-medium"
                        >Home</NuxtLink
                    >
                    <NuxtLink
                        to="about"
                        class="text-white block px-4 py-2 rounded-md text-base font-medium"
                        >About</NuxtLink
                    >
                    <NuxtLink
                        to="services"
                        class="text-white block px-4 py-2 rounded-md text-base font-medium"
                        >Services</NuxtLink
                    >
                    <NuxtLink
                        to="contact"
                        class="text-white block px-4 py-2 rounded-md text-base font-medium"
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
