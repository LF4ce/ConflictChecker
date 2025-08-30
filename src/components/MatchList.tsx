import React from 'react';
import { Match } from '../types/Match';
import MatchCard from './MatchCard';
import LoadingSpinner from './LoadingSpinner';
import './MatchList.css';

interface MatchListProps {
  matches: Match[];
  searchQuery: string;
  selectedCategory: string;
  isLoading: boolean;
  hasSearched: boolean;
  searchTime: number;
}

const MatchList: React.FC<MatchListProps> = ({ 
  matches, 
  searchQuery, 
  selectedCategory, 
  isLoading, 
  hasSearched, 
  searchTime 
}) => {
  // Show loading state
  if (isLoading) {
    return <LoadingSpinner message="Searching matches..." />;
  }

  // Show initial state (no search performed yet)
  if (!hasSearched) {
    return (
      <div className="match-list-empty">
        <div className="empty-state">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="empty-icon"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <h3>Ready to search</h3>
          <p>
            Type something in the search box or select a category to discover interesting matches!
          </p>
        </div>
      </div>
    );
  }

  // Show no results state (search performed but no results)
  if (matches.length === 0) {
    return (
      <div className="match-list-empty">
        <div className="empty-state">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="empty-icon"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <h3>No matches found</h3>
          <p>
            No matches found for your search{searchQuery ? ` "${searchQuery}"` : ''}{selectedCategory ? ` in category "${selectedCategory}"` : ''}. Try different keywords or browse other categories.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="match-list">
      <div className="match-list-header">
        <h2>
          Found {matches.length} match{matches.length !== 1 ? 'es' : ''}
          {searchQuery && ` matching "${searchQuery}"`}
          {selectedCategory && ` in ${selectedCategory}`}
        </h2>
        {searchTime > 0 && (
          <p className="search-time">
            Search completed in {searchTime}ms
          </p>
        )}
      </div>
      <div className="match-list-container">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
