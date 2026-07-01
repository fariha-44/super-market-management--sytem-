import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Products() {

const products = [

{
name:"Fresh Apples",
category:"Fruits",
price:"2.99",
image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
},

{
name:"Bananas",
category:"Fruits",
price:"1.80",
image:"https://images.unsplash.com/photo-1603833665858-e61d17a86224"
},

{
name:"Fresh Milk",
category:"Dairy",
price:"3.50",
image:"https://images.unsplash.com/photo-1550583724-b2692b85b150"
},

{
name:"Bread",
category:"Bakery",
price:"2.10",
image:"https://images.unsplash.com/photo-1509440159596-0249088772ff"
},

{
name:"Orange Juice",
category:"Drinks",
price:"4.50",
image:"https://images.unsplash.com/photo-1621506289937-a8e4df240d0b"
},

{
name:"Rice",
category:"Groceries",
price:"18",
image:"https://images.unsplash.com/photo-1586201375761-83865001e31c"
},

{
name:"Chicken",
category:"Meat",
price:"12",
image:"https://images.unsplash.com/photo-1604503468506-a8da13d82791"
},

{
name:"Cooking Oil",
category:"Household",
price:"9",
image:"https://images.unsplash.com/photo-1620706857370-e1b9770e8bbf"
},

];

return (

<>

<Navbar />

<main className="pt-28 bg-gray-50 min-h-screen">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-5xl font-bold text-center">
Our Products
</h1>

<p className="text-center text-gray-500 mt-4 mb-12">
Discover fresh, high-quality products for your everyday needs.
</p>

<div className="flex flex-wrap justify-center gap-4 mb-12">

<button className="bg-green-600 text-white px-5 py-2 rounded-full">
All
</button>

<button className="bg-white px-5 py-2 rounded-full shadow">
Fruits
</button>

<button className="bg-white px-5 py-2 rounded-full shadow">
Vegetables
</button>

<button className="bg-white px-5 py-2 rounded-full shadow">
Dairy
</button>

<button className="bg-white px-5 py-2 rounded-full shadow">
Bakery
</button>

<button className="bg-white px-5 py-2 rounded-full shadow">
Drinks
</button>

</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

{products.map((product,index)=>(

<ProductCard
key={index}
image={product.image}
name={product.name}
category={product.category}
price={product.price}
/>

))}

</div>

</div>

</main>

<Footer />

</>

);

}

export default Products;