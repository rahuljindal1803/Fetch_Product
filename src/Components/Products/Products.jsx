import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItem } from "../../feature/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = ({ id, title, description, price, imageUrl, ratings }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showCartButtonStatus, setShowCartButtonStatus] = useState(false);

  const cartItems = useSelector(selectCartItem);

  useEffect(() => {
    setShowCartButtonStatus(cartItems.some((item) => item.id === id));
  }, [cartItems, id]);

  const handleAddToCart = () => {
    dispatch(
      addItem({ id, title, description, price, imageUrl, ratings, quantity: 1 })
    );
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="w-4/12  my-3">
      <div className=" w-11/12 rounded-xl h-11/12 overflow-hidden shadow-2xl border-gray-200  border-[1px] border-solid">
        <img
          className="w-full  h-60 p-2 rounded-2xl"
          src={imageUrl}
          alt="Logo"
        />
        <div className="h-32 px-6 py-4">
          <div className="font-bold text-lg mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}...</p>
        </div>
        <div className="h-16 px-2 flex  py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            ⭐ {ratings}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700">
            $ {price}
          </span>
          <button className="mx-1">
            {!showCartButtonStatus ? (
              <span
                onClick={handleAddToCart}
                className="inline-block bg-gray-200 rounded-full  px-3 py-1 text-base font-semibold text-gray-700"
              >
                Add to Cart
              </span>
            ) : (
              <span
                onClick={handleGoToCart}
                className="inline-block text-white bg-gray-900 rounded-full  px-3 py-1 text-base font-semibold"
              >
                Go to Cart
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  ratings: PropTypes.number,
  imageUrl: PropTypes.string,
  quantity: PropTypes.number,
};

export default Products;
