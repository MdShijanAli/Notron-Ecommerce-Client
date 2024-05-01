<template>
  <CommonTable :data="productLists">
    <template #table-body>
      <Column
        selectionMode="multiple"
        style="width: 3rem"
        :exportable="false"
        class="border"
      ></Column>
      <Column
        class="border"
        field="code"
        header="Code"
        sortable
        style="min-width: 12rem"
      ></Column>
      <Column
        class="border"
        field="title"
        header="Name"
        sortable
        style="min-width: 16rem"
      ></Column>
      <Column class="border" header="Image">
        <template #body="slotProps">
          <img
            :src="getSingleValueFromArray(slotProps.data.img)"
            :alt="slotProps.data.image"
            class="border-round"
            style="width: 64px"
          />
        </template>
      </Column>
      <Column
        class="border"
        field="price"
        header="Price"
        sortable
        style="min-width: 8rem"
      >
        <template #body="slotProps">
          {{ formatNumbersWithComas(slotProps.data.price) }}
        </template>
      </Column>
      <Column
        class="border"
        header="Category"
        sortable
        style="min-width: 10rem"
      >
        <template #body="slotProps">
          <span>{{ getSingleValueFromArray(slotProps.data.category) }}</span>
        </template>
      </Column>
      <Column
        class="border"
        field="reviews"
        header="Reviews"
        sortable
        style="min-width: 12rem"
      >
        <template #body="slotProps">
          <Rating
            :modelValue="slotProps.data.reviews"
            :readonly="true"
            :cancel="false"
          />
        </template>
      </Column>
      <Column
        class="border"
        field="status"
        header="Status"
        sortable
        style="min-width: 12rem"
      >
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.status"
            :severity="getStatusLabel(slotProps.data.status)"
          />
        </template>
      </Column>
    </template>
  </CommonTable>
</template>

<script setup>
import { onMounted } from "vue";
import CommonTable from "../../components/table/CommonTable.vue";
import { useProducts } from "../../compositions/useProducts";
import { formatNumbersWithComas } from "../../compossables/formatNumbersWithComas";
import { getSingleValueFromArray } from "../../compossables/getSingleValueFromArray";
import { getStatusLabel } from "../../compossables/getStatusLabel";

// Get Products List from Composition
const { productLists, fetchProducts, isProductLoading } = useProducts();

// Initially Load Products Data
onMounted(async () => {
  await fetchProducts();
});
</script>
