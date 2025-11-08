import "./ProductoCard.css";
import React from "react";

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
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    // Si falla, mostrar un color de fondo en lugar de imagen rota
    img.style.display = "none";
    const parent = img.parentElement;
    if (parent) {
      parent.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      parent.style.display = "flex";
      parent.style.alignItems = "center";
      parent.style.justifyContent = "center";
      const text = document.createElement("p");
      text.textContent = "📸";
      text.style.fontSize = "48px";
      parent.appendChild(text);
    }
  };

  return (
    <div className="producto-card">
      <img
        src={product.image}
        alt={product.name}
        className="producto-imagen"
        onError={handleImageError}
      />
      <h3>{product.name}</h3>
      <p className="categoria">{product.category}</p>
      <p className="descripcion">{product.description}</p>
      <p className="precio">${product.price.toLocaleString("es-CO")}</p>
      <button className="btn-comprar">🛒 Agregar al carrito</button>
    </div>
  );
};

export default ProductoCard;
