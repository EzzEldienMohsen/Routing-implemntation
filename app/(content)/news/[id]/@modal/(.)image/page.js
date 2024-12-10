import Modal from '@/components/Modal';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';
import React from 'react';

const page = async ({ params }) => {
  const { id: slug } = params;
  const newsItem = await getNewsItem(slug);
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
