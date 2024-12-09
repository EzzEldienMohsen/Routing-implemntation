import Link from 'next/link';
import React from 'react';

const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/news/${item.slug}`}>
              <img src={`/images/news/${item.image}`} alt={item.title} />
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;