<template>
    <section class="py-12 px-6 max-w-7xl mx-auto">
              <div class="mb-12">
                <h2 class="text-4xl font-extrabold text-slate-900 mb-2">{{ t("ourTeam.executive_team.title") }}</h2>
                <p class="text-slate-500 max-w-2xl italic">{{ t("ourTeam.executive_team.desc") }}</p>
            </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

                <div
                    class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    </div>

                    <img :src="BUNNA" alt="Director" class="w-full h-full object-cover" />
                </div>

                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
                        t("ourTeam.executive_team.director_name") }}</h3>
                    <p class="text-sky-500 font-bold uppercase tracking-widest text-[12px]">{{
                        t("ourTeam.executive_team.director_role") }}</p>
                </div>
            </div>
            <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

                <div
                    class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    </div>

                    <img :src="SROS" alt="Director" class="w-full h-full object-cover" />
                </div>

                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
                        t("ourTeam.executive_team.admin_director_name") }}</h3>
                    <p class="text-sky-500 font-bold uppercase tracking-widest text-[12px]">{{
                        t("ourTeam.executive_team.admin_director_role") }}</p>
                </div>
            </div>
            <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

                <div
                    class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    </div>

                    <img :src="SREYNICH" alt="Director" class="w-full h-full object-cover" />
                </div>

                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
                        t("ourTeam.executive_team.ero_director_name") }}</h3>
                    <p class="text-sky-500 font-bold uppercase tracking-widest text-[12px]">{{
                        t("ourTeam.executive_team.ero_director_role") }}</p>
                </div>
            </div>
            <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

                <div
                    class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    </div>

                    <img :src="THAINA" alt="Director" class="w-full h-full object-cover" />
                </div>

                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
                        t("ourTeam.executive_team.selection_director_name") }}</h3>
                    <p class="text-sky-500 font-bold uppercase tracking-widest text-[12px]">{{
                        t("ourTeam.executive_team.selection_director_role") }}</p>
                </div>
            </div>
            <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

                <div
                    class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    </div>

                    <img :src="LIHUY" alt="Director" class="w-full h-full object-cover" />
                </div>

                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
                        t("ourTeam.executive_team.training_director_name") }}</h3>
                    <p class="text-sky-500 font-bold uppercase tracking-widest text-[12px]">{{
                        t("ourTeam.executive_team.training_director_role") }}</p>
                </div>
            </div>
            <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

                <div
                    class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    </div>

                    <img :src="SIM" alt="Director" class="w-full h-full object-cover" />
                </div>

                <div class="px-2">
                    <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
                        t("ourTeam.executive_team.edu_director_name") }}</h3>
                    <p class="text-sky-500 font-bold uppercase tracking-widest text-[12px]">{{
                        t("ourTeam.executive_team.edu_director_role") }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import BUNNA from "@/assets/images/staffs/BUNNA.png";
import SROS from "@/assets/images/staffs/SROS.png";
import SIM from "@/assets/images/staffs/SIM.png";
import SREYNICH from "@/assets/images/staffs/SREYNICH.png";
import LIHUY from "@/assets/images/staffs/LIHUY.png";
import THAINA from "@/assets/images/staffs/THAINA.png";

</script>

<style lang="scss" scoped></style>