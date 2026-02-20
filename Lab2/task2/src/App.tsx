import Card from "./assets/components/Card.tsx";
import ProductList from "./assets/components/ProductList.tsx";
import Section from "./assets/components/Section.tsx";

function App() {
    return (
        <div>
            <Card title="Карточка 1">Контент первой</Card>
            <Card title="Карточка 2" className="highlight">Контент второй</Card>

            <Section title="Products">
                <ProductList />
            </Section>
        </div>
    );
}

export default App;
