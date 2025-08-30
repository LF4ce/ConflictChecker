import React from 'react';
import './CategoryFilter.css';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  const allCategories = ['All', ...categories];

  return (
    <div className="category-tabs">
      <div className="tabs-container">
        {allCategories.map((category) => (
          <button
            key={category}
            className={`tab ${
              (category === 'All' && selectedCategory === '') || 
              category === selectedCategory 
                ? 'active' : ''
            }`}
            onClick={() => onCategoryChange(category === 'All' ? '' : category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
