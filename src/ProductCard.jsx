import "./TermCard.css"
import { numberWithSpaces } from "./helper.js"

export const ProductCard = (item) => {

	return (
		<div className="card">
			<img className="card__img" src={item.imageUrl} />


			{item.discount ?
				<div className="card__desc-box">
					<p className="card__desc"> {numberWithSpaces(Math.ceil(item.price * item.discount))} ₽</p>
					<p className="card__price-desc">{numberWithSpaces(item.price)} ₽</p>
				</div>
				: <p className="card__price">{numberWithSpaces(item.price)} ₽</p>}


			<h2 className="card__title"> {item.title} </h2>


		</div>
	)
}

