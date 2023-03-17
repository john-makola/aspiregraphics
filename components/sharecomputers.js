import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

const ShareComputers = () => {
  return (
    <div>
            
      <FacebookShareButton
        url={"http://aspiregraphics.co.ke/softwaredev"}
        quote={"Software Dev!"}
        hashtag="#WebApps_Dev"
      >
                
        <FacebookIcon size={32} round />
              
      </FacebookShareButton>
          
    </div>
  );
};

export default ShareComputers;
