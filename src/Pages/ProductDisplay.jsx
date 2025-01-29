import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDisplay = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpoint = `http://localhost:1337/api/products/${id}?populate=*`;
    const authToken = 'Bearer 564be1737446c3a8b18fbb161a95f8b4d183c8f4e56b13718804e400cb970a42a6b7eb3389298afbd1b9ebc0943331fbdf852c60e8fa95142395a0ab815d19082260839425e0a34532df88dae9e6bcf4458e8803d3d50bea7fd599006a8294ce797588967ef73c699f8a0564224003b17f979faa0243b2681debfded1baaa6e9';

    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint, {
          headers: { Authorization: authToken },
        });

        setProduct(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(`Failed to fetch product details: ${err.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-5 py-24">
      {product && (
        <div className="max-w-4xl mx-auto">
          <img
            className="w-full rounded"
            src={`http://localhost:1337${product.attributes.image?.data?.attributes?.formats?.large?.url}`}
            alt={product.attributes.name}
          />
          <h1 className="text-3xl font-bold mt-4">{product.attributes.name}</h1>
          <h2 className="text-xl text-gray-500">
            {product.attributes.category?.data?.attributes?.name || 'No Category'}
          </h2>
          <p className="mt-4">{product.attributes.description}</p>
          <p className="text-lg font-semibold mt-4">
            ${product.attributes.price.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
