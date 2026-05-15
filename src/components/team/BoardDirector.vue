<template>
    <section class="reveal py-24 bg-slate-50 px-6 mt-20 border-y border-slate-100">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-20">
                <h2 class="text-4xl font-extrabold text-slate-900 mb-4">{{ t("ourTeam.board.title") }}</h2>
                <p class="text-slate-500 max-w-2xl mx-auto italic">{{ t("ourTeam.board.desc") }}</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
                    <div class="flex items-center gap-6">
                        <div
                            class="w-24 h-24 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                            <img :src="SOPHORN" class="rounded-xl w-20 h-20" />
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 text-xl leading-tight">{{
                                t("ourTeam.board.member1_name") }}</h4>
                            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px] mt-1">{{
                                t("ourTeam.board.member1_role") }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
                    <div class="flex items-center gap-6">
                        <div
                            class="w-24 h-24 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                            <img :src="SOURSDEY" class="rounded-xl w-20 h-20" />
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 text-xl leading-tight">{{
                                t("ourTeam.board.member2_name") }}</h4>
                            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px] mt-1">{{
                                t("ourTeam.board.member2_role") }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
                    <div class="flex items-center gap-6">
                        <div
                            class="w-24 h-24 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                            <img :src="RAKSMEY" class="rounded-xl w-20 h-20" />
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 text-xl leading-tight">{{
                                t("ourTeam.board.member3_name") }}</h4>
                            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px] mt-1">{{
                                t("ourTeam.board.member3_role") }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
                    <div class="flex items-center gap-6">
                        <div
                            class="w-24 h-24 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                            <img :src="OMOUY" class="rounded-xl w-20 h-20" />
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 text-xl leading-tight">{{
                                t("ourTeam.board.member4_name") }}</h4>
                            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px] mt-1">{{
                                t("ourTeam.board.member4_role") }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
                    <div class="flex items-center gap-6">
                        <div
                            class="w-24 h-24 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                            <img :src="CHANTHA" class="rounded-xl w-20 h-20" />
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 text-xl leading-tight">{{
                                t("ourTeam.board.member5_name") }}</h4>
                            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px] mt-1">{{
                                t("ourTeam.board.member5_role") }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import SOURSDEY from "@/assets/images/staffs/SOURSDEY.jpg";
import SOPHORN from "@/assets/images/staffs/SOPHORN.jpg";
import OMOUY from "@/assets/images/staffs/OMOUY.jpg";
import CHANTHA from "@/assets/images/staffs/CHANTHA.jpg";
import RAKSMEY from "@/assets/images/staffs/RAKSMEY.jpg";
</script>

<style lang="scss" scoped></style>