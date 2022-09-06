import React, { useState } from "react";
import MultiStepForm from "../components/MultiStepForm";
import Topbar from "../components/Topbar";
import ImageUpload from "./ImageUpload";

function TestingMultiStep() {
  const [image, setImage] = useState("");
  return (
    <>
      <Topbar />
      <div className="p-5">
        <MultiStepForm defaultActiveStepId="stepOne">
          <MultiStepForm.Step id="stepOne" title="Step One">
            <ImageUpload image={image} setImage={setImage} />
          </MultiStepForm.Step>
          <MultiStepForm.Step id="stepTwo" title="Step Two">
            <div>
              <h1>Step 2</h1>
            </div>
          </MultiStepForm.Step>
          <MultiStepForm.Step id="stepThree" title="Step Three">
            <div>
              <h1>Step 3</h1>
            </div>
          </MultiStepForm.Step>
          <MultiStepForm.Step id="stepFour" title="Step Four">
            <div>
              <h1>Step 4</h1>
            </div>
          </MultiStepForm.Step>
          <MultiStepForm.Step id="stepFive" title="Step Five">
            <div>
              <h1>Step 5</h1>
            </div>
          </MultiStepForm.Step>
        </MultiStepForm>
      </div>
    </>
  );
}

export default TestingMultiStep;
