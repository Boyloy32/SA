package com.learning.ComputerShop.service;

import com.learning.ComputerShop.entity.Category;
import com.learning.ComputerShop.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Page<Category> getAllCategories(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return categoryRepository.findAll(pageable);
    }

    public Optional<Category> getCategoryById(Long id) {
        return categoryRepository.findById(id);
    }

    public Category updateCategory(Long id, Category updatedCategory) throws Exception {
        if (!categoryRepository.existsById(id)){
            throw new Exception("Category with ID" + id + "not found");
        }
        updatedCategory.setId(id);
        return categoryRepository.save(updatedCategory);
    }

    public void deleteCategory(Long id) throws Exception {
        if (!categoryRepository.existsById(id)) {
            throw new Exception("Category with ID" + id + "not found");
        }
        categoryRepository.deleteById(id);
    }
}
