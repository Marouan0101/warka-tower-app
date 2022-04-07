import React from 'react';
import styles from './styles/Leaderboard.module.css';

export default function Leaderboard() {
  const data = [
    {
      id: 15,
      name: 'Linn Janko',
      email: 'ljanko0@exblog.jp',
      donation: 5.72,
      date: '3.4.2021',
      message: 'harness strategic users',
      team: 'Dabtype',
    },
    {
      id: 17,
      name: 'Brynna Sapsford',
      email: 'bsapsford1@hud.gov',
      donation: 4.33,
      date: '15.11.2020',
      message: 'integrate interactive communities',
      team: null,
    },
    {
      id: 16,
      name: 'Galvin Ormiston',
      email: 'gormiston2@opensource.org',
      donation: 5.33,
      date: '4.11.2019',
      message: 'enable plug-and-play ROI',
      team: null,
    },
    {
      id: 13,
      name: 'Arnuad Sheasby',
      email: 'asheasby3@skyrock.com',
      donation: 6.81,
      date: '19.7.2019',
      message: 'visualize bleeding-edge interfaces',
      team: null,
    },
    {
      id: 20,
      name: 'Mirella Swanson',
      email: 'mswanson4@g.co',
      donation: 0.84,
      date: '16.5.2020',
      message: 'recontextualize bleeding-edge action-items',
      team: null,
    },
    {
      id: 12,
      name: 'Doralyn Cox',
      email: 'dcox5@simplemachines.org',
      donation: 7.11,
      date: '10.2.2022',
      message: null,
      team: 'Innojam',
    },
    {
      id: 10,
      name: 'Candis Englefield',
      email: 'cenglefield6@reverbnation.com',
      donation: 10.11,
      date: '27.9.2019',
      message: 'reinvent innovative convergence',
      team: null,
    },
    {
      id: 19,
      name: 'Gustavus Colleford',
      email: 'gcolleford7@parallels.com',
      donation: 1.28,
      date: '12.3.2020',
      message: null,
      team: null,
    },
    {
      id: 18,
      name: 'Carce Placido',
      email: 'cplacido8@usa.gov',
      donation: 1.71,
      date: '17.6.2021',
      message: null,
      team: null,
    },
    {
      id: 11,
      name: 'Travis Gromley',
      email: 'tgromley9@wisc.edu',
      donation: 8.21,
      date: '10.8.2020',
      message: 'streamline efficient technologies',
      team: null,
    },
    {
      id: 14,
      name: 'Deva Bridat',
      email: 'dbridata@fda.gov',
      donation: 6.36,
      date: '26.3.2020',
      message: null,
      team: 'Dabtype',
    },
    {
      id: 5,
      name: 'Matthieu Imeson',
      email: 'mimesonb@dot.gov',
      donation: 12.79,
      date: '24.12.2020',
      message: null,
      team: null,
    },
    {
      id: 4,
      name: 'Eirena Easson',
      email: 'eeassonc@meetup.com',
      donation: 14.72,
      date: '10.4.2019',
      message: 'integrate end-to-end deliverables',
      team: null,
    },
    {
      id: 1,
      name: 'Silva Iwaszkiewicz',
      email: 'siwaszkiewiczd@alibaba.com',
      donation: 18.99,
      date: '20.2.2021',
      message: null,
      team: 'Devshare',
    },
    {
      id: 8,
      name: 'Nady Brumhead',
      email: 'nbrumheade@technorati.com',
      donation: 10.47,
      date: '4.1.2021',
      message: 'unleash wireless synergies',
      team: null,
    },
    {
      id: 7,
      name: 'Stefan Jobb',
      email: 'sjobbf@webmd.com',
      donation: 11.16,
      date: '7.11.2019',
      message: 'deploy clicks-and-mortar ROI',
      team: null,
    },
    {
      id: 2,
      name: 'Jeffrey Willshere',
      email: 'jwillshereg@yahoo.com',
      donation: 16.26,
      date: '1.7.2019',
      message: 'incubate customized mindshare',
      team: null,
    },
    {
      id: 6,
      name: 'Edy Wisden',
      email: 'ewisdenh@craigslist.org',
      donation: 11.69,
      date: '17.1.2020',
      message: 'disintermediate out-of-the-box action-items',
      team: null,
    },
    {
      id: 9,
      name: 'Ginnie Gisburne',
      email: 'ggisburnei@zdnet.com',
      donation: 10.36,
      date: '31.5.2020',
      message: 'benchmark collaborative eyeballs',
      team: null,
    },
    {
      id: 3,
      name: 'Cherey Acosta',
      email: 'cacostaj@comsenz.com',
      donation: 15.87,
      date: '2.9.2020',
      message: null,
      team: 'Jayo',
    },
  ];

  data.sort((a, b) =>
    a.donation < b.donation ? 1 : b.donation < a.donation ? -1 : 0
  );

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
                  <div className={styles.donator_team}>{donator.team}</div>
                  <div className={styles.donator_name}>{donator.name}</div>
                  <div className={styles.donator_message}>
                    {donator.message}
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.donator_donation}>
                  {donator.donation} Towers
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
