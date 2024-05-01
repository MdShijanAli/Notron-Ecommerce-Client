<template>
  <div>
    <div class="p-3 sm:p-10 bg-white border">
      <Toolbar class="mb-4 border">
        <template #start>
          <Button
            label="New"
            icon="pi pi-plus"
            severity="success"
            class="mr-2 bg-green-500 px-4 py-2 text-white hover:bg-green-700 transition duration-500 ease-in-out"
            @click="openNew"
          />
          <Button
            label="Delete"
            icon="pi pi-trash"
            :class="
              selectedProducts?.length
                ? 'bg-red-600'
                : 'bg-red-400 cursor-not-allowed'
            "
            class="text-white px-4 py-2"
            severity="danger"
            @click="confirmDeleteSelected"
          />
        </template>

        <template #end>
          <FileUpload
            mode="basic"
            accept="image/*"
            :maxFileSize="1000000"
            label="Import"
            chooseLabel="Import"
            class="mr-2 inline-block px-4 py-2"
          />
          <Button
            label="Export"
            icon="pi pi-upload"
            class="bg-[#9333EA] text-white px-4 py-2"
            severity="help"
            @click="exportCSV($event)"
          />
        </template>
      </Toolbar>

      <DataTable
        ref="dt"
        :value="data"
        v-model:selection="selectedProducts"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
      >
        <template #header>
          <div class="flex flex-wrap gap-5 items-center justify-between">
            <h4 class="m-0">Manage Products</h4>
            <span class="p-input-icon-left flex gap-5">
              <i class="pi pi-search mr-5" />
              <InputText
                v-model="filters['global'].value"
                class="pl-10 py-2 border w-full"
                placeholder="Search..."
              />
            </span>
          </div>
        </template>

        <slot name="table-body"></slot>

        <Column header="Action" style="min-width: 8rem" class="border">
          <template #body="slotProps">
            <Button
              icon="pi pi-pencil"
              outlined
              rounded
              class="mr-2 border border-[#1EBC87] text-[#1EBC87]"
              @click="editProduct(slotProps.data)"
            />
            <Button
              icon="pi pi-trash"
              outlined
              rounded
              class="border text-red-600 border-red-600"
              @click="confirmDeleteProduct(slotProps.data)"
            />
          </template>
        </Column>
      </DataTable>
    </div>

    <Dialog
      v-model:visible="productDialog"
      class="w-full sm:w-[450px] p-fluid m-6"
      header="Product Details"
      :modal="true"
    >
      <img
        v-if="product.image"
        :src="`https://primefaces.org/cdn/primevue/images/product/${product.image}`"
        :alt="product.image"
        class="block m-auto pb-3"
      />
      <div class="field">
        <label for="name">Name</label>
        <InputText
          id="name"
          v-model.trim="product.name"
          required="true"
          autofocus
          :invalid="submitted && !product.name"
        />
        <small class="p-error" v-if="submitted && !product.name"
          >Name is required.</small
        >
      </div>
      <div class="field">
        <label for="description">Description</label>
        <Textarea
          id="description"
          v-model="product.description"
          required="true"
          rows="3"
          cols="20"
        />
      </div>

      <div class="field">
        <label for="inventoryStatus" class="mb-3">Inventory Status</label>
        <Dropdown
          id="inventoryStatus"
          v-model="product.inventoryStatus"
          :options="statuses"
          optionLabel="label"
          placeholder="Select a Status"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value && slotProps.value.value">
              <Tag
                :value="slotProps.value.value"
                :severity="getStatusLabel(slotProps.value.label)"
              />
            </div>
            <div v-else-if="slotProps.value && !slotProps.value.value">
              <Tag
                :value="slotProps.value"
                :severity="getStatusLabel(slotProps.value)"
              />
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>
        </Dropdown>
      </div>

      <div class="field">
        <label class="mb-3">Category</label>
        <div class="formgrid grid">
          <div class="field-radiobutton col-6">
            <RadioButton
              id="category1"
              name="category"
              value="Accessories"
              v-model="product.category"
            />
            <label for="category1">Accessories</label>
          </div>
          <div class="field-radiobutton col-6">
            <RadioButton
              id="category2"
              name="category"
              value="Clothing"
              v-model="product.category"
            />
            <label for="category2">Clothing</label>
          </div>
          <div class="field-radiobutton col-6">
            <RadioButton
              id="category3"
              name="category"
              value="Electronics"
              v-model="product.category"
            />
            <label for="category3">Electronics</label>
          </div>
          <div class="field-radiobutton col-6">
            <RadioButton
              id="category4"
              name="category"
              value="Fitness"
              v-model="product.category"
            />
            <label for="category4">Fitness</label>
          </div>
        </div>
      </div>

      <div class="formgrid grid">
        <div class="field col">
          <label for="price">Price</label>
          <InputNumber
            id="price"
            v-model="product.price"
            mode="currency"
            currency="USD"
            locale="en-US"
          />
        </div>
        <div class="field col">
          <label for="quantity">Quantity</label>
          <InputNumber id="quantity" v-model="product.quantity" integeronly />
        </div>
      </div>
      <template #footer>
        <Button label="Cancel" icon="pi pi-times" text @click="hideDialog" />
        <Button label="Save" icon="pi pi-check" text @click="saveProduct" />
      </template>
    </Dialog>

    <Dialog
      v-model:visible="deleteProductDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="product"
          >Are you sure you want to delete <b>{{ product.name }}</b
          >?</span
        >
      </div>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          text
          @click="deleteProductDialog = false"
        />
        <Button label="Yes" icon="pi pi-check" text @click="deleteProduct" />
      </template>
    </Dialog>

    <Dialog
      v-model:visible="deleteProductsDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="product"
          >Are you sure you want to delete the selected products?</span
        >
      </div>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          text
          @click="deleteProductsDialog = false"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          text
          @click="deleteSelectedProducts"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { FilterMatchMode } from "primevue/api";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";

