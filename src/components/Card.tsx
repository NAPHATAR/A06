"use client"

import React from 'react';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

interface CardProps {
  hospitalName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (newValue: number | null) => void;
}

export default function Card({ hospitalName, imgSrc, rating, onRatingChange }: CardProps) {
  return (
    <InteractiveCard>
      <div className="rounded overflow-hidden relative">
        <Image className="inset-0 w-full h-full object-cover rounded-t-lg" src={imgSrc} alt={hospitalName} width={600} height={400} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{hospitalName}</div>
          <Rating
            name={`${hospitalName} Rating`}
            value={rating}
            onChange={(event, newValue) => onRatingChange(newValue)}
            data-testid={`${hospitalName} Rating`}
            id={`${hospitalName} Rating`}
          />
        </div>
      </div>
    </InteractiveCard>
  );
}