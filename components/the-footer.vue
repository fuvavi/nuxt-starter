<template>
    <footer class="pb-6">
        <div class="text-center">Copyright by Fuvavi</div>
        <div class="flex justify-center">
            <ul class="flex gap-2">
                <li>
                    <a
                        href="#"
                        @click="handleRedirect('/about')"
                        class="text-black-100 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        >About</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        @click="handleRedirect('/services')"
                        class="text-black-100 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        >Services</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        @click="handleRedirect('/contact')"
                        class="text-black-100 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        >Contact</a
                    >
                </li>
            </ul>
        </div>
        <UButton
            @click="backToTop"
            icon="mi:chevron-up"
            size="sm"
            color="primary"
            :ui="{ rounded: 'rounded-full' }"
            variant="solid"
            class="fixed bottom-4 right-4"
        />
    </footer>
</template>

<script setup lang="ts">
const router = useRouter()
const backToTop = () => {
    // window.scrollTo({ top: -100, behavior: 'smooth' })
    // document.body.scrollIntoView({ behavior: 'auto', block: 'start' })
    // setTimeout(function () {
    //     window.scrollTo(0, 0)
    // }, 0)
    document.addEventListener(
        'touchstart',
        function () {
            window.scrollTo(0, 0)
        },
        { passive: true }
    )
}

const handleRedirect = (path: string) => {
    document.addEventListener(
        'touchstart',
        function () {
            window.scrollTo(0, 0)
        },
        { passive: true }
    )
    router.push(path)
}
// onMounted(() => {
//     document.addEventListener(
//         'touchstart',
//         function () {
//             window.scrollTo(0, 0)
//         },
//         { passive: true }
//     )
// })
</script>

<style scoped></style>
