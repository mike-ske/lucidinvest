'use client';

import { useEffect, useState } from 'react';
import FullHeightWrapper from '@/components/elements/FullHeightWrapper';

// Countdown hook
const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

export default function ComingSoon() {
  const countdown = useCountdown(new Date('2026-03-18T00:00:00'));

  return (
    <FullHeightWrapper className="coming-soon-page-style1 full-height">
        <div className="coming-soon-page-style1__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/coming-soon-page-style1-bg.jpg)', }} ></div>
        <div className="coming-soon-page-style1__content">
            <div className="inner">
                <div className="big-title">We're Coming Soon...</div>

                <div className="timer-box clearfix">
                    <div className="countdown-timer">
                        <div className="default-coundown">
                            <div className="box">
                                <ul className="countdown time-countdown-two">
                                    <li>
                                        <div className="box">
                                            <span className="days">{countdown.days}</span>
                                            <span className="timeRef">Days</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="box">
                                            <span className="hours">{countdown.hours}</span>
                                            <span className="timeRef clr-1">Hours</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="box">
                                            <span className="minutes">{countdown.minutes}</span>
                                            <span className="timeRef clr-2">Minutes</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="box">
                                            <span className="seconds">{countdown.seconds}</span>
                                            <span className="timeRef clr-3">Seconds</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text">
                    <p>
                    Website is under construction. We'll be here soon with new
                    <br />
                    awesome site, Subscribe to be notified.
                    </p>
                </div>

                <div className="subscribe-box-style1">
                    <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            placeholder="Enter your email address"
                            type="email"
                            required
                        />
                        <button type="submit">Submit now</button>
                    </form>
                </div>
            </div>
        </div>
    </FullHeightWrapper>
  );
}
