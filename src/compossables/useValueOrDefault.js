import { computed } from 'vue';

export default function useValueOrDefault(user) {
  console.log({user});
  const getValueOrDefault = (key, defaultValue = null) =>
      user.value?.[key] ? user.value[key] : defaultValue;

  return {
      getValueOrDefault,
  };
}

export const getValueOrDefault = (value, defaultValue = 'N/A') => computed(() => {
  return value ? value : defaultValue;
})?.value?.toString() 
