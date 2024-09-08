"use client"

import React, { useReducer, useState, useEffect } from 'react';
import Card from './Card';

type HospitalRatings = Map<string, number>;

type Action = 
  | { type: 'SET_RATING', hospitalName: string, rating: number }
  | { type: 'REMOVE_FROM_LIST', hospitalName: string };

const initialHospitals = [
  'Chulalongkorn Hospital',
  'Rajavithi Hospital',
  'Thammasat University Hospital'
];

const initialState: HospitalRatings = new Map(initialHospitals.map(hospital => [hospital, 0]));

function ratingsReducer(state: HospitalRatings, action: Action): HospitalRatings {
  switch (action.type) {
    case 'SET_RATING':
      return new Map(state).set(action.hospitalName, action.rating);
    case 'REMOVE_FROM_LIST':
      return state;
    default:
      return state;
  }
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, initialState);
  const [displayedHospitals, setDisplayedHospitals] = useState(initialHospitals);
  const [listSize, setListSize] = useState(initialHospitals.length);

  useEffect(() => {
    setListSize(displayedHospitals.length);
  }, [displayedHospitals]);

  const handleRatingChange = (hospitalName: string, newValue: number | null) => {
    if (newValue !== null) {
      dispatch({ type: 'SET_RATING', hospitalName, rating: newValue });
      if (!displayedHospitals.includes(hospitalName)) {
        setDisplayedHospitals(prev => [...prev, hospitalName]);
      }
    }
  };

  const handleRemoveFromList = (hospitalName: string) => {
    dispatch({ type: 'REMOVE_FROM_LIST', hospitalName });
    setDisplayedHospitals(prev => prev.filter(hospital => hospital !== hospitalName));
  };

  const getImageSrc = (hospitalName: string) => {
    const imageName = hospitalName.toLowerCase().split(' ')[0];
    return `/img/${imageName}.jpg`;
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialHospitals.map((hospitalName) => (
          <Card 
            key={hospitalName}
            hospitalName={hospitalName}
            imgSrc={getImageSrc(hospitalName)}
            rating={ratings.get(hospitalName) || 0}
            onRatingChange={(newValue) => handleRatingChange(hospitalName, newValue)}
          />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Hospital List with Ratings: {listSize}</h2>
        <ul>
          {displayedHospitals.map((hospitalName) => (
            <li 
              key={hospitalName}
              data-testid={hospitalName}
              onClick={() => handleRemoveFromList(hospitalName)}
              className="cursor-pointer hover:bg-gray-100 p-2"
            >
              {hospitalName} Rating: {ratings.get(hospitalName) || 0}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}