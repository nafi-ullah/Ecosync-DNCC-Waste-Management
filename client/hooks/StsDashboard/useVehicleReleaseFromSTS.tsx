import { useState } from 'react';
import {admin, landfillManager, stsManager, unassigned} from '@/data/roles';
import { setCookie, getCookie } from '@/lib/cookieFunctions';
import axios from 'axios';
import { jwtToken, role , uid , username, stsId} from '@/data/cookieNames';
import { uri } from '@/data/constant';

export default function useVehicleReleaseFromSTS() {  


  
  async function VehicleReleaseFromSTS(data: { 
    stsVehicleId: string,
    weightOfWaste: string,
    exitTime: string,
    distance: string,
    estimatedDuration: string
   }) {
    const userStsId = getCookie(stsId);
    // console.log(stsId);
     
    
    try {
      const isoString = new Date(data.exitTime).toISOString();

      const distanceWithoutUnit = parseFloat(data.distance.replace(" km", ""));
const durationWithoutUnit = parseFloat(data.estimatedDuration.replace("mins", ""));
// console.log(data.stsVehicleId);
//      console.log(data.weightOfWaste);
//      console.log(data.exitTime);
//      console.log(distanceWithoutUnit);
//      console.log(durationWithoutUnit);
      const res = await axios.post('http://localhost:8585/trips/create', {
        stsVehicleId: data.stsVehicleId,
    weightOfWaste: data.weightOfWaste,
    exitTime: isoString,
    distance: distanceWithoutUnit,
    estimatedDuration: durationWithoutUnit
    });
    //use the response from here
    console.log(res.data);

      return true;
    } catch (error: any) {
      alert(error.message?.toString() || "error logging in");
      return false;
    }
    
  }

  return {VehicleReleaseFromSTS};
}