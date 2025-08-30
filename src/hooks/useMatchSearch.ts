import { useState, useMemo } from 'react';
import { Match } from '../types/Match';

export const useMatchSearch = (matches: Match[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(matches.map(match => match.category)));
    return uniqueCategories.sort();
  }, [matches]);

  const filteredMatches = useMemo(() => {
    let filtered = matches;

    // Filter by category first
    if (selectedCategory) {
      filtered = filtered.filter(match => match.category === selectedCategory);
    }
    console.log(filtered);
    // Then filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((match) => {
        return (
          match.match.toLowerCase().includes(query) ||
          match.category.toLowerCase().includes(query) ||
          match.reference.toLowerCase().includes(query) ||
          match.id.toLowerCase().includes(query)
        );
      });
    }

    return filtered;
  }, [matches, searchQuery, selectedCategory]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredMatches
  };
};
