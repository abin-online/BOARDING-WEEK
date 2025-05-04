import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Star, ShoppingCart, Heart, Truck, RotateCcw, Award } from 'lucide-react';
import {Link} from 'react-router-dom'
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://dummyjson.com/products?limit=10`);
            console.log(data.products)
            setProducts(data.products)
            return data.products
        }

        fetchData()
    }, [])

    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUsersPerPage] = useState(4);

    const filteredProducts = products.slice(currentPage * usersPerPage, (currentPage * usersPerPage) + usersPerPage);

    const buttonLength = Math.ceil(products.length / usersPerPage)


    return (
        <>
     <div className="px-32 py-11 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {filteredProducts.length > 0 && filteredProducts.map((product, index) => {
                    const discountedPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);

                    const renderRatingStars = (rating) => {
                        const stars = [];
                        const fullStars = Math.floor(rating);
                        const hasHalfStar = rating % 1 >= 0.5;

                        for (let i = 0; i < 5; i++) {
                            if (i < fullStars) {
                                stars.push(<Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />);
                            } else if (i === fullStars && hasHalfStar) {
                                stars.push(<Star key={i} size={14} className="text-yellow-400 fill-yellow-400 opacity-50" />);
                            } else {
                                stars.push(<Star key={i} size={14} className="text-gray-300" />);
                            }
                        }

                        return <div className="flex items-center">{stars} <span className="ml-1 text-xs text-gray-600">({rating})</span></div>;
                    };

                    return (
                        <Link to={`/product/${product.id}`}>
                        <div key={product.id} className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100 text-sm">
                            <div className="relative">
                                {/* Image */}
                                <div className="h-40 bg-gray-100 overflow-hidden">
                                    <img
                                        src={product.thumbnail || "/api/placeholder/400/320"}
                                        alt={product.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>

                                {/* Discount badge */}
                                {product.discountPercentage > 0 && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                        {Math.round(product.discountPercentage)}% OFF
                                    </div>
                                )}

                                {/* Wishlist icon */}
                                <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-sm hover:bg-gray-100">
                                    <Heart size={14} className="text-gray-600" />
                                </button>
                            </div>

                            <div className="p-3">
                                {/* Brand + Category */}
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">{product.brand}</span>
                                    <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full capitalize">{product.category}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">{product.title}</h3>

                                {/* Rating */}
                                <div className="mb-1">
                                    {renderRatingStars(product.rating)}
                                </div>

                                {/* Price */}
                                <div className="flex items-baseline mb-2">
                                    <span className="text-base font-bold text-gray-800 mr-2">${discountedPrice}</span>
                                    {product.discountPercentage > 0 && (
                                        <span className="text-xs text-gray-500 line-through">${product.price.toFixed(2)}</span>
                                    )}
                                </div>

                                {/* Stock */}
                                <div className="flex items-center mb-2">
                                    <div className={`w-2.5 h-2.5 rounded-full mr-2 ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    <span className="text-xs text-gray-600">
                                        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-xs text-gray-600 line-clamp-2 mb-3">{product.description}</p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-1 mb-3 text-[10px] text-gray-600">
                                    <div className="flex items-center">
                                        <Truck size={12} className="mr-1" />
                                        <span>{product.shippingInformation}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <RotateCcw size={12} className="mr-1" />
                                        <span>{product.returnPolicy}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Award size={12} className="mr-1" />
                                        <span>{product.warrantyInformation}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold mr-1">SKU:</span>
                                        <span>{product.sku}</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {product.tags && product.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded-full capitalize"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-3 rounded text-sm flex items-center justify-center transition-colors">
                                    <ShoppingCart size={14} className="mr-1" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        </Link>
                    );
                })}
          </div>
          </div>



            <div className="flex justify-center items-center gap-2 mt-8">
  {/* Prev Button */}
  <button
    onClick={() => setCurrentPage(prev => prev - 1)}
    disabled={currentPage < 1}
    className={`px-3 py-1 rounded text-sm font-medium border ${
      currentPage < 1
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-white text-gray-700 hover:bg-blue-100'
    }`}
  >
    PREV
  </button>

  {/* Page Buttons */}
  {Array(buttonLength)
    .fill(null)
    .map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index)}
        className={`px-3 py-1 rounded text-sm font-medium border transition-colors duration-200 ${
          currentPage === index
            ? 'bg-blue-600 text-white'
            : 'bg-white text-gray-700 hover:bg-blue-100'
        }`}
      >
        {index + 1}
      </button>
    ))}

  {/* Next Button */}
  <button
    onClick={() => setCurrentPage(prev => prev + 1)}
    disabled={currentPage >= buttonLength - 1}
    className={`px-3 py-1 rounded text-sm font-medium border ${
      currentPage >= buttonLength - 1
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-white text-gray-700 hover:bg-blue-100'
    }`}
  >
    NEXT
  </button>
</div>

        </>
    );
}

export default Products
