import { useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectContainer.module.scss';
import ReactPaginate from 'react-paginate';

export default function ProjectContainer({ animals }) {
  //paginate start//
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 9;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayProducts = animals.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const pageCount = Math.ceil(animals.length / itemsPerPage);

  //paginate end//

  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>🐆台北市立動物園 動物資料🐅</h1>
      <div className={styles.menuContainer_menu}>
        {displayProducts.map(
          ({
            Name_Ch: title,
            A_Pic04_URL: imageUrl,
            id,
            A_Pic02_URL: babyImage,
            A_Family: family,
            A_Order: order,
            A_Phylum: phylum,
            A_Class: Class,
          }) => (
            <ProjectCard
              key={id}
              id={id}
              title={title}
              imageUrl={imageUrl}
              babyImage={babyImage}
              family={family}
              order={order}
              phylum={phylum}
              Class={Class}
              size='small'
            />
          )
        )}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.paginationBttns}
        previousClassName={styles.previousBttn}
        nextLinkClassName={styles.nextBttn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
    </div>
  );
}
