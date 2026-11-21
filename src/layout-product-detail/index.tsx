import ImageSection from "./imageSection";
import InfoSection from "./infoSection";
import RelatedProducts from "./relatedProducts";

const ProductDetails = () => {
  return (
    <div className="px-2 md:px-10 py-5 flex flex-col justify-center items-center gap-5">
      <ImageSection/>
      <InfoSection/>
      <RelatedProducts/>
    </div>
  );
};

export default ProductDetails;
