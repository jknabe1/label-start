import React from 'react';

const Page: React.FC = () => {
    return (
        <div>
            <div>
            <header className="flex w-full">
      <div className="flex flex-1 items-center justify-center bg-black text-white">
        <h1 className="text-6xl font-bold">SUBMIT</h1>
      </div>
      <div className="w-[2px] bg-gray-200" />
      <div className="flex flex-1 items-center justify-center p-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4">WELCOME TO OUR OFFICIAL SUBMISSION PROCESS</h2>
          <p className="text-sm">
            If you’d like to have your music featured on COLORS LISTEN page, please fill out the form below with the
            relevant information, links and contact details. All submissions will be considered to be featured on the
            LISTEN page of our website, so please provide a public link to music that you are happy being shared
            publicly.
          </p>
          <p className="text-sm mt-4">
            Please note that due to the high amount of submissions we receive we’re only able to respond to submissions
            of interest, and so there’s no need to submit multiple entries for the same artist.
          </p>
        </div>
      </div>
    </header>
            </div>
        </div>
    );
};

export default Page;