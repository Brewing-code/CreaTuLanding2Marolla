import { Link } from "react-router-dom";



const ProductCard = ({product}) => {
  return (
		<div className='container-img'>
            <h3 className="title"> {product.title} </h3>
			<img className='image' src={product.img} alt={product.title} />
			<div className='price'>${product.price}</div>
            <Link to={`/itemDetail/${product.id}`} className="detalle">Ver detalle</Link>
		</div>
  );
}

export default ProductCard
