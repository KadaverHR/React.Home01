import { ProductCard } from "./ProductCard"
import "./CardList.css"
import { Products } from "./Products.js"

export const ProductList = () => {
    return (
        <ul className="card-list">
            {Products.map((item) => (
                <li className="card-list__item" key={item.id}>
                    <ProductCard
                        {...item}
                    />
                </li>
            ))}
        </ul>
    )
}