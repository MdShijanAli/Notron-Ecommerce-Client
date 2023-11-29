<template>
  <div class="py-20 px-6">
    <div class="max-w-7xl mx-auto bg-homeInfoBG rounded-lg">
      <div class="py-[80px] sm:pr-[46px] px-5 sm:pl-[51px] relative">
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 justify-between gap-5">
          <div v-for="info in infoItems" :key="info.id"
            class="flex gap-3 items-center lg:border-r-[3px] border-[#d0d0d0] lg:justify-center"
          >
            <span v-if="info?.icon" v-html="info?.icon"></span>
            <img v-else
              class="lg:w-14 w-10 lg:h-14 h-10"
              :src="info?.img"
              alt=""
            />
            <p class="lg:text-h3 break-words">{{ info.title }}</p>
          </div>
        </div>

        <div class="absolute top-0 left-32">
          <img src="../assets/images/shadow1.webp" alt="">
        </div>
        <div class="absolute bottom-0 right-0">
          <img src="../assets/images/shadow2.webp" alt="">
        </div>
        <div class="absolute bottom-0 left-0">
          <img src="../assets/images/shadow3.webp" alt="">
        </div>
        <div class="absolute top-0 right-52">
          <img src="../assets/images/shadow4.webp" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import img1 from "../components/icons/discount-voucher-icon.svg"
export default {
  name: "HomePageInfo",

  data() {
    return {
      infoItems: [
        {
          id: 1,
          icon: `  <svg
              class="lg:w-14 w-10 lg:h-14 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>`,
            title: "Free Home Delivary"
        },
        {
          id: 2,
          icon: ` <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="lg:w-14 w-10 lg:h-14 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>`,
            title: "Secure Payment"
        },
        {
          id: 3,
          img: img1,
            title: "Order Discount"
        },
        {
          id: 4,
          icon: `<svg
              xmlns="http://www.w3.org/2000/svg"
              class="lg:w-12 w-8 h-8 lg:h-12 fill-[#1F2937]"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 80C141.1 80 48 173.1 48 288V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288C0 146.6 114.6 32 256 32s256 114.6 256 256V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64h16c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V352zm288-64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h16z"
              />
            </svg>`,
            title: "24 x 7 Online Support"
        },
      ]
    };
  },
};
</script>
<style></style>
