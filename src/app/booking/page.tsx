'use client'; 

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import DateReserve from '../../components/DateReserve';

export default function BookingPage() {
  return (
    <div className="container mx-auto">
      <div className="bg-gray-100 rounded-md shadow-lg pb-8 w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 pt-8 mb-8">
          Vaccine Booking
        </h1>
        <form noValidate autoComplete="off" className="px-8">
          <TextField 
            name="Name-Lastname" 
            label="Name-Lastname" 
            variant="standard" 
            fullWidth 
            margin="normal"
          />
          <TextField 
            name="Citizen ID" 
            label="Citizen ID" 
            variant="standard" 
            fullWidth 
            margin="normal"
          />
          <FormControl variant="standard" fullWidth margin="normal">
            <InputLabel id="hospital-label">Select Hospital</InputLabel>
            <Select
              labelId="hospital-label"
              id="hospital"
              label="Select Hospital"
            >
              <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
              <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
              <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>
          </FormControl>
          <div className="mt-8">
            <DateReserve />
          </div>
          <div className="mt-8 flex justify-center">
            <Button 
              variant="contained" 
              color="primary" 
              name="Book Vaccine"
            >
              Book Vaccine
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
