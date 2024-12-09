import { DUMMY_NEWS } from '@/dummyNews';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const page = ({ params }) => {
  const { id: slug } = params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default page;
