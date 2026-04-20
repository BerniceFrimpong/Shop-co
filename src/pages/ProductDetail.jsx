import { useParams, Link } from "react-router-dom";
import { casualProducts, newArrivals, topSelling } from "../data";
import ProductDetails from "../components/Products/ProductDetails";


const allProducts = [...newArrivals, ...topSelling, ...casualProducts];

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h2>Product not found.</h2>
        <Link to="/casual" style={{ color: "#000", textDecoration: "underline" }}>
          ← Back to Casual
        </Link>
      </div>
    );
  }

  return <ProductDetails product={product} />;
};

export default ProductDetail;
