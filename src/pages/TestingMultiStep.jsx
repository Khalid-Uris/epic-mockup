import React from "react";
import MultiStepForm from "../components/MultiStepForm";

function TestingMultiStep() {
  return (
    <div className="p-5">
      <MultiStepForm defaultActiveStepId="stepOne">
        <MultiStepForm.Step id="stepOne" title="Step One">
          <div>
            <h1>Step 1</h1>
          </div>
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
      </MultiStepForm>
    </div>
  );
}

export default TestingMultiStep;
