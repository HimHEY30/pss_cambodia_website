<template>
    <section class="py-12 px-6 max-w-7xl mx-auto">
              <div class="mb-12">
                <h2 class="text-4xl font-extrabold text-slate-900 mb-2">{{ t("ourTeam.advisor.title") }}</h2>
            </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

                <div
                    class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    </div>

                    <img :src="PHUONG" alt="Director" class="w-full h-full object-cover" />
                </div>

                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
                        t("ourTeam.advisor.member1_name") }}</h3>
                </div>
            </div>
            <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

                <div
                    class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    </div>

                    <img :src="SARAH" alt="Director" class="w-full h-full object-cover" />
                </div>

                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
                        t("ourTeam.advisor.member2_name") }}</h3>
                </div>
            </div>
            <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

                <div
                    class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    </div>

                    <img :src="KARYN" alt="Director" class="w-full h-full object-cover" />
                </div>

                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
                        t("ourTeam.advisor.member3_name") }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import PHUONG from "@/assets/images/staffs/PHUONG.jpg"
import SARAH from "@/assets/images/staffs/SARAH.jpg"
import KARYN from "@/assets/images/staffs/KARYN.jpg"



</script>

<style lang="scss" scoped></style>