<template>
  <div class="silder">
    <swiper class="swiper_container" :options="swiperOptions" ref="slider">
      <swiper-slide class="swiper_item" v-for="(slide,index) in slides" :key="index">
        <img :src="slide.img_url" />
      </swiper-slide>

    </swiper>
     <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "Slider",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoPlay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          clickable: true,
          renderCustom: function(swiper, current, total){
            const activeColor = "#168fed";
            const normalColor = "#aeaeae";
            let color = '';
            let paginationStyle = '';
            let html = '';
            for(let i=1;i<total;i++){
              if(i===current){
                color = activeColor
              }else{
                color = normalColor;
              }
              paginationStyle = `background:${color};opacity:1;margin-right:20px;width:20px;height:20px;transform:skew(15deg);border-radius:0;`
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
            }
            return html
          }
        }
        // Some Swiper option/callback...
      },
      slides: [
        {
          id: 1,
          img_url:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.17.002/banner-2.64b1407e7a8db89d6cf2.jpg"
        },
        {
          id: 2,
          img_url:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.17.002/banner-6.80cafe61bcb20a98eb1e.jpg"
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.slider.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
  }
};
</script>
<style>
.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33; /* 两种都可以 */
}
</style>
