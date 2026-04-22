import { useParams, Link, useNavigate } from "react-router-dom";
import { casualProducts, newArrivals, topSelling } from "../data";
import ProductDetails from "../components/Products/ProductDetails";

const allProducts = [...newArrivals, ...topSelling, ...casualProducts];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ navigation hook

  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h2>Product not found.</h2>
        <Link to="/casual">← Back to Casual</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "24px 80px" }}>

      {/* BREADCRUMB NAVIGATION */}
      <div style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Home
        </Link>

        <span> {" > "} </span>

        <Link to="/casual" style={{ color: "inherit", textDecoration: "none" }}>
          Casual
        </Link>

        <span> {" > "} </span>

        <span style={{ color: "#000", fontWeight: "600" }}>
          Product Detail
        </span>
      </div>

      {/* ✅ PASS NAVIGATE FUNCTION DOWN */}
      <ProductDetails product={product} goToCart={() => navigate("/cart")} />
      
    </div>
  );
};

export default ProductDetail;