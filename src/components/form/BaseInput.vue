<template>
  <div>
    <div class="my-3">
      <label for="input" class="mb-1">{{ label }}</label>
      <input
        v-if="type === 'text'"
        v-model.trim="data"
        id="input"
        :type="type"
        class="py-3 px-4 mt-2 block w-full border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        :class="[errorMessage ? errorMessage : error ? 'isWarning' : '']"
        :placeholder="placeholder"
      />

      <InputNumber
        v-if="type === 'number'"
        v-model="data"
        mode="currency"
        currency="USD"
        inputId="currency-us"
        locale="en-US"
        :minFractionDigits="2"
        class="focus:border-primary focus:ring-primary mt-2"
      />
    </div>

    <transition name="fade-in">
      <p class="form_error_message" v-if="error || errorMessage">
        <!-- <Icon name="ri:error-warning-fill" /> -->
        <span>{{ errorMessage ? errorMessage : error }}</span>
      </p>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useVModel } from "../../compossables/useVModel";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: 0,
  },
  type: {
    type: String,
    default: "text", // Possible values: 'text', 'number', 'password', 'phone', 'email'
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  divClass: {
    type: String,
    default: "",
  },
  classes: {
    type: String,
    default: "",
  },
  help: {
    type: String,
    default: "",
  },
  minLength: {
    type: Number,
    default: 0,
  },
  maxLength: {
    type: Number,
    default: Infinity,
  },
  required: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: [Object, String],
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  autocomplete: {
    type: String,
    default: "off",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  showPasswordToggle: {
    type: Boolean,
    default: false,
  },
  sanitizeInput: {
    type: Boolean,
    default: false,
  },
  min: {
    type: Number,
    default: null, // Minimum value for number type
  },
  max: {
    type: Number,
    default: null, // Maximum value for number type
  },
  phoneFormat: {
    type: String,
    default: "", // Regular expression or format for phone number validation
  },
  emitOnBlur: {
    type: Boolean,
    default: false, // Emit 'blur' event on focus loss
  },
  options: {
    type: Object,
    default: {
      prefix: "",
      suffix: "",
      separator: ",",
      decimal: ".",
      precision: 2,
      minimumFractionDigits: null,
      prefill: true,
      reverseFill: false,
      min: null,
      max: null,
      nullValue: "",
    },
  },
});

const emit = defineEmits(["update:modelValue"]);
const data = useVModel(props, emit, "modelValue");
const errorMessage = ref("");
const isShownPassword = ref(false);
const inputRef = ref(null); // Create a ref to hold the input element

watch(
  () => data.value,
  () => {
    if (props.type) {
      if (
        props.type === "email" &&
        data.value &&
        !data.value.match(/\S+@\S+\.\S+/)
      ) {
        // errorMessage.value = 'Please input a valid email';
      } else if (
        props.type === "number" &&
        (isNaN(data.value) || Number(data.value) < 0)
      ) {
        errorMessage.value = "Please input a valid number";
      } else if (
        props.type === "number" &&
        data.value &&
        props.min &&
        Number(props.min) > Number(data.value)
      ) {
        errorMessage.value = `Value should be greater than ${props.min}`;
      } else if (
        props.type === "number" &&
        data.value &&
        props.max &&
        Number(props.max) < Number(data.value)
      ) {
        errorMessage.value = `Value should be less than ${props.max}`;

        // check max value
        // if (Number(props.max) < Number(data.value)) {
        console.log("props.max", props.max);
        console.log("data.value", data.value);
        // data.value = props.max;
        //   data.value = Number(
        //     data.value.toString().split('').slice(0, props.max),
        //   );
        // }
      } else if (
        props.type === "text" &&
        data.value &&
        props.maxLength &&
        data.value.length > props.maxLength
      ) {
        errorMessage.value = `Text should be less than ${props.maxLength}`;
      } else if (
        props.type === "text" &&
        data.value &&
        props.minLength &&
        data.value.length < props.minLength
      ) {
        errorMessage.value = `Text should be greater than ${props.minLength}`;
      } else {
        errorMessage.value = "";
      }
    }
  },
  { deep: true, immediate: true }
);
</script>

<style>
/* span.p-inputnumber.p-component.p-inputwrapper.p-inputwrapper-filled {
    border: 1px solid #000;
} */

input#currency-us {
  padding: 10px 20px;
  border: 1px solid #ddd;
}
input#currency-us:focus {
  border: none;
}
.p-inputwrapper-focus {
  border: none;
}
</style>
