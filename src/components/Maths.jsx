import React, { useEffect, useState, useRef } from 'react';
import click from '../assets/click.wav';
import gameover from '../assets/gameover.wav';
import buzzer from '../assets/buzzer.mp3';
import bell from '../assets/bell.mp3';
import soundtrack from '../assets/soundtrack.mp3';

export const Maths = () => {
  const [sum, setSum] = useState({ question: '', answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [resultType, setResultType] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false);

  const gameMusic = useRef(new Audio(soundtrack));

  // handle countdown

  useEffect(() => {
    if (isCountingDown) {
      if (countdown > 0) {
        const timer = setTimeout(() => {
          setCountdown(countdown - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else if (countdown === 0) {
        setGameStarted(true);
        generateSum();
        setCountdownFinished(true);
      }
    }
  }, [isCountingDown, countdown]);

  function startCountdown() {
    setIsCountingDown(true);
    bgMusic();
    clickedSound();
  }

  // handle sound effects

  function clickedSound() {
    new Audio(click).play();
  }

  function incorrect() {
    new Audio(buzzer).play();
  }

  function correct() {
    new Audio(bell).play();
  }

  function gameOverMusic() {
    new Audio(gameover).play();
  }

  function bgMusic() {
    gameMusic.current.pause();
    gameMusic.current.currentTime = 0;
    gameMusic.current.loop = true;
    gameMusic.current.play();
  }

  useEffect(() => {
    if (timeRemaining === 0) {
      gameMusic.current.pause();
      gameOverMusic();
    }
  }, [timeRemaining]);

  // handle timer and calculate result type by score

  useEffect(() => {
    let timer;
    if (!gameStarted) {
      setTimeRemaining(60);
    } else if (timeRemaining > 0 && gameStarted && !gameOver) {
      if (score <= 10) {
        timer = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 1000);
      } else if (score <= 20) {
        timer = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 700);
      } else if (score <= 30) {
        timer = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 500);
      } else if (score <= 40) {
        timer = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 400);
      } else if (score <= 50) {
        timer = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 300);
      } else if (score <= 80) {
        timer = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 200);
      } else if (score <= 90) {
        timer = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 100);
      } else if (score <= 100) {
        timer = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 100);
      } else {
        timer = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 100);
      }
    } else {
      clearInterval(timer);
      setGameOver(true);
      if (score <= 49) {
        setResultType('Slow');
      } else if (score <= 79) {
        setResultType('Average');
      } else if (score <= 89) {
        setResultType('Fast');
      } else if (score <= 99) {
        setResultType('Superfast');
      } else if (score <= 100) {
        setResultType('Mathlete');
      }
    }
    return () => clearInterval(timer);
  }, [timeRemaining, gameStarted, gameOver, score]);

  // handle sum generation

  function generateSum() {
    const operand1 = Math.floor(Math.random() * 10);
    const operand2 = Math.floor(Math.random() * 10);
    const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const question = `${operand1} ${operator} ${operand2}`;

    let answer;
    switch (operator) {
      case '+':
        answer = operand1 + operand2;
        break;
      case '-':
        answer = operand1 - operand2;
        break;
      case '*':
        answer = operand1 * operand2;
        break;
      default:
        answer = null;
        break;
    }

    setSum({ question, answer });
  }

  // handle user answer, time/score bonus and time/score penalty

  function handleAnswerSubmit(e) {
    e.preventDefault();
    if (parseInt(userAnswer) === sum.answer) {
      correct();
      setTimeRemaining(timeRemaining + 5);
      setScore(score + 1);
      if (score <= 49) {
        setResultType('Slow');
      } else if (score <= 79) {
        setResultType('Average');
      } else if (score <= 89) {
        setResultType('Fast');
      } else if (score <= 99) {
        setResultType('Superfast');
      } else if (score <= 100) {
        setResultType('Mathlete');
      }
    } else {
      incorrect();
      setTimeRemaining(timeRemaining - 5);
      if (score - 1 < 0) {
        setScore(0);
      } else {
        setScore(score - 1);
        if (score <= 49) {
          setResultType('Slow');
        } else if (score <= 79) {
          setResultType('Average');
        } else if (score <= 89) {
          setResultType('Fast');
        } else if (score <= 99) {
          setResultType('Superfast');
        } else if (score <= 100) {
          setResultType('Mathlete');
        }
      }
    }
    generateSum();
    setUserAnswer('');
    clickedSound();
    if (score >= 100 || timeRemaining === 0) {
      setGameOver(true);
    }
  }

  // handle result text colour

  function getColorByResultType(resultType) {
    switch (resultType) {
      case 'Slow':
        return '#ef4444';
      case 'Average':
        return '#facc15';
      case 'Fast':
        return '#a3e635';
      case 'Superfast':
        return '#2dd4bf';
      case 'Mathlete':
        return '#22d3ee';
      default:
        return '#22d3ee';
    }
  }

  // handle restart

  function restartGame() {
    setSum({
      question: '',
      answer: 0,
    });
    setUserAnswer('');
    setScore(0);
    setGameOver(false);
    setTimeRemaining(60);
    setGameStarted(false);
    setResultType('');
    setCountdown(5);
    setIsCountingDown(false);
    setCountdownFinished(false);
    clickedSound();
  }

  // return game UI

  return (
    <div>
      {!gameOver && (
        <div name="game" className="w-full h-screen bg-[#0a192f] text-pink-500">
          <div className="flex justify-center text-5xl pt-6 text-transparent bg-clip-text bg-gradient-to-b from-pink-600 via-pink-600 to-purple-400">
            <h1>Mathlete</h1>
          </div>
          <div className="md:flex justify-evenly md:text-2xl pt-4 text-center">
            <div className="md:flex justify-center text-center p-2">
              <p className="mb-2 text-transparent bg-clip-text bg-gradient-to-b from-pink-600  to-purple-400">
                Score: <span className="text-cyan-400">{score}</span>
              </p>
              <p className="flex px-4">
                <img
                  className="w-14"
                  src={require('../assets/brain.png')}
                  alt="brain"
                />
                :
                <span style={{ color: getColorByResultType(resultType) }}>
                  {resultType}
                </span>
              </p>
            </div>
            <p className="p-2 text-transparent bg-clip-text bg-gradient-to-b from-pink-600  to-purple-400">
              Timer:
              <span className="text-cyan-400"> {timeRemaining} </span>
              seconds
            </p>
          </div>
          <div className="top-10 w-[400px] mx-auto flex flex-col justify-center items-center rounded-lg p-4 text-pink-500 bg-gradient-to-b from-blue-500 to-purple-400">
            <div className="w-80 h-60 flex flex-col justify-center items-center text-5xl bg-[#0a192f] text-pink-500 rounded">
              {sum.question}
              {isCountingDown && !countdownFinished && <p>{countdown}</p>}
            </div>
            <form
              className="flex flex-col justify-center items-center"
              onSubmit={handleAnswerSubmit}
            >
              <label
                className="p-2 text-transparent bg-clip-text bg-gradient-to-b from-pink-800  to-blue-400"
                htmlFor="answer"
              >
                Your answer:
              </label>
              <input
                className="bg-cyan-400 m-3 mt-1 rounded text-[#0a192f] w-[150px] h-20 text-5xl text-center placeholder-pink-500 placeholder-opacity-40"
                type="number"
                id="answer"
                autoComplete="off"
                placeholder="23"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
            </form>

            <div className="flex justify-center items-center">
              {!isCountingDown && !countdownFinished && (
                <button
                  className="bg-[#0a192f] px-4 py-2 m-2 rounded-lg hover:scale-105 duration-300"
                  onClick={startCountdown}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-pink-600  to-purple-400">
                    Start
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {gameOver && (
        <div className="w-full h-screen flex flex-col justify-center items-center text-center p-4 bg-[#0a192f] text-gray-300 md:text-4xl">
          <p className="mb-4">
            Your score: <span className="text-pink-500">{score}</span>
          </p>
          <p className="mb-4 flex justify-center items-center">
            <img
              className="w-14"
              src={require('../assets/brain.png')}
              alt="brain"
            />
            :{' '}
            <span style={{ color: getColorByResultType(resultType) }}>
              {resultType}
            </span>{' '}
          </p>
          <div className="mt-4">
            <button
              className="bg-teal-400 px-4 py-2 m-2 text-[#0a192f] text-xl rounded-lg"
              onClick={restartGame}
            >
              Restart game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
