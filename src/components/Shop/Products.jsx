import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "P1",
    title: "Wireless Headphones",
    price: 49.99,
    description:
      "High-quality wireless headphones with noise-canceling features.",
  },
  {
    id: "P2",
    title: "Running Shoes",
    price: 89.99,
    description: "Comfortable and durable running shoes for all terrains.",
  },
  {
    id: "P3",
    title: "Smartphone",
    price: 699.99,
    description:
      "Latest model smartphone with advanced features and sleek design.",
  },
  {
    id: "P4",
    title: "Wrist Watch",
    price: 129.99,
    description: "Stylish wristwatch with water-resistant capabilities.",
  },
  {
    id: "P5",
    title: "Laptop",
    price: 999.99,
    description:
      "Powerful laptop with high-end specifications for professionals.",
  },
  {
    id: "P6",
    title: "Office Chair",
    price: 149.99,
    description: "Ergonomic office chair designed for maximum comfort.",
  },
  {
    id: "P7",
    title: "Backpack",
    price: 49.99,
    description: "Durable backpack with multiple compartments.",
  },
  {
    id: "P8",
    title: "Water Bottle",
    price: 19.99,
    description: "Insulated water bottle that keeps drinks hot or cold.",
  },
  {
    id: "P9",
    title: "Gaming Mouse",
    price: 39.99,
    description:
      "Responsive gaming mouse with customizable buttons and RGB lighting.",
  },
  {
    id: "P10",
    title: "Desk Lamp",
    price: 24.99,
    description: "Adjustable desk lamp with LED lighting and touch controls.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
