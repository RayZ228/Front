const items = [
    { id: 1, name: 'Apple'},
    { id: 2, name: 'Banana'},
    { id: 3, name: 'Cherry'},
];

const ItemList = () => (
    <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
    </ul>
);

export default ItemList;