import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './ProjectCard.module.scss';
import Modal from 'react-modal';
import DetailsContainer from './DetailsContainer';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ProjectCard({
  id,
  title,
  imageUrl,
  size,
  babyImage,
  family,
  order,
  phylum,
  Class,
}) {
  //modal start
  Modal.setAppElement('#__next');

  const router = useRouter();
  //modal end

  const linkUrl = `/project/${id}`;
  // console.log('animal', id);
  // console.log('details', details);
  return (
    <div className={`${styles[size]} ${styles.card}`}>
      <Link href={`/project/?animal=${id}`} as={`/project/${id}`}>
        <div className={styles.card_image}>
          <img src={imageUrl} alt={`Oops!暫時找不到${title}的圖片😥`} />
          <div className={styles.card_imagepopup}>
            <img src={babyImage} alt={`Oops!暫時找不到${title}的其他圖片😥`} />
          </div>
        </div>
      </Link>
      <Modal
        className={styles.modal}
        isOpen={!!router.query.animal}
        onRequestClose={() => router.push('/project')}
        style={customStyles}
      >
        <DetailsContainer
          title={title}
          imageUrl={imageUrl}
          key={id}
          family={family}
          order={order}
          phylum={phylum}
          Class={Class}
        />
      </Modal>

      <div className={styles.title_white}>
        <p className={styles.card_title}>{title}</p>
      </div>
    </div>
  );
}
