<template>
    <nav class="flex w-full items-center justify-between text-white px-4 sm:px-8 md:px-24 py-3 gap-4">
        <!-- Logo -->
        <div class="flex items-center gap-3 flex-shrink-0">
            <img src="@/assets/images/pss_logo.png" alt="PSS Logo" class="w-10 h-10 sm:w-12 sm:h-12">
            <div>
                <h1 class="font-bold text-base sm:text-lg leading-none">{{t('common.pss.short_name')}}</h1>
                <p class="text-xs">{{t('common.pss.name')}}</p>
            </div>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden lg:flex gap-1 xl:gap-2 flex-1 justify-center">
            <li><router-link to="/"
                    class="px-2 py-2 text-sm xl:text-base rounded-lg hover:bg-primary-light hover:transition duration-300">{{
                        t('common.navbar.home') }}</router-link>
            </li>
            <li><router-link to="/about"
                    class="px-2 py-2 text-sm xl:text-base rounded-lg hover:bg-primary-light hover:transition duration-300">{{
                        t('common.navbar.about') }}</router-link>
            </li>
            <li><router-link to="/team"
                    class="px-2 py-2 text-sm xl:text-base rounded-lg hover:bg-primary-light hover:transition duration-300">{{
                        t('common.navbar.team') }}</router-link>
            </li>
            <li><router-link to="/programs"
                    class="px-2 py-2 text-sm xl:text-base rounded-lg hover:bg-primary-light hover:transition duration-300">{{
                        t('common.navbar.programs') }}</router-link>
            </li>
            <li><router-link to="/impact"
                    class="px-2 py-2 text-sm xl:text-base rounded-lg hover:bg-primary-light hover:transition duration-300">{{
                        t('common.navbar.impact') }}</router-link>
            </li>
            <li><router-link to="/get-involved"
                    class="px-2 py-2 text-sm xl:text-base rounded-lg hover:bg-primary-light hover:transition duration-300">{{
                        t('common.navbar.get_involved') }}</router-link>
            </li>
            <li><router-link to="/contact"
                    class="px-2 py-2 text-sm xl:text-base rounded-lg hover:bg-primary-light hover:transition duration-300">{{
                        t('common.navbar.contact') }}</router-link>
            </li>
        </ul>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex gap-2 items-center flex-shrink-0">
            <!-- Language Dropdown -->
            <div class="relative">
                <button @click="toggleLanguageDropdown"
                    class="px-3 py-2 text-sm bg-primary rounded-xl hover:bg-primary-light transition-colors duration-300 flex items-center gap-1">
                    <img v-if="locale === 'en'" :src="engFlag" alt="English Flag" class="w-5 h-5 rounded-full">
                    <img v-else-if="locale === 'kh'" :src="khFlag" alt="Khmer Flag" class="w-5 h-5 rounded-full">
                    <img v-else :src="frFlag" alt="French Flag" class="w-5 h-5 rounded-full">
                    <span>{{ currentLanguageName }}</span>
                    <svg class="w-4 h-4 ml-1" :class="isLanguageDropdownOpen ? 'rotate-180' : ''" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </button>

                <!-- Language Dropdown Menu -->
                <div v-if="isLanguageDropdownOpen"
                    class="absolute right-0 mt-2 w-48 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-200 z-50">
                    <button v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang.code)"
                        class="w-full px-4 py-3 text-left hover:bg-slate-100 transition flex items-center justify-between border-b border-slate-200 last:border-b-0">
                        <div class="flex items-center gap-3">
                            <img :src="lang.icon" :alt="lang.name" class="w-5 h-5 rounded-full">
                            <span class="text-sm font-medium">{{ lang.name }}</span>
                        </div>
                        <svg v-if="locale === lang.code" class="w-5 h-5 text-green-500" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <button
                class="px-3 py-2 text-sm bg-secondary rounded-xl hover:bg-secondary-light transition-colors duration-300">{{
                    t('common.navbar.donate') }}</button>
        </div>

        <!-- Mobile/Tablet Menu Button -->
        <button @click="toggleMenu"
            class="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary-light transition duration-300 flex-shrink-0">
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    </nav>

    <!-- Mobile/Tablet Menu Dropdown -->
    <div v-if="isMenuOpen"
        class="lg:hidden bg-primary-dark text-white px-4 py-4 space-y-3 animate-in fade-in duration-200">
        <router-link to="/" class="block px-4 py-2 rounded-lg hover:bg-primary-light hover:transition duration-300"
            @click="closeMenu">{{ t('common.navbar.home') }}</router-link>
        <router-link to="/about" class="block px-4 py-2 rounded-lg hover:bg-primary-light hover:transition duration-300"
            @click="closeMenu">{{ t('common.navbar.about') }}</router-link>
        <router-link to="/team" class="block px-4 py-2 rounded-lg hover:bg-primary-light hover:transition duration-300"
            @click="closeMenu">{{ t('common.navbar.team') }}</router-link>
        <router-link to="/programs"
            class="block px-4 py-2 rounded-lg hover:bg-primary-light hover:transition duration-300"
            @click="closeMenu">{{ t('common.navbar.programs') }}</router-link>
        <router-link to="/impact"
            class="block px-4 py-2 rounded-lg hover:bg-primary-light hover:transition duration-300"
            @click="closeMenu">{{ t('common.navbar.impact') }}</router-link>
        <router-link to="/get-involved"
            class="block px-4 py-2 rounded-lg hover:bg-primary-light hover:transition duration-300"
            @click="closeMenu">{{ t('common.navbar.get_involved') }}</router-link>
        <router-link to="/contact"
            class="block px-4 py-2 rounded-lg hover:bg-primary-light hover:transition duration-300"
            @click="closeMenu">{{ t('common.navbar.contact') }}</router-link>

        <div class="flex flex-col gap-3 pt-3 border-t border-primary-light">
            <!-- Mobile Language Dropdown -->
            <div class="relative">
                <button @click="toggleLanguageDropdownMobile"
                    class="w-full px-4 py-2 bg-primary rounded-xl hover:bg-primary-light transition-colors duration-300 flex items-center justify-between gap-2 text-sm">
                    <div class="flex items-center gap-2">
                        <img v-if="locale === 'en'" :src="engFlag" alt="English Flag" class="w-5 h-5 rounded-full">
                        <img v-else-if="locale === 'kh'" :src="khFlag" alt="Khmer Flag" class="w-5 h-5 rounded-full">
                        <img v-else :src="frFlag" alt="French Flag" class="w-5 h-5 rounded-full">
                        <span>{{ currentLanguageName }}</span>
                    </div>
                    <svg class="w-4 h-4" :class="isLanguageDropdownOpenMobile ? 'rotate-180' : ''" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </button>

                <!-- Mobile Language Dropdown Menu -->
                <div v-if="isLanguageDropdownOpenMobile"
                    class="absolute left-0 right-0 mt-2 bg-slate-800 text-white rounded-xl shadow-lg border border-primary-light z-50">
                    <button v-for="lang in languages" :key="lang.code" @click="selectLanguageMobile(lang.code)"
                        class="w-full px-4 py-3 text-left hover:bg-primary-light transition flex items-center justify-between border-b border-primary-light last:border-b-0 text-sm">
                        <div class="flex items-center gap-3">
                            <img :src="lang.icon" :alt="lang.name" class="w-5 h-5 rounded-full">
                            <span>{{ lang.name }}</span>
                        </div>
                        <svg v-if="locale === lang.code" class="w-5 h-5 text-green-400" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <button
                class="w-full px-4 py-2 bg-secondary rounded-xl hover:bg-secondary-light transition-colors duration-300 text-sm">{{
                    t('common.navbar.donate') }}</button>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, computed } from 'vue';
