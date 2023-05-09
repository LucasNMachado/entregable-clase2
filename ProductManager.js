class ProductManager {
    constructor() {
      this.products = [];
      this.productId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
     
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log('Todos los campos son obligatorios');
        return;
      }
  
        const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        console.log('El código ya existe');
        return;
      }
  
      const newProduct = {
        id: this.productId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      console.log('Producto agregado');
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        console.log('Not found');
      }
      return product;
    }
  }