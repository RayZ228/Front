import itemList from "./itemList.tsx";

const items = [
    { id: 1, name: 'Apple'},
    { id: 2, name: 'Banana'},
    { id: 3, name: 'Cherry'},
]

const Combined = () => (
    <>
        <h2>Список Фруктов</h2>
        <itemList />
        <p>Total: {items.length} items</p>
    </>
);
export default Combined;
