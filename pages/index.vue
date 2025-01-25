<template>
  <corousel />
  <aboutCard />
  <ServicesCard />
  <programCard />
  <eventCard />
  <blogCard />
  <teamCard />
</template>

<script>
import corousel from "~/components/dashBoardComponent/bannerComponent/carousel.vue";
import aboutCard from "~/components/dashBoardComponent/aboutComponent/aboutCard.vue";
import ServicesCard from "~/components/dashBoardComponent/serviceComponent/serviceCard.vue";
import programCard from "~/components/dashBoardComponent/programComponent/programCard.vue";
import eventCard from "~/components/dashBoardComponent/eventComponent/eventCard.vue";
import blogCard from "~/components/dashBoardComponent/blogComponent/blogCard.vue";
import teamCard from "~/components/dashBoardComponent/teamComponent/teamCard.vue";

export default {
  components: {
    corousel,
    aboutCard,
    ServicesCard,
    programCard,
    eventCard,
    blogCard,
    teamCard
  },
};
</script>
