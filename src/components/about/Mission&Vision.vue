<template>
    <section class="reveal py-20 bg-slate-50 border-y border-slate-100 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-16 lg:gap-32">
                <div class="relative group">
                    <div
                        class="absolute -top-10 -left-6 text-9xl font-black text-sky-100/50 select-none -z-0 group-hover:text-sky-200 transition-colors">
                        01</div>
                    <div class="relative z-10">
                        <h2 class="text-3xl font-extrabold text-[#00AEEF] mb-6 flex items-center gap-3">
                            <span class="w-8 h-[2px] bg-[#00AEEF]"></span>
                            Our Vision
                        </h2>
                        <p class="text-2xl lg:text-3xl font-bold text-slate-800 leading-snug">
                            PSS envisions a Cambodia where all youth, <span
                                class="text-[#00AEEF] underline decoration-sky-200 underline-offset-4">regardless of
                                background</span>, have access to quality education.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div
                        class="absolute -top-10 -left-6 text-9xl font-black text-sky-100/50 select-none -z-0 group-hover:text-sky-200 transition-colors">
                        02</div>
                    <div class="relative z-10">
                        <h2 class="text-3xl font-extrabold text-[#00AEEF] mb-6 flex items-center gap-3">
                            <span class="w-8 h-[2px] bg-[#00AEEF]"></span>
                            Our Mission
                        </h2>
                        <p class="text-lg text-slate-600 leading-relaxed mb-6">
                            To provide high-quality IT training and employment support to underprivileged Cambodian
                            youth, enabling sustainable livelihoods.
                        </p>
                        <div class="grid gap-3">
                            <div v-for="(goal, i) in goals" :key="goal"
                                class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-sky-300 hover:translate-x-2 transition-all duration-300"
                                :style="{ transitionDelay: `${i * 100}ms` }">
                                <div
                                    class="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="text-sm font-semibold text-slate-700">{{ goal }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>

</script>

<style lang="scss" scoped></style>