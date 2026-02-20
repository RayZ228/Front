import Card from "./Card.tsx";

const products = [
    { id: 1, name: 'Phone', price: 129.99},
    { id: 2, name: 'Watch', price: 65.99},
    { id: 3, name: 'Buds', price: 59.99},
];

const ProductList = () => (
    <>
        {products.map(product => (
            <Card key={product.id} title={product.name}>
                <p>Price: ${product.price}</p>
            </Card>
        ))}
    </>
);

export default ProductList;