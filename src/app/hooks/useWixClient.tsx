"use client"

import { WixClientContext } from "../../context/wixContext";
import { useContext, useEffect } from "react";

export const useWixClient = () =>{

    return useContext(WixClientContext);

}