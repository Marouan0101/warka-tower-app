import React from 'react';
import styles from './styles/Leaderboard.module.css';
import data from '../Data/LeaderboardData';

export default function Leaderboard() {
  data.sort((a, b) =>
    a.donation < b.donation ? 1 : b.donation < a.donation ? -1 : 0
  );

  let donationTotal = 0;
  data.map((donator) => {
    return (donationTotal += donator.donation);
  });
  let placement = 0;

  return (
    <div className={styles.modal}>
      <h1 className={styles.title}>Leaderboard</h1>

      <ul className={styles.donators}>
        {data.map((donator) => {
          placement += 1;
          return (
            <li
              key={placement}
              className={`${
                placement === 1 ? styles.top_donator : styles.donator
              }`}
            >
              <div className='flex'>
                <div className={styles.placement}>{placement}</div>

                <div>
                  {donator.team && (
                    <div className={styles.team}>
                      {donator.team && `Team ${donator.team}`}
                    </div>
                  )}

                  <div className={styles.name}>
                    {donator.id === 1 ? `🎉${donator.name}🎉` : donator.name}
                  </div>

                  {donator.message && (
                    <div className={styles.message}>{donator.message}</div>
                  )}
                </div>
              </div>

              <div>
                <div className={styles.donation}>
                  {donator.id === 1
                    ? `${donator.donation} Of ${Math.trunc(
                        donationTotal
                      )} Towers`
                    : `${donator.donation} Towers`}
                </div>

                <div className={styles.date}>{donator.date}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
