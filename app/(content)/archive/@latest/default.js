// it is used if you have a parallel route but cant find the page
// nested in one of theme (meaning it gives u the 404 error) usee this page
// incase of using this file you can REMOVE the *page.js* file

//  i will try and remove the page.js file and rely on this file

import NewsList from '@/components/NewsList';
import { getLatestNews } from '@/lib/news';
import React from 'react';
const news = getLatestNews();
const page = () => {
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
};

export default page;
