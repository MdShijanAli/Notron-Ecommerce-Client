// import { computed } from 'vue'
import { computed } from 'vue';

export function useVModel(props, emit, name = 'modelValue') {
  return computed({
      get: () => props[name],
      set: (value) => emit(`update:${name}`, value)
  });
};
