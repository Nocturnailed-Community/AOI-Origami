<template>
    <section>
        <Header />
        <slot />
        <Footer />
    </section>
</template>

<script>
import Header from '~/components/baseComponent/headerOrigami/header.vue';
import Footer from '~/components/baseComponent/footerOrigami/footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>