const props = defineProps({
  data: {
    type: Array,
  },
});

const toast = useToast();
const dt = ref();
// const products = ref();
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref();
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});
const submitted = ref(false);
const statuses = ref([
  { label: "INSTOCK", value: "instock" },
  { label: "LOWSTOCK", value: "lowstock" },
  { label: "OUTOFSTOCK", value: "outofstock" },
]);

const openNew = () => {
  product.value = {};
  submitted.value = false;
  productDialog.value = true;
};
const hideDialog = () => {
  productDialog.value = false;
  submitted.value = false;
};
const saveProduct = () => {
  submitted.value = true;

  if (product?.value.name?.trim()) {
    if (product.value.id) {
      product.value.inventoryStatus = product.value.inventoryStatus.value
        ? product.value.inventoryStatus.value
        : product.value.inventoryStatus;
      products.value[findIndexById(product.value.id)] = product.value;
      toast.add({
        severity: "success",
        summary: "Successful",
        detail: "Product Updated",
        life: 3000,
      });
    } else {
      product.value.id = createId();
      product.value.code = createId();
      product.value.image = "product-placeholder.svg";
      product.value.inventoryStatus = product.value.inventoryStatus
        ? product.value.inventoryStatus.value
        : "INSTOCK";
      products.value.push(product.value);
      toast.add({
        severity: "success",
        summary: "Successful",
        detail: "Product Created",
        life: 3000,
      });
    }

    productDialog.value = false;
    product.value = {};
  }
};
const editProduct = (prod) => {
  product.value = { ...prod };
  productDialog.value = true;
};
const confirmDeleteProduct = (prod) => {
  product.value = prod;
  deleteProductDialog.value = true;
};
const deleteProduct = () => {
  products.value = products.value.filter((val) => val.id !== product.value.id);
  deleteProductDialog.value = false;
  product.value = {};
  toast.add({
    severity: "success",
    summary: "Successful",
    detail: "Product Deleted",
    life: 3000,
  });
};
const findIndexById = (id) => {
  let index = -1;
  for (let i = 0; i < products.value.length; i++) {
    if (products.value[i].id === id) {
      index = i;
      break;
    }
  }

  return index;
};
const createId = () => {
  let id = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};
const exportCSV = () => {
  dt.value.exportCSV();
};
const confirmDeleteSelected = () => {
  deleteProductsDialog.value = true;
};
const deleteSelectedProducts = () => {
  products.value = products.value.filter(
    (val) => !selectedProducts.value.includes(val)
  );
  deleteProductsDialog.value = false;
  selectedProducts.value = null;
  toast.add({
    severity: "success",
    summary: "Successful",
    detail: "Products Deleted",
    life: 3000,
  });
};

const getStatusLabel = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>

<style>
.card {
  padding: 50px !important;
  border-radius: 0px;
}

.p-checkbox-box.p-component {
  border: 1px solid #ddd !important;
}
.p-paginator.p-component {
  border: 1px solid #ddd;
}

nav.p-paginator-bottom {
  margin-top: 20px;
}

.p-dropdown.p-component.p-inputwrapper.p-inputwrapper-filled.p-paginator-rpp-options {
  border: 1px solid #ddd;
}

button.p-paginator-page.p-paginator-element.p-link.p-highlight {
  background: #f0fdfa;
}
</style>
