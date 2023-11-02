import React from 'react';

const Privacy = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div
        onClick={onClose}
        className="absolute inset-0 w-full h-screen flex justify-center items-center text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400 privacy font-mono p-4 overflow-auto"
      >
        <div
          className="items-center justify-center text-left md:w-[50%] h-full p-4"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h1 className="text-center font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400 title">
            Privacy Policy
          </h1>
          <div className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400">
            <h1 className="text-2xl font-bold py-4">Who we are</h1>
            <p>Our website address is: https://mathletegame.com.</p>
            <h1 className="text-2xl font-bold py-4">
              Who we share your data with
            </h1>
            <p className="text-justify">
              This website https://mathletegame.com. uses Google Analytics to
              collect data. We need this data to understand how you use our
              website so we can improve its design and functionality. We also
              need the data to get the most out of our marketing campaigns. With
              your consent, Google Analytics will process and collect your
              personal data (cookies and IP address) to give us valuable
              information. Google Analytics will transfer your data to the
              United States and store it for 26 months. To learn more about
              Google’s data transfer policies, click{' '}
              <a href="https://policies.google.com/privacy/frameworks?hl=en-US">
                <span className="font-extrabold">here</span>
              </a>
              , and for data retention click{' '}
              <a href="https://support.google.com/analytics/answer/7667196?hl=en#:~:text=User%20and%20event%20data%20retention&text=The%20maximum%20amount%20of%20time,data%20expires%20after%2026%20months.">
                <span className="font-extrabold">here</span>
              </a>
              . To see how Google uses information from sites or apps that use
              their services click{' '}
              <a href="https://policies.google.com/technologies/partner-sites">
                <span className="font-extrabold">here</span>
              </a>
            </p>
          </div>
          <div className="md:w-[25%] mx-auto">
            <button
              className="bg-gradient-to-r from-pink-600  to-purple-400 px-4 py-2 m-2 rounded-lg hover:scale-105 duration-300"
              onClick={onClose}
            >
              <div className=" "></div>
              <span className="text-2xl font-extrabold text-[#0a192f] from-pink-400 via-fuchsia-500">
                Close
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
