"use client"
  
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Booker() {
  
    
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"30min"});
            cal("ui", {
                "cssVarsPerTheme":{
                    "light":{"cal-brand":"#292929"},
                    "dark":{"cal-brand":"#292929"}
                },
                "hideEventTypeDetails":true,
                "layout":"month_view"
            });
        })();
      }, [])

  return <Cal namespace="30min"
    calLink="digitrustmedia/meeting"
    style={{width:"80%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view"}}
  />;
};
  