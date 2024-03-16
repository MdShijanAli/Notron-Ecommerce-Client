const baseUrl = 'http://localhost:3000/api/'

// Function to create the complete URL by concatenating the baseUrl, url, and endpoint
const createUrl = (endpoint) => baseUrl + endpoint;
console.log('createUrl:', createUrl('products'));

export const apiRoutes = {
   product:{
     products: createUrl('products')
   },
   blog:{
     blogs: createUrl('blogs')
   },
   review:{
     reviews: createUrl('reviews'),
     reviewsByProductId: createUrl('reviews/product')
   }
}