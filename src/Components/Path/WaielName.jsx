import React, { Fragment } from "react";
import useHostname from "@/Components/Provider/HostnameProvider";

const WaielName = ({ step = 0 }) => {
  const originalUrl = useHostname();
  
  return (
    <Fragment>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
      `}</style>
      
      {/* Desktop layout - match header width exactly */}
      <div className="hidden sm:block w-full">
        <div 
          className={
            "w-full transition-all duration-500 container mx-auto " + 
            (step > 3 ? "" : "translate-y-[20rem] opacity-0")
          }
        >
          <div className="flex justify-between items-center w-full">
            <div className="text-[#1A1A1A] text-9xl md:text-[120px] lg:text-[150px] xl:text-[180px] whitespace-nowrap font-['Inter'] font-medium">
              WAIEL
            </div>
            
            <div className="text-[#1A1A1A] text-9xl md:text-[120px] lg:text-[150px] xl:text-[180px] whitespace-nowrap font-['Inter'] font-medium">
              AL
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout - match header container exactly */}
      <div className="block sm:hidden w-full">
        <div 
          className={
            "w-full px-2 transition-all duration-500 " +
            (step > 3 ? "" : "translate-y-[15rem] opacity-0")
          }
        >
          <div className="flex items-center w-full">
            <div className="text-[#1A1A1A] text-7xl whitespace-nowrap font-['Inter'] font-medium">
              WAIEL
            </div>
            <div style={{ flexGrow: 1, minWidth: '2rem' }} />
            <div className="text-[#1A1A1A] text-7xl whitespace-nowrap font-['Inter'] font-medium">
              AL
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WaielName; 