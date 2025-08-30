import { Match } from '../types/Match';
import { mockMatches } from '../data/mockMatches';

// Simulate network delay
const NETWORK_DELAY = 800; // 800ms delay to simulate real API call

export interface SearchParams {
  query?: string;
  category?: string;
}

export interface ApiResponse {
  matches: Match[];
  total: number;
  searchTime: number;
}

// Simulate a network API call
export const searchMatches = async (params: SearchParams): Promise<ApiResponse> => {
  const startTime = Date.now();
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, NETWORK_DELAY));
  
  let filtered = mockMatches;
  
  // Filter by category first
  if (params.category) {
    filtered = filtered.filter(match => match.category === params.category);
  }
  
  // Then filter by search query
  if (params.query && params.query.trim()) {
    const query = params.query.toLowerCase().trim();
    filtered = filtered.filter((match) => {
      return (
        match.match.toLowerCase().includes(query) ||
        match.category.toLowerCase().includes(query) ||
        match.reference.toLowerCase().includes(query) ||
        match.id.toLowerCase().includes(query)
      );
    });
  }
  
  const searchTime = Date.now() - startTime;
  
  return {
    matches: filtered,
    total: filtered.length,
    searchTime
  };
};

// Get unique categories (this could also be a separate API call)
export const getCategories = async (): Promise<string[]> => {
  // Simulate small delay for categories
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const uniqueCategories = Array.from(new Set(mockMatches.map(match => match.category)));
  return uniqueCategories.sort();
};
