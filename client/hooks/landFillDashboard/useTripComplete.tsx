import { useState } from 'react';
import {admin, landfillManager, stsManager, unassigned} from '@/data/roles';
import { setCookie, getCookie } from '@/lib/cookieFunctions';
import axios from 'axios';
import { jwtToken, role , uid , username, stsId} from '@/data/cookieNames';
import { uri } from '@/data/constant';

export default function useTripComplete() {  


  
  async function TripComplete(data: { 
    tripId: string,
    weightOfWaste: string,
    entryTime: string,
    
   }) {
    const userStsId = getCookie(stsId);
    // console.log(stsId);
     
    
    try {
      const isoString = new Date(data.entryTime).toISOString();

      const weightWithoutUnit = parseFloat(data.weightOfWaste.replace(" tons", ""));
// console.log(data.stsVehicleId);
//      console.log(data.weightOfWaste);
//      console.log(data.exitTime);
//      console.log(distanceWithoutUnit);
//      console.log(durationWithoutUnit);
      const res = await axios.post('http://localhost:8585/trips/complete', {
        tripId: data.tripId,
        weightOfWaste: weightWithoutUnit,
        entryTime: isoString,
    });
    //use the response from here
    console.log(res.data);

      return true;
    } catch (error: any) {
      alert(error.message?.toString() || "error logging in");
      return false;
    }
    
  }

  return {TripComplete};
}