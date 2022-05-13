import React from "react";
import { EyeClosed, ToiletPaper, Stamp } from "phosphor-react";
const CardSection = () => {
  return (
    <section className="grey-800 flex align-center justify-center">
      <div className="content mx-l">
        <h1 className="txt-gradient-700 font-xxxl mb-xxxl">Easy to use</h1>
        <div className="card-container flex-h gap-xxl">
          <div className="card p-xl rounded-l flex-v gap-l shadow-m bg-grey-50">
            <EyeClosed size={32} />
            <h4 className="font-xl">Powerful, easy to use software.</h4>
            <p>
              Our text message marketing software is cutting edge. It's rich
              with features, easy to use and works wonderfully on all your
              devices.
            </p>
          </div>
          <div className="card p-xl rounded-l flex-v gap-l shadow-m bg-grey-50">
            <ToiletPaper size={32} />
            <h4 className="font-xl">Powerful, easy to use software.</h4>
            <p>
              Our text message marketing software is cutting edge. It's rich
              with features, easy to use and works wonderfully on all your
              devices.
            </p>
          </div>
          <div className="card p-xl rounded-l flex-v gap-l shadow-m bg-grey-50">
            <Stamp size={32} />
            <h4 className="font-xl">Powerful, easy to use software.</h4>
            <p>
              Our text message marketing software is cutting edge. It's rich
              with features, easy to use and works wonderfully on all your
              devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
