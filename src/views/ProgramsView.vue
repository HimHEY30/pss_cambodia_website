<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    <ProgramsHero />
    <ProgramsMajors :webProgram="WEB_PROGRAM" :snacProgram="SNAC_PROGRAM" />
    <ProgramsSupport />
    <ProgramsSelection />
    <ProgramsLifeSupport />
    <ProgramsJoinUs />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue'
import ProgramsHero from '@/components/programs/ProgramsHero.vue'
import ProgramsMajors from '@/components/programs/ProgramsMajors.vue'
import ProgramsSupport from '@/components/programs/ProgramsSupport.vue'
import ProgramsSelection from '@/components/programs/ProgramsSelection.vue'
import ProgramsLifeSupport from '@/components/programs/ProgramsLifeSupport.vue'
import ProgramsJoinUs from '@/components/programs/ProgramsJoinUs.vue'
import WEB_PROGRAM from '@/assets/doc/PSS_2027_Curriculum_WEP.pdf'
import SNAC_PROGRAM from '@/assets/doc/PSS_2027_Curriculum_SNAC.pdf'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>
