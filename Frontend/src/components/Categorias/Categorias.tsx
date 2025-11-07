import './Categorias.css';

// Definir las props del componente
interface CategoriasProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

// Interface para las categorías
interface Category {
  id: string;
  name: string;
  emoji: string;
}

const Categorias = ({ onSelectCategory, selectedCategory }: CategoriasProps) => {
  const categories: Category[] = [
    { id: "todos", name: "Todos", emoji: "🎵" },
    { id: "cuerdas", name: "Cuerdas", emoji: "🎸" },
    { id: "percusion", name: "Percusión", emoji: "🥁" },
    { id: "teclados", name: "Teclados", emoji: "🎹" },
    { id: "vientos", name: "Vientos", emoji: "🎷" }
  ];

  return (
    <section id="categorias" className="categories">
      <div className="categories-container">
        <h2>Categorías de Instrumentos</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(category.id)}
            >
              <span className="category-emoji">{category.emoji}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// SOLO UNA VEZ ESTA LÍNEA ↓
export default Categorias;