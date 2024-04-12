import "./TermCard.css"


export const ProductCard = (item) => {

    return (
        <div className="term-card">
            <h2 className="term-card__title"> {item.title} </h2>
            {item.price && <p className="term-card__desc"> {item.price} </p>}
            <img src={item.imageUrl} />
          
        </div>
    )
}