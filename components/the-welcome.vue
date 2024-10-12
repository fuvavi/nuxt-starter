<template>
    <div class="dark:bg-gray-900">
        <BackgroundDecorator />
        <div
            class="relative from-gray-950 to-gray-900 py-24 sm:py-32 md:py-40 md:pb-24 dark:bg-gradient-to-b"
        >
            <div class="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
                <div class="relative z-[1] text-center">
                    <div class="mb-10">
                        <a href="https://nuxt.com/blog/v3-13" target="_blank" class=""
                            ><span
                                class="bg-primary-50 dark:bg-primary-400 text-primary-500 dark:text-primary-400 ring-primary-500 dark:ring-primary-400 dark:hover:bg-primary-400/15 dark:hover:ring-primary-700 relative inline-flex items-center rounded-full px-2.5 py-1.5 text-sm font-semibold ring-1 ring-inset ring-opacity-25 dark:bg-opacity-10 dark:ring-opacity-25"
                                >Nuxt v3.13 is out
                                <Icon
                                    name="material-symbols:arrow-right-alt-rounded "
                                    class="ml-1 text-base"
                                />
                            </span>
                        </a>
                    </div>
                    <h1
                        class="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl dark:text-white"
                    >
                        The Intuitive<br /><span class="text-primary block lg:inline-block"
                            >Vue Framework</span
                        >
                    </h1>
                    <div class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
                        Nuxt is an
                        <a
                            href="https://go.nuxt.com/github"
                            rel="noopener noreferrer"
                            target="_blank"
                            class="font-medium underline-offset-2 hover:underline"
                        >
                            open source framework
                        </a>
                        that makes web development intuitive and powerful.<br />Create performant
                        and production-grade full-stack web apps and websites with confidence.
                    </div>
                    <div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center gap-2">
                                <a
                                    class="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 aria-disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 dark:aria-disabled:bg-primary-400 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex flex-shrink-0 items-center gap-x-2.5 rounded-md px-3.5 py-2.5 text-sm font-medium text-white shadow-sm focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:text-gray-900"
                                    href="https://nuxt.com/docs/getting-started/installation"
                                    target="_blank"
                                    ><!---->
                                    Get Started
                                    <Icon
                                        name="material-symbols:arrow-right-alt-rounded"
                                        class="ml-1 text-base"
                                    />
                                </a>
                                <button
                                    type="button"
                                    class="focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex flex-shrink-0 items-center gap-x-2.5 rounded-md px-3.5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                                >
                                    <!---->
                                    Nuxt in 100 Seconds
                                    <Icon
                                        name="material-symbols:motion-play-outline-rounded"
                                        class="ml-1 text-base"
                                    />
                                </button>
                            </div>
                            <label class="w-full"
                                ><div class="relative">
                                    <input
                                        type="text"
                                        class="form-input focus:ring-primary-500 dark:focus:ring-primary-400 relative block w-full rounded-md border-0 bg-white px-3.5 py-2.5 pe-11 ps-11 text-sm text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:ring-gray-700"
                                        value="npx nuxi@latest init <my-app>"
                                    />
                                    <div class="absolute inset-0 cursor-copy" />
                                    <span
                                        class="pointer-events-none absolute inset-y-0 start-0 flex items-center px-3.5"
                                        ><span
                                            class="iconify i-ph:terminal h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500"
                                            aria-hidden="true"
                                            style="" /></span
                                    ><span class="absolute inset-y-0 end-0 flex items-center px-3.5"
                                        ><button
                                            type="button"
                                            class="focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex flex-shrink-0 items-center gap-x-1.5 rounded-md text-sm font-medium text-gray-500 underline-offset-4 hover:text-gray-700 hover:underline focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:text-gray-400 dark:hover:text-gray-200"
                                            aria-label="copy button"
                                        >
                                            <Icon
                                                name="material-symbols:content-copy-outline-rounded"
                                                class="ml-1 text-base"
                                            /><!----><!---->
                                        </button></span
                                    >
                                </div></label
                            >
                        </div>
                        <!---->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
