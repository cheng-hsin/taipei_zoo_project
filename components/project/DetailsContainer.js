import styles from './DetailsContainer.module.scss';
// import Card from './Card';
import { useState } from 'react';
// import ReactPaginate from 'react-paginate';

export default function DetailsContainer({
  family,
  order,
  phylum,
  Class,
  title,
  imageUrl,
}) {
  return (
    <>
      <div className={styles.homepage}>
        <h1 className={styles.title}>🐆{title}小檔案🐅</h1>
        <div className={styles.menuContainer_menu}>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Niconne&display=swap'
            rel='stylesheet'
          ></link>
          <img src={imageUrl} alt='' />
          <div className={styles.cardContainer}>
            <table className={styles['rwd-table']}>
              <tr>
                <th>門(Phylum)</th>
                <th>綱(Class)</th>
                <th>目(Order)</th>
                <th>科(Family)</th>
              </tr>
              <tr>
                <td data-th='Movie Title'>{phylum}</td>
                <td data-th='Genre'>{Class}</td>
                <td data-th='Year'>{order}</td>
                <td data-th='Gross'>{family}</td>
              </tr>
            </table>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
