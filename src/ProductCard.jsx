import "./TermCard.css"


export const ProductCard = (item) => {

	return (
		<div className="card">
			<img className="card__img" src={item.imageUrl} />
			<div className="card__price-box">
				<p className="card__price">{item.price} руб.</p>

				{item.discount && <p className="card__desc"> {Math.ceil(item.price * item.discount)} </p>}

			</div>
			<h2 className="card__title"> {item.title} </h2>
			

		</div>
	)
}