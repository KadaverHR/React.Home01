import './index.css';
import './style.sass';
import { createRoot } from 'react-dom/client';
import { ProductList } from './ProductList';
// import { produtcs } from './Products';

const productList = document.getElementById('product-list')
const reactRoot = createRoot(productList)



function syncProductList() {
  reactRoot.render(<ProductList />)
}


syncProductList()



























