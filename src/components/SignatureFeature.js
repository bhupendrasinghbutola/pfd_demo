// src/components/SignatureFeature.js
import React, { useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";

const SignatureFeature = () => {
  const sigPadRef = useRef();
  const [signatureURL, setSignatureURL] = useState(null);

  const saveSignature = () => {
    setSignatureURL(sigPadRef.current.getTrimmedCanvas().toDataURL("image/png"));
  };

  return (
    <div className="signature-feature">
      <SignaturePad ref={sigPadRef} canvasProps={{ className: "signature-pad" }} />
      <button onClick={saveSignature}>Save Signature</button>
      {signatureURL && <img src={signatureURL} alt="Saved signature" />}
    </div>
  );
};

export default SignatureFeature;