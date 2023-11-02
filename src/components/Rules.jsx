import React from 'react';

export const Rules = () => {
  return (
    <div name="rules" className="w-full h-full bg-[#0a192f] text-blue-500">
      <div className="flex flex-col justify-center items-center w-[100%] h-full">
        <div className="max-width-[1000px] mt-8">
          <p className="text-4xl pb-8">
            <span className="font-bold about text-transparent bg-clip-text bg-gradient-to-b from-pink-600 via-pink-600 to-purple-400">
              How to Play
            </span>
          </p>
        </div>
        <div className="grid space-y-4 justify-center items-center text-center max-w-[50%] w-full">
          <p className="text-justify mx-auto">
            <ol>
              <p>1. Press Start to begin the game</p>
              <p>2. Wait for the countdown to finish</p>
              <p>3. The sums will appear on the screen</p>
              <p>4. Type your answer in the blue box</p>
              <p>5. Press return</p>
            </ol>
          </p>
          <p className="mx-auto text-transparent bg-clip-text bg-gradient-to-b from-pink-600 via-pink-600 to-purple-400 text-center text-2xl">
            Scoring
          </p>
          <p className="text-justify mx-auto">
            <ol>
              <p>
                1. Correct answer:{' '}
                <span className="text-[#a3e635]">+1 point</span>
              </p>
              <p>
                2. Correct answer:{' '}
                <span className="text-[#a3e635]">+5 seconds</span>
              </p>
              <p>
                3. Incorrect answer:{' '}
                <span className="text-[#ef4444]">-1 point</span>
              </p>
              <p>
                4. Incorrect answer:{' '}
                <span className="text-[#ef4444]">-5 seconds</span>
              </p>
            </ol>
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-b from-pink-600 via-pink-600 to-purple-400 text-2xl">
            Timer
          </p>
          <p className="text-justify mx-auto tracking-tighter">
            As the score increases the timer speeds up. This behaviour
            increments the difficulty level in the game and forces the player to
            answer sums quicker and with more accuracy. A true{' '}
            <span className="text-[#22d3ee]">Mathlete</span> should be able to
            achieve a score of <span className="text-[#a3e635]">100</span>{' '}
            points with zero mistakes.
          </p>
          <p className="grid space-y-4 justify-center items-center text-center w-full">
            <p className="mx-auto text-transparent bg-clip-text bg-gradient-to-b from-pink-600 via-pink-600 to-purple-400 text-center text-2xl">
              Performance Ratings
            </p>
            <p className="text-justify mx-auto tracking-tighter">
              A player's performance is rated by how quickly they can correctly
              answer sums within the time limit. The below ratings are from
              fastest to slowest.
            </p>
            <p className="text-justify mx-auto">
              <ol>
                <p>
                  {' '}
                  <span className="text-[#22d3ee]">Mathlete</span>
                </p>
                <p>
                  {' '}
                  <span className="text-[#2dd4bf]">Superfast</span>
                </p>
                <p>
                  {' '}
                  <span className="text-[#a3e635]">Fast</span>
                </p>
                <p>
                  {' '}
                  <span className="text-[#facc15]">Average</span>
                </p>
                <p>
                  <span className="text-[#ef4444]">Slow</span>
                </p>
              </ol>
            </p>
          </p>

          <p className="text-justify text-xs disclaimer">
            <span className="font-bold">Disclaimer:</span> ArcadiusGames has
            worked to ensure the accuracy of the information it provides through
            its products and services. ArcadiusGames cannot gurauntee the
            accuracy of the information provided or any analysis based thereon.
            This app is released 'as is' - without any warranty, responsibility
            or liability. ArcadiusGames and its creator do not take any
            responsibility for anything you do while using this application or
            for the information provided by this application nor anything you do
            with the information provided by this application.
          </p>
          <p className="text-justify text-xs disclaimer">
            Credit to https://www.FesliyanStudios.com for the background music.
          </p>
        </div>
      </div>
    </div>
  );
};
