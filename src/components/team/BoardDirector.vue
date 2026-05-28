<template>
    <section class="relative px-6 py-16 lg:pt-24 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight mb-4 text-slate-900">
                {{ t("ourTeam.hero.title_line1") }} <br />
            </h1>
            <p class="text-lg text-slate-600 leading-relaxed">
                {{ t("ourTeam.hero.subtitle") }}
            </p>
        </div>
    </section>
    <section class="py-12 bg-slate-50 px-6 border-y border-slate-100">
        <div class="max-w-7xl mx-auto">
            <div class="">
                <h2 class="text-4xl font-extrabold text-slate-900 mb-2">{{ t("ourTeam.board.title") }}</h2>
                <p class="text-slate-500 max-w-2xl italic">{{ t("ourTeam.board.desc") }}</p>
            </div>

            <section class="py-12 px-6 max-w-7xl mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16">
                    <div v-for="board in boardMembers" :key="board.id" 
                        :style="{ transitionDelay: `${i * 100}ms` }">
                        <div
                            class="relative aspect-[4/5] rounded-[1.4rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                            </div>

                            <img :src="board.image" alt="Director" class="w-full h-full object-cover" />
                        </div>

                        <div class="px-2">
                            <h3
                                class="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">
                                {{
                                    t(board.nameKey) }}</h3>
                            <p class="text-sky-500 font-bold uppercase tracking-widest text-[12px]">{{
                                t(board.roleKey) }}</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import SOURSDEY from "@/assets/images/staffs/SOUSDEY.png";
import SOPHORN from "@/assets/images/staffs/SOPHORN.png";
import OMOUY from "@/assets/images/staffs/OMOUY.png";
import CHANTHA from "@/assets/images/staffs/CHANTHA.png";
import RAKSMEY from "@/assets/images/staffs/RAKSMEY.png";

const { t } = useI18n();

// Centralized dynamic array mapping images and translation keys together 
const boardMembers = [
    { id: 1, image: SOPHORN, nameKey: "ourTeam.board.member1_name", roleKey: "ourTeam.board.member1_role" },
    { id: 2, image: SOURSDEY, nameKey: "ourTeam.board.member2_name", roleKey: "ourTeam.board.member2_role" },
    { id: 3, image: RAKSMEY, nameKey: "ourTeam.board.member3_name", roleKey: "ourTeam.board.member3_role" },
    { id: 4, image: OMOUY, nameKey: "ourTeam.board.member4_name", roleKey: "ourTeam.board.member4_role" },
    { id: 5, image: CHANTHA, nameKey: "ourTeam.board.member5_name", roleKey: "ourTeam.board.member5_role" }
];
</script>

<style lang="scss" scoped>
/* Class helper to keep things tidy by hiding default desktop scrollbars */
.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */

    &::-webkit-scrollbar {
        display: none;
        /* Chrome, Safari and Opera */
    }
}
</style>