import { useState, CSSProperties } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const override: CSSProperties = {
  display: "block",
  margin: "20% auto",
 
};

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
    
    <MoonLoader color="#FF0101"  size={150} cssOverride={override} />
    </div>
  );
}

export default Loading;