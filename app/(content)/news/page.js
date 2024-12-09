import NewsList from '@/components/NewsList';
import { DUMMY_NEWS } from '@/dummyNews';
import React from 'react';

const page = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default page;
