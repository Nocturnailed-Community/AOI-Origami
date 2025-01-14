<template>
  <corousel />
  <aboutCard />
  <ServicesCard />
</template>

<script>
import corousel from "~/components/dashBoardComponent/bannerComponent/carousel.vue";
import aboutCard from "~/components/dashBoardComponent/aboutComponent/aboutCard.vue";
import ServicesCard from "~/components/dashBoardComponent/serviceComponent/serviceCard.vue";

export default {
  components: {
    corousel,
    aboutCard,
    ServicesCard
  },
};
</script>
