import './products.css';

const products = [
  {name: 'UMK start', id: 1, price: 100, alt: 'max-start', url: 'https://parettool.net/image/cache/catalog/product/mebelnyj-konduktor/UMK/%20%D0%BC%D1%96%D0%BD%D1%96/UMKM01-800x800.jpg'},
  {name: 'UMK kit', id: 2, price: 150, alt: 'max-kit', url: 'https://parettool.net/image/cache/catalog/product/mebelnyj-konduktor/UMK/%20%D1%81%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D1%8F/UMKS22-800x800.jpg'},
  {name: 'UMK max', id: 3, price: 200, alt: 'max-foto', url: 'https://parettool.net/image/cache/catalog/product/mebelnyj-konduktor/UMK/%20%D1%81%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D1%8F/UMKS12-800x800.jpg'},
];

const listItems = products.map((product) =>
  <div className='item'>
    <div>{product.name}</div>
    <img src={product.url} alt={product.alt} />
    <div>{product.price} $</div>
  </div>
);

export default function Products() {
  return (
    <div className='products'> {listItems}  </div>
  )
}
