import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the product you're looking for. It may have been removed or the link might be incorrect.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/products"
            className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Browse All Products
          </Link>
          <Link 
            href="/"
            className="inline-block w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

