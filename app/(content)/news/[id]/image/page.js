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
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default page;
