<template>
    <div ref="navRef" class="relative">
        <nav class="flex w-full items-center justify-between text-white px-4 sm:px-8 md:px-24 py-3 gap-4">
            <div class="flex items-center gap-3 flex-shrink-0">
                <img src="@/assets/images/pss_logo.png" alt="PSS Logo" class="w-10 h-10 sm:w-12 sm:h-12">
                <div>
                    <h1 class="font-bold text-base sm:text-lg leading-none">{{ t('common.pss.short_name') }}</h1>
                    <p class="text-xs">{{ t('common.pss.name') }}</p>
                </div>
            </div>

            <ul class="hidden lg:flex gap-1 xl:gap-2 flex-1 justify-center">
                <li v-for="item in menuItems" :key="item.to">
                    <router-link :to="item.to"
                        class="px-2 py-2 text-sm xl:text-base rounded-lg hover:bg-primary-light hover:transition duration-300">
                        {{ t(item.label) }}
                    </router-link>
                </li>
            </ul>

            <div class="hidden lg:flex gap-2 items-center flex-shrink-0">
                <div class="relative">
                    <button type="button" @click="toggleLanguageDropdown"
                        class="px-3 py-2 text-sm bg-primary rounded-xl hover:bg-primary-light transition-colors duration-300 flex items-center gap-1">
                        <img :src="currentLanguageIcon" :alt="currentLanguageName + ' Flag'" class="w-5 h-5 rounded-full">
                        <span>{{ currentLanguageName }}</span>
                        <svg class="w-4 h-4 ml-1 transition-transform duration-300" :class="isLanguageDropdownOpen ? 'rotate-180' : ''" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    <Transition name="fade-slide">
                        <div v-if="isLanguageDropdownOpen"
                            class="absolute right-0 mt-2 w-48 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-200 z-50 overflow-hidden">
                            <button v-for="lang in languages" :key="lang.code" type="button" @click="selectLanguage(lang.code)"
                                class="w-full px-4 py-3 text-left hover:bg-slate-100 transition flex items-center justify-between border-b border-slate-200 last:border-b-0">
                                <div class="flex items-center gap-3">
                                    <img :src="lang.icon" :alt="lang.name" class="w-5 h-5 rounded-full">
                                    <span class="text-sm font-medium">{{ lang.name }}</span>
                                </div>
                                <svg v-if="locale === lang.code" class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </Transition>
                </div>

                <router-link to="/get-involved"
                    class="px-3 py-2 text-sm bg-secondary rounded-xl hover:bg-secondary-light transition-colors duration-300">
                    {{ t('common.navbar.donate') }}
                </router-link>
            </div>

            <button type="button" @click.stop="toggleMenu"
                class="lg:hidden flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl hover:bg-primary-light transition duration-300 z-[110]">
                <div class="relative w-6 h-6">
                    <span class="absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out" :class="isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'"></span>
                    <span class="absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out translate-y-2.5" :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
                    <span class="absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out" :class="isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'"></span>
                </div>
            </button>
        </nav>

        <Transition name="mobile-menu">
            <div v-if="isMenuOpen"
                class="lg:hidden absolute top-full left-0 w-full bg-primary-dark text-white px-4 py-6 space-y-4 rounded-b-3xl shadow-2xl border-t border-primary-light z-[100]">
                <div class="flex flex-col gap-1">
                    <router-link v-for="(item, index) in menuItems" 
                        :key="item.to" 
                        :to="item.to" 
                        :class="menuLinkClass"
                        @click="closeMenu">
                        {{ t(item.label) }}
                    </router-link>
                </div>

                <div class="flex flex-col gap-3 pt-4 border-t border-primary-light/30">
                    <button type="button" @click="toggleLanguageDropdownMobile"
                        class="w-full px-4 py-3 bg-primary/20 border border-primary-light/20 rounded-xl flex items-center justify-between text-sm">
                        <div class="flex items-center gap-2">
                            <img :src="currentLanguageIcon" :alt="currentLanguageName + ' Flag'" class="w-5 h-5 rounded-full">
                            <span>{{ currentLanguageName }}</span>
                        </div>
                        <svg class="w-4 h-4 transition-transform duration-300" :class="isLanguageDropdownOpenMobile ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    <Transition name="fade-slide">
                        <div v-if="isLanguageDropdownOpenMobile" class="bg-slate-800 rounded-xl overflow-hidden border border-primary-light/10">
                            <button v-for="lang in languages" :key="lang.code" type="button"
                                @click="selectLanguage(lang.code, true)"
                                class="w-full px-4 py-3 text-left hover:bg-primary-light/20 transition flex items-center justify-between border-b border-white/5 last:border-b-0 text-sm">
                                <div class="flex items-center gap-3">
                                    <img :src="lang.icon" :alt="lang.name" class="w-5 h-5 rounded-full">
                                    <span>{{ lang.name }}</span>
                                </div>
                                <svg v-if="locale === lang.code" class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </Transition>

                    <router-link to="/get-involved" @click="closeMenu"
                        class="w-full px-4 py-3 bg-secondary text-center font-bold rounded-xl hover:brightness-110 transition-all duration-300 text-sm shadow-lg">
                        {{ t('common.navbar.donate') }}
                    </router-link>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import engFlag from '@/assets/images/icons/eng_flag.png'
