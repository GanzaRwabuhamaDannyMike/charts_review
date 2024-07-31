import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setFilteredProducts(
      PRODUCT_DATA.filter(
        (product) =>
          product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          product.category.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <motion.div
      className=' bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden p-6 shadow-lg rounded-xl border border-gray-700 mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Products List</h2>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search products...'
            onChange={handleSearch}
            value={searchTerm}
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th
                scope='col'
                className='px-4 py-3 text-left text-sm font-semibold text-gray-400 uppercase tracking-tight'
              >
                Name
              </th>
              <th
                scope='col'
                className='px-4 py-3 text-left text-sm font-semibold text-gray-400 uppercase  tracking-tight'
              >
                Category
              </th>
              <th
                scope='col'
                className='px-4 py-3 text-left text-sm font-semibold text-gray-400 uppercase  tracking-tight'
              >
                Price
              </th>
              <th
                scope='col'
                className='px-4 py-3 text-left text-sm font-semibold text-gray-400 uppercase  tracking-tight'
              >
                Stock
              </th>
              <th
                scope='col'
                className='px-4 py-3 text-left text-sm font-semibold text-gray-400 uppercase  tracking-tight'
              >
                Sales
              </th>
              <th
                scope='col'
                className='px-4 py-3 text-left text-sm font-semibold text-gray-400 uppercase  tracking-tight'
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700'>
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                  <img
                    src='https://images.unsplash.com/photo-1660581283991-d6278d9dce53?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='product image'
                    className='size-10 rounded-full'
                  />
                  {product.name}
                </td>

                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400'>
                  {product.category}
                </td>

                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400'>
                  ${product.price.toFixed(2)}
                </td>

                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400'>
                  {product.stock}
                </td>

                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400'>
                  {product.sales}
                </td>

                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400'>
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>

                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;
