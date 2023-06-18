- Add Transaction -

try {
  await sequelize.transaction(async (transaction: Transaction) => {
    // Your transactional code goes here
    
    // Example: Creating a product
    const newProduct = await Product.create(
      {
        name: 'Example Product',
        price: 9.99,
      },
      { transaction }
    );
    
    // Example: Updating a product
    await newProduct.update(
      {
        price: 14.99,
      },
      { transaction }
    );
    
    // ... Perform more transactional operations
    
  });
} catch (error) {
  console.error('Error executing transaction:', error);
}