import engFlag from '@/assets/images/icons/eng_flag.png';
import khFlag from '@/assets/images/icons/kh_flag.png';
import frFlag from '@/assets/images/icons/french_flag.png';

const { t, locale } = useI18n();
const isMenuOpen = ref(false);
const isLanguageDropdownOpen = ref(false);
const isLanguageDropdownOpenMobile = ref(false);

const languages = [
    {
        code: 'en',
        name: 'English',
        icon: engFlag
    },
    {
        code: 'kh',
        name: 'ភាសាខ្មែរ',
        icon: khFlag
    },
    // {
    //     code: 'fr',
    //     name: 'Français',
    //     icon: frFlag
    // }
];

const currentLanguageName = computed(() => {
    const lang = languages.find(l => l.code === locale.value);
    return lang ? lang.name : 'English';
});

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

const toggleLanguageDropdown = () => {
    isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value;
    isLanguageDropdownOpenMobile.value = false;
};

const toggleLanguageDropdownMobile = () => {
    isLanguageDropdownOpenMobile.value = !isLanguageDropdownOpenMobile.value;
    isLanguageDropdownOpen.value = false;
};

const selectLanguage = (lang) => {
    locale.value = lang;
    isLanguageDropdownOpen.value = false;
    localStorage.setItem('lang', lang);
};

const selectLanguageMobile = (lang) => {
    locale.value = lang;
    isLanguageDropdownOpenMobile.value = false;
    localStorage.setItem('lang', lang);
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
    background-color: var(--color-primary-light);
    color: #ffca67;
}

.router-link-exact-active:hover {
    background-color: var(--color-primary-light);
}
</style>