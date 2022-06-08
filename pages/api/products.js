import products from '../../sttic/products.json'

export default (req, res) => {
  res.status(200).json(products);
};
