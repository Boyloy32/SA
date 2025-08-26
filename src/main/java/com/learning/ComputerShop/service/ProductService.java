package com.learning.ComputerShop.service;

import com.learning.ComputerShop.entity.Product;
import com.learning.ComputerShop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Page<Product> getAllProducts(int page, int size, String sortDirection) {
        Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), "createdAt");
        Pageable pageable = PageRequest.of(page, size, sort);
        return productRepository.findAll(pageable);
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public Product updateProduct(Long id, Product updatedProduct) throws Exception {
        if (!productRepository.existsById(id)) {
            throw new Exception("Product with ID " + id + " not found");
        }
        updatedProduct.setId(id);
        return productRepository.save(updatedProduct);
    }

    public List<Product> findProductsByPriceRange(Double minPrice, Double maxPrice, Pageable pageable) {
        return productRepository.findProductsByPriceRange(minPrice, maxPrice, pageable);
    }
    public void deleteProduct(Long id) throws Exception {
        if (!productRepository.existsById(id)) {
            throw new Exception("Product with ID " + id + " not found");
        }
        productRepository.deleteById(id);
    }
}
