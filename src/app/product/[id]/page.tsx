import ProductDetailsPage from '@/components/pages-copmonents/product-details/product-details-page';
import { notFound } from 'next/navigation';
import { getProduct, getRelatedProducts, getBreadcrumbs } from '@/data/products';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id);
  const breadcrumbs = getBreadcrumbs(product);

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductDetailsPage
        product={product}
        relatedProducts={relatedProducts}
        breadcrumbs={breadcrumbs}
      />
    </div>
  );
}

// Generate static params for known products (optional, for better performance)
export async function generateStaticParams() {
  // This would typically come from your API or database
  const productIds = ['SGT6U7V8', 'EQ267FB', 'QN367MG', 'MT367BP', 'HV367FM'];
  
  return productIds.map((id) => ({
    id: id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProduct(params.id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Your Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]?.url],
    },
  };
}

