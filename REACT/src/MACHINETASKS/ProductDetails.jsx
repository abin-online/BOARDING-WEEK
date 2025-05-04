import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Truck, 
  RotateCcw, 
  Award, 
  ChevronLeft, 
  Share2, 
  Box, 
  ShieldCheck, 
  Clock, 
  Check,
  Info
} from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(data);
      } catch (err) {
        setError('Failed to load product details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Render rating stars
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} size={16} className="text-yellow-400 fill-yellow-400 opacity-50" />);
      } else {
        stars.push(<Star key={i} size={16} className="text-gray-300" />);
      }
    }

    return <div className="flex items-center">{stars} <span className="ml-1 text-sm text-gray-600">({rating})</span></div>;
  };

  // Handle quantity change
  const handleQuantityChange = (operation) => {
    if (operation === 'increase' && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (operation === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-red-500 text-xl mb-4">
          <Info size={40} className="mx-auto mb-4" />
          {error || 'Product not found'}
        </div>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Products
        </Link>
      </div>
    );
  }

  // Calculate discounted price
  const discountedPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);

  // Format reviews data for display
  const reviews = product.reviews || [];
  const avgRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : product.rating;

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{product.title}</span>
        </nav>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
        >
          <ChevronLeft size={16} className="mr-1" /> Back to products
        </Link>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
            {/* Product Images - Left Side */}
            <div className="lg:col-span-2 border-r border-gray-100">
              {/* Main Image */}
              <div className="relative h-80 md:h-96 bg-gray-100 border-b">
                <img
                  src={product.images && product.images.length > 0 
                    ? product.images[selectedImage] 
                    : product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain p-4"
                />
                {product.discountPercentage > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {Math.round(product.discountPercentage)}% OFF
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <Heart size={18} className="text-gray-600" />
                </button>
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <Share2 size={18} className="text-gray-600" />
                </button>
              </div>
              
              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="flex overflow-x-auto p-2 gap-2 border-b">
                  {product.images.map((image, index) => (
                    <div 
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`cursor-pointer border-2 rounded-md overflow-hidden flex-shrink-0 w-16 h-16 
                        ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.title} - view ${index + 1}`}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info - Right Side */}
            <div className="lg:col-span-3 p-6">
              {/* Brand + Category */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{product.brand}</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full capitalize">{product.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>

              {/* Rating */}
              <div className="mb-4">
                {renderRatingStars(product.rating)}
                <span className="text-sm text-blue-600 ml-2 hover:underline cursor-pointer">
                  {reviews.length} reviews
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-gray-800 mr-3">${discountedPrice}</span>
                {product.discountPercentage > 0 && (
                  <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                )}
                {product.discountPercentage > 0 && (
                  <span className="ml-2 text-sm text-green-600">Save ${(product.price - discountedPrice).toFixed(2)}</span>
                )}
              </div>

              {/* Availability */}
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 rounded-full mr-2 ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm text-gray-700">
                  {product.stock > 0 
                    ? `${product.availabilityStatus}: ${product.stock} items left` 
                    : 'Out of stock'}
                </span>
              </div>

              {/* Short Description */}
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Quantity selector */}
              {product.stock > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleQuantityChange('decrease')}
                      disabled={quantity <= 1}
                      className={`p-2 border border-gray-300 rounded-l-md ${quantity <= 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max={product.stock}
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val >= 1 && val <= product.stock) {
                          setQuantity(val);
                        }
                      }}
                      className="p-2 w-16 text-center border-t border-b border-gray-300"
                    />
                    <button 
                      onClick={() => handleQuantityChange('increase')}
                      disabled={quantity >= product.stock}
                      className={`p-2 border border-gray-300 rounded-r-md ${quantity >= product.stock ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      +
                    </button>
                    <span className="ml-3 text-sm text-gray-500">
                      Minimum order: {product.minimumOrderQuantity || 1}
                    </span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md flex items-center justify-center transition-colors"
                  disabled={product.stock <= 0}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-md flex items-center justify-center transition-colors">
                  <Heart size={18} className="mr-2" />
                  Add to Wishlist
                </button>
              </div>

              {/* Product Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start">
                  <Box size={16} className="mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700">Dimensions</p>
                    <p className="text-gray-600">
                      {product.dimensions ? 
                        `${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm` :
                        'Not specified'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheck size={16} className="mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700">Warranty</p>
                    <p className="text-gray-600">{product.warrantyInformation || 'No warranty'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Truck size={16} className="mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700">Shipping</p>
                    <p className="text-gray-600">{product.shippingInformation || 'Standard shipping'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RotateCcw size={16} className="mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700">Returns</p>
                    <p className="text-gray-600">{product.returnPolicy || 'No returns'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'description'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'details'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Reviews ({reviews.length})
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-4">Product Description</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {/* Features List - Example content */}
                <h3 className="text-md font-medium text-gray-800 mt-6 mb-3">Key Features</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>High-quality {product.category} from {product.brand}</li>
                  <li>Premium materials for durability and performance</li>
                  <li>Sleek design for modern aesthetics</li>
                  <li>Easy to use and maintain</li>
                  <li>Backed by {product.warrantyInformation}</li>
                </ul>
              </div>
            )}

            {/* Details Tab */}
            {activeTab === 'details' && (
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-4">Product Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Brand</span>
                    <span className="font-medium text-gray-800">{product.brand}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium text-gray-800 capitalize">{product.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">SKU</span>
                    <span className="font-medium text-gray-800">{product.sku}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-medium text-gray-800">{product.weight || 'N/A'} kg</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Dimensions (W×H×D)</span>
                    <span className="font-medium text-gray-800">
                      {product.dimensions ? 
                        `${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm` :
                        'Not specified'}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Warranty</span>
                    <span className="font-medium text-gray-800">{product.warrantyInformation || 'No warranty'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Return Policy</span>
                    <span className="font-medium text-gray-800">{product.returnPolicy || 'No returns'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Minimum Order</span>
                    <span className="font-medium text-gray-800">{product.minimumOrderQuantity || 1} unit(s)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Barcode</span>
                    <span className="font-medium text-gray-800">{product.meta?.barcode || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Last Updated</span>
                    <span className="font-medium text-gray-800">
                      {product.meta?.updatedAt ? new Date(product.meta.updatedAt).toLocaleDateString() : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium text-gray-800">Customer Reviews</h2>
                  <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                    Write a Review
                  </button>
                </div>

                {/* Review Summary */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center mb-3">
                    <div className="text-3xl font-bold text-gray-800 mr-3">{avgRating.toFixed(1)}</div>
                    <div>
                      {renderRatingStars(avgRating)}
                      <div className="text-sm text-gray-500 mt-1">Based on {reviews.length} reviews</div>
                    </div>
                  </div>
                </div>

                {/* Reviews List */}
                {reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                              {review.reviewerName.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">{review.reviewerName}</p>
                              <div className="flex items-center">
                                {renderRatingStars(review.rating)}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString()}
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">You Might Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* This would be populated with product cards from your existing component */}
          {Array(5).fill(null).map((_, index) => (
            <div key={index} className="bg-white rounded-md shadow-sm overflow-hidden border border-gray-100 h-48 flex items-center justify-center">
              <p className="text-gray-400">Related Product {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;