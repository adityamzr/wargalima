<script setup lang="ts">
const currentYear = new Date().getFullYear();

const contactInfo = {
  address: 'Gading Junti Asri RT 05, RW 05, Kel. Sangkanhurip, Kec. Katapang, Kab. Bandung, Jawa Barat',
  email: 'info@wargalima-rt5.id',
  phone: '+62 857 9809 7779',
};

const quickLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/about' },
  { name: 'Layanan', path: '/services' },
  { name: 'Kegiatan', path: '/agenda' },
  { name: 'Berita', path: '/news' },
  { name: 'Lapor atau Pengajuan', path: '#' },
];

const servicesLinks = [
  { name: 'Administrative Letters', path: '/services#letters' },
  { name: 'Community Reporting', path: '/services#reporting' },
  { name: 'Event Management', path: '/services#events' },
  { name: 'Resident Registration', path: '/services#registration' },
];

const socialLinks = [
  { name: 'Tiktok', imgPath: '/tiktok.png', url: '' },
  { name: 'Instagram', imgPath: '/instagram.png', url: '' },
  { name: 'Facebook', imgPath: '/facebook.png', url: '' },
  { name: 'WhatsApp', imgPath: '/whatsapp.png', url: 'https://wa.me/6285798097779?text=Assalamu%27alaikum%20Pak%20RT%2C%20perkenalkan%20saya%20[Nama%20Anda].%20Saya%20ingin%20menyampaikan%20maksud%2Fkeperluan%20saya%20terkait%20[tuliskan%20keperluannya%20secara%20singkat].%20Terima%20kasih%20atas%20perhatiannya.' },
];
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- About -->
        <div>
          <div class="flex">
            <h3 class="text-xl font-bold mb-4">Wargalima</h3>
            <img src="/logo.png" alt="" class="w-6 h-6 mx-1">
          </div>
          <p class="text-gray-400 mb-4">
            Sistem informasi terintegrasi untuk warga RT 05 RW 05 Gading Junti Asri yang menyediakan layanan dan informasi kependudukan dalam satu tempat.
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="link in socialLinks" 
              :key="link.name" 
              :href="link.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <span class="sr-only">{{ link.name }}</span>
              <!-- Replace with actual social media icons -->
              <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:border-primary-400">
                <!-- <span>{{ link.name.charAt(0) }}</span> -->
                <img :src="link.imgPath" :alt="link.name" class="w-8 h-8">
              </div>
            </a>
          </div>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-4">Kontak Kami</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start">
              <div class="min-w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 mt-1 text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div class="min-w-fit">
                <span>{{ contactInfo.address }}</span>
              </div>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-primary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>{{ contactInfo.email }}</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-primary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a href="https://wa.me/6285798097779?text=Assalamu%27alaikum%20Pak%20RT%2C%20perkenalkan%20saya%20[Nama%20Anda].%20Saya%20ingin%20menyampaikan%20maksud%2Fkeperluan%20saya%20terkait%20[tuliskan%20keperluannya%20secara%20singkat].%20Terima%20kasih%20atas%20perhatiannya." class="hover:text-primary-400" target="_blank"><span>{{ contactInfo.phone }}</span></a>
            </li>
          </ul>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Navigasi</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link 
                :to="link.path" 
                class="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h3 class="text-xl font-bold mb-4">Layanan</h3>
          <ul class="space-y-2">
            <li v-for="link in servicesLinks" :key="link.name">
              <router-link 
                :to="link.path" 
                class="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>&copy; {{ currentYear }} <a href="https://www.instagram.com/adityamzr/" class="hover:text-primary-400" target="_blank">adityamzainir</a>. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>