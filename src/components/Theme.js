import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import DashboardIcon from "@material-ui/icons/Dashboard";

function Theme(props) {
  const { closePopup } = props;
  const [color, showColor] = useState(false);

  const handlePopup = () => {
    closePopup();
  };

  const handleDark = () => {
    let x = document.getElementsByTagName("BODY")[0];
    x.classList.toggle("dark-mode");
  }

  const handleGlass = () => {
    let x = document.getElementsByTagName("BODY")[0];
    x.classList.toggle("glass-mode");
  }

  const handleColors = () => {
    showColor(true);
  }
  return (
    <div className="popup">
      <div className="popupOverlay" onClick={() => handlePopup()}></div>

      <div className="popup_inner">
        <div className="popup-header">
          Choose theme
          <span className="close-icon" onClick={() => handlePopup()}>
            <CloseIcon />
          </span>
        </div>
        <div className="body">
          <div className="box">
            <div className="dark-theme btn" onClick={handleDark}>
              <Brightness4Icon />
              <div className="theme">Dark</div>
            </div>
          </div>

          <div className="box">
            <div className="main-theme btn" onClick={handleColors}>
              <ColorLensIcon />
              <div className="theme">Color</div>
            </div>
          </div>

          <div className="box">
            <div className="glass-theme btn" onClick={handleGlass}>
              <DashboardIcon />
              <div className="theme">Glass</div>
            </div>
          </div>

          {
            color ?
              <>
              <h3 className="font-bold text-sm mr-3">Default Theme Switcher</h3>
              <div className="flex">
                <span className="cursor-pointer w-10 h-10 inline-block rounded-full mr-4" data-bg-color="#b84130" data-color="#ffffff" style={{backgroundColor: "#b84130"}}>&nbsp;</span>
                <span className="cursor-pointer w-10 h-10 inline-block rounded-full mr-4" data-bg-color="#363d98" data-color="#ffffff" style={{backgroundColor: "#363d98"}}>&nbsp;</span>
                <span className="cursor-pointer w-10 h-10 inline-block rounded-full" data-bg-color="#FFD5CD" data-color="#333333" style={{backgroundColor: "#FFD5CD"}}>&nbsp;</span>
              </div>

              <h3 className="font-bold mr-4 text-sm">Dynamic Color</h3>
              <div className="flex items-center">
                <div className="flex items-center mr-3">
                  <label className="text-sm mr-2">Background:</label>
                  <input className="cursor-pointer h-10 outline-none rounded-full w-10 input-color-picker" type="color" data-id="bg-color" name="Background" />
                </div>
                <div className="flex items-center">
                  <label className="text-sm mr-2">Color:</label>
                  <input className="cursor-pointer h-10 outline-none rounded-full w-10 input-color-picker" type="color" data-id="color" name="Color" />
                </div>
              </div> 
              </>: null
          }
        </div>
      </div>
    </div>
  );
}
export default Theme;
