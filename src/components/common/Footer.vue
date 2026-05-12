<template>
  <footer class="w-full text-white font-sans">
    <div class="bg-primary py-12 px-6 lg:px-8">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="@/assets/images/pss_logo.png" alt="PSS Logo" class="w-16 h-16">
            <div class="text-white">
                <p class="text-2xl font-bold leading-none">{{ t('common.pss.short_name') }}</p>
                <p class="text-sm"> {{ t('common.pss.name') }}</p>
            </div>
          </div>
          <p class="text-slate-50 leading-relaxed text-sm opacity-90">
            {{ t('home.hero.subtitle') }}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block text-slate-00">{{ t('common.footer.quick_links') }}</h3>
          <ul class="space-y-2">
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("common.navbar.home")}}
              </a>
            </li>
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("common.navbar.about")}}
              </a>
            </li>
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("common.navbar.team")}}
              </a>
            </li>
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("common.navbar.programs")}}
              </a>
            </li>
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("common.navbar.impact")}}
              </a>
            </li>
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("common.navbar.get_involved")}}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">{{ t('common.footer.contact.title') }}</h3>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3 group">
              <component :is="Mail" class="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
              <span class="text-sm text-slate-50">{{ t('common.footer.contact.email') }}</span>
            </li>
            <li class="flex items-start space-x-3 group">
              <component :is="Phone" class="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
              <span class="text-sm text-slate-50">{{ t('common.footer.contact.phone') }}</span>
            </li>
            <li class="flex items-start space-x-3 group">
              <component :is="MapPin" class="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
              <span class="text-sm text-slate-50">{{ t('common.footer.contact.address') }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">{{ t('common.footer.legal') }}</h3>
          <ul class="space-y-3">
            <li><a href="#">{{ t('common.footer.terms_and_conditions') }}</a></li>
            <li><a href="#">{{ t('common.footer.privacy_policy') }}</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="bg-[#22bbea] brightness-90 py-6 px-6 border-t border-white/10">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-100/80">
        <p>&copy; {{ currentYear }} {{ t('common.footer.copy') }}</p>
        <div class="mt-4 md:mt-0 flex space-x-6">
          <span>{{ t('common.footer.privacy_policy') }}</span>
          <span>{{ t('common.footer.terms_and_conditions') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { computed } from 'vue';
import { 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-vue-next';



// Dynamic Year Logic
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>

</style>