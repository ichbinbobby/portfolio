<script setup lang="ts">
import { page } from '~/data/content'

useSeoMeta({
  title: page.seo.title,
  ogTitle: page.seo.title,
  description: page.seo.description,
  ogDescription: page.seo.description,
  ogImage: '/og-image.jpg',
  ogType: 'website',
  ogUrl: 'https://portfolio.ichbinbobby.de',
  ogSiteName: 'ichbinbobby',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: page.seo.title,
  twitterDescription: page.seo.description,
  twitterImage: '/og-image.jpg'
})
</script>

<template>
  <UPage>
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: 'pt-0! lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingFAQ :page />
  </UPage>
</template>
