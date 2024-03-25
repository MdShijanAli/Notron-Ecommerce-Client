export function getSingleValueFromArray(values){
  const data = Array.isArray(values) ? values : JSON.parse(values);
  console.log('datatat', data[0]);
    return data[0]
}