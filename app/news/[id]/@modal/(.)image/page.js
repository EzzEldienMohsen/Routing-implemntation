import Modal from '@/components/Modal';
import { DUMMY_NEWS } from '@/dummyNews';
import { notFound } from 'next/navigation';
import React from 'react';

const page = ({ params }) => {
  const { id: slug } = params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <Modal />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default page;
