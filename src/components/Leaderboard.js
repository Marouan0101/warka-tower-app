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

  return (
    <div className={styles.modal}>
      <h1 className={styles.title}>Leaderboard</h1>

      <ul className={styles.donators}>
        {data.map((donator) => {
          return (
            <li key={donator.id} className={styles.donator}>
              <div className={styles.left}>
                <div className={styles.donator_placement}>{donator.id}</div>

                <div>
                  <div className={styles.donator_team}>
                    {donator.team && `Team ${donator.team}`}
                  </div>

                  <div className={styles.donator_name}>
                    {donator.id === 1 ? `🎉${donator.name}🎉` : donator.name}
                  </div>

                  <div className={styles.donator_message}>
                    {donator.message}
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.donator_donation}>
                  {donator.id === 1
                    ? `${donator.donation} Of ${Math.trunc(
                        donationTotal
                      )} Towers`
                    : `${donator.donation} Towers`}
                </div>

                <div className={styles.donator_date}>{donator.date}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
