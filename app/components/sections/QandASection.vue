<script setup lang="ts">
import questionsPhoto from '~/assets/img/questions.jpg'

const faqs: { question: string; answer: string; link?: { href: string; label: string } }[] = [
  {
    question: 'What should I wear?',
    answer: 'We kindly ask that all guests wear formal attire. Elegant dresses, suits, and ties are encouraged. Our ceremony is at a church and we ask that guests dress accordingly.',
  },
  {
    question: 'When should I arrive?',
    answer: 'The bride won\'t be fashionably late and neither should you! Please be at the church by 12:30 pm. The ceremony begins at 1:00 pm.',
  },
  {
    question: 'Can I bring someone?',
    answer: 'We have only been able to seat the names printed on your invitation, so we are not able to offer plus-ones unless yours says otherwise.',
  },
  {
    question: 'Are children invited?',
    answer: 'While we adore your little ones, we have chosen to make our wedding an adults-only celebration. We hope you can enjoy a fun night out with us.',
  },
  {
    question: 'Is there a registry?',
    answer: 'Your presence at our wedding is the greatest gift. For those who have asked, we are lucky enough to have everything we need for our home. If you\'d like to contribute to our future adventures, we would be very grateful.',
    link: {
      href: 'https://withjoy.com/safe-and-merola/registry?utm_medium=web&utm_source=joy&utm_campaign=share_website_dialog',
      label: 'Our honeymoon fund',
    },
  },
]
</script>

<template>
  <BookSpread heading="Questions &amp; Answers" plate-bleed>
    <template #plate>
      <img
        :src="questionsPhoto"
        alt="Merola and Safe walking hand in hand down a bookshop aisle, laughing, a stack of books under his arm"
        class="plate-photo plate-photo--bleed"
        width="933"
        height="1400"
      >
    </template>

    <dl>
      <div v-for="(faq, index) in faqs" :key="faq.question" :class="index > 0 && 'mt-5 border-t border-blush-200 pt-5'">
        <dt class="text-lg text-blush-700 italic">{{ faq.question }}</dt>
        <dd class="mt-1 text-ink">
          <p>{{ faq.answer }}</p>
          <a
            v-if="faq.link"
            class="btn-quiet"
            :href="faq.link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{{ faq.link.label }}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </dd>
      </div>
    </dl>
  </BookSpread>
</template>
