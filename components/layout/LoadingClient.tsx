"use client"

import Loading from "@/app/loading";
import { useEffect, useState } from "react";

export default function LoadingClient() {
    // splash loading
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        // Simulate loading for 1.5 seconds
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
      }, []);
    
      if(loading){
        return <Loading/>
      }
}
