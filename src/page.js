import Product from "./product";

async function serverComponent() {
  let data = await fetch("https://dummyjson.com/products");
  console.log(data);
  data = await data.json();
  return data.products;
}

export default async function ServerPage() {
  let products = await serverComponent();
  console.log(products);
  return (
    <div>
      <h1> Product list for server component</h1>
      {products.map((item) => (
        <div>
          <h3 key={item.id}>name: {item.title}</h3>
          <Product price={item.price} />
        </div>
      ))}
    </div>
  );
}
