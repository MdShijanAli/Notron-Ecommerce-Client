<template>
  <div>
    <div v-for="review in reviews" :key="review.id" class="border p-10 my-3">
      <div class="flex items-center gap-5 mb-10">
        <div class="w-20">
          <img
            class="inline-block w-full rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
        </div>
        <div>
          <div class="flex gap-3 mb-3 items-center">
            <h2 class="">{{ review.name }}</h2>
            <p>|</p>
            <p>{{ dateDefine(review.updated_at.slice(0, 10)) }} days ago</p>
          </div>
          <Rating v-model="review.rating" readonly :cancel="false" />
        </div>
      </div>
      <div>
        {{ review.comment }}
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  reviews: {
    type: Array,
  },
});
const dateDefine = (date) => {
  const todayDate = new Date();
  const reviewDate = new Date(date);
  const timeDiff = todayDate - reviewDate; // Difference in milliseconds
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  return daysDiff;
};
</script>
<style>
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
  color: #faca15;
}
</style>
