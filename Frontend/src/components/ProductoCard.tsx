import "./ProductoCard.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface Props {
  product: Product;
}

const ProductoCard = ({ product }: Props) => {
  const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23999'%3EImagen no disponible%3C/text%3E%3C/svg%3E";

  return (
    <div className="producto-card">
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => ((e.target as HTMLImageElement).src = placeholderImage)}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="precio">${product.price.toLocaleString("es-CO")}</p>
      <button className="btn-comprar">🛒 Agregar al carrito</button>
    </div>
  );
};

export default ProductoCard;
