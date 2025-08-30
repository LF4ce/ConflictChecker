import React from 'react';
import SearchInput from './components/SearchInput';
import CategoryFilter from './components/CategoryFilter';
import MatchList from './components/MatchList';
import { mockMatches } from './data/mockMatches';
import { useMatchSearch } from './hooks/useMatchSearch';
import './App.css';

function App() {
  const { 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory, 
    categories, 
    filteredMatches
  } = useMatchSearch(mockMatches);

  return (
    <div className="App">
      <main className="App-main">
        <div className="search-filters">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search facts by content, category, or reference..."
          />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <MatchList 
          matches={filteredMatches} 
          searchQuery={searchQuery} 
          selectedCategory={selectedCategory}
          isLoading={false}
          hasSearched={true}
          searchTime={0}
        />
      </main>
    </div>
  );
}

export default App;
