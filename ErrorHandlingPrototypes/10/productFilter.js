function productFilter(productsArray) {
    // Return a function that takes a category as an argument
    return function(category) {
        // Filter the productsArray by the given category
        return productsArray.filter(product => product.category === category);
    };
}

// Example usage
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Shirt', category: 'Clothing' },
    { id: 3, name: 'Phone', category: 'Electronics' },
    { id: 4, name: 'Shoes', category: 'Clothing' },
    { id: 5, name: 'Headphones', category: 'Electronics' }
];

const filterByCategory = productFilter(products);

const electronics = filterByCategory('Electronics');
const clothing = filterByCategory('Clothing');

console.log(electronics);
// Output: [
//   { id: 1, name: 'Laptop', category: 'Electronics' },
//   { id: 3, name: 'Phone', category: 'Electronics' },
//   { id: 5, name: 'Headphones', category: 'Electronics' }
// ]

console.log(clothing);
// Output: [
//   { id: 2, name: 'Shirt', category: 'Clothing' },
//   { id: 4, name: 'Shoes', category: 'Clothing' }
// ]