import khFlag from '@/assets/images/icons/kh_flag.png'

const { t, locale } = useI18n()
const navRef = ref(null)
const isMenuOpen = ref(false)
const isLanguageDropdownOpen = ref(false)
const isLanguageDropdownOpenMobile = ref(false)

const menuItems = [
    { to: '/', label: 'common.navbar.home' },
    { to: '/about', label: 'common.navbar.about' },
    { to: '/team', label: 'common.navbar.team' },
    { to: '/programs', label: 'common.navbar.programs' },
    { to: '/impact', label: 'common.navbar.impact' },
    { to: '/get-involved', label: 'common.navbar.get_involved' },
    { to: '/contact', label: 'common.navbar.contact' },
]

const menuLinkClass = 'block px-4 py-3 rounded-xl text-sm font-medium hover:bg-primary-light transition-all duration-200 active:scale-95'

const languages = [
    { code: 'en', name: 'English', icon: engFlag },
    { code: 'kh', name: 'ភាសាខ្មែរ', icon: khFlag },
]

const currentLanguage = computed(() => languages.find(l => l.code === locale.value) ?? languages[0])
const currentLanguageName = computed(() => currentLanguage.value.name)
const currentLanguageIcon = computed(() => currentLanguage.value.icon)

const closeMenu = () => { isMenuOpen.value = false }
const closeLanguageDropdowns = () => {
    isLanguageDropdownOpen.value = false
    isLanguageDropdownOpenMobile.value = false
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    if (isMenuOpen.value) closeLanguageDropdowns()
}

const toggleLanguageDropdown = () => {
    isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
    isLanguageDropdownOpenMobile.value = false
}

const toggleLanguageDropdownMobile = () => {
    isLanguageDropdownOpenMobile.value = !isLanguageDropdownOpenMobile.value
    isLanguageDropdownOpen.value = false
}

const selectLanguage = (lang, mobile = false) => {
    locale.value = lang
    localStorage.setItem('lang', lang)
    mobile ? (isLanguageDropdownOpenMobile.value = false) : (isLanguageDropdownOpen.value = false)
}

const handleOutsideClick = (event) => {
    if (navRef.value && !navRef.value.contains(event.target)) {
        closeLanguageDropdowns()
        closeMenu()
    }
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>

<style scoped>
/* Mobile Menu Animation: Slide down and Fade */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

/* Language Dropdown Animation: Scale and Fade */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.2s ease-out;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.router-link-exact-active {
    background-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
}
</style>