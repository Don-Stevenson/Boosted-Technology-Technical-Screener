'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import { Product } from '@/types/products';
import { useState } from 'react';
import json from '@/data/sample.json';
import Image from 'next/image';

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string; 
  const [product] = useState<Product | null | undefined>(json.products.find((p) => p.id.toString() === id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        &lt; Back to Products
      </Link>
      
      <div className={styles.productDetails}>
        <div className={styles.imageSection}>
          <Image 
            src={product.thumbnail} 
            alt={product.title} 
            className={styles.mainImage}
            width={400}
            height={400}
          />
          <div className={styles.imageGrid}>
            {product.images.slice(0, 4).map((image, index) => (
              <Image 
                key={index} 
                src={image} 
                alt={`${product.title} ${index + 1}`} 
                className={styles.thumbnail}
            width={400}
            height={80}
              />
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <h1>{product.title}</h1>
          <p className={styles.brand}>{product.brand}</p>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.priceRating}>
            <span className={styles.price}>${product.price}</span>
            <span className={styles.rating}>Rating: {product.rating}/5</span>
          </div>
        </div>
      </div>
    </div>
  );
}