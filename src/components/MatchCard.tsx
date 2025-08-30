import React from 'react';
import { Match } from '../types/Match';
import './MatchCard.css';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'History': '#ef4444',
      'Biology': '#10b981',
      'Physics': '#3b82f6',
      'Chemistry': '#f59e0b',
      'Mathematics': '#8b5cf6',
      'default': '#64748b'
    };
    return colors[category] || colors.default;
  };

  return (
    <div className="match-card">
      <div className="match-header">
        <span 
          className="match-category"
          style={{ backgroundColor: getCategoryColor(match.category) }}
        >
          {match.category}
        </span>
        <span className="match-id">#{match.id}</span>
      </div>
      <div className="match-content">
        <a href={ match.reference } target="_blank" rel="noopener noreferrer"><p className="match-text">{match.match}</p></a>
      </div>

     
    </div>
  );
};

export default MatchCard;
