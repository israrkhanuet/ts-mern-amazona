import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetProductDetailsBySlugQuery } from "../hook/productHooks";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!);

  return (
    <div>
      <Helmet>
        <title>Product Page</title>{" "}
      </Helmet>
      ProductPage
    </div>
  );
}
