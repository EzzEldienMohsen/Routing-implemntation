import NewsList from '@/components/NewsList';
import { getAllNews } from '@/lib/news';
import React from 'react';

const page = async () => {
  const news = await getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />;{' '}
    </>
  );
};

export default page;

// Fetching data in server component
// import NewsList from '@/components/NewsList';
// import React from 'react';

// const page = async () => {
//   const response = await fetch('http://localhost:8080/news');
//   if (!response.ok) {
//     throw new Error('Failed to fetch news.');
//   }
//   const news = await response.json();

//   return (
//     <>
//       <h1>News Page</h1>
//       <NewsList news={news} />;{' '}
//     </>
//   );
// };

// export default page;

// client side FETCHING Data
// 'use client';
// import NewsList from '@/components/NewsList';
// import React from 'react';

// const page = () => {
//   const [error, setError] = React.useState();
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [news, setNews] = React.useState();
//   React.useEffect(() => {
//     const fetchNews = async () => {
//       setIsLoading(true);
//       const response = await fetch('http://localhost:8080/news');
//       if (!response.ok) {
//         setError('Failed to fetch news.');
//         setIsLoading(false);
//       }
//       const data = await response.json();
//       setIsLoading(false);
//       setNews(data);
//     };
//     fetchNews();
//   }, []);
//   if (isLoading) {
//     return <p>Loading...</p>;
//   }
//   if (error) {
//     return <p>{error}</p>;
//   }
//   let newsContent;
//   if (news) {
//     newsContent = <NewsList news={news} />;
//   }
//   return (
//     <>
//       <h1>News Page</h1>
//       {newsContent}
//     </>
//   );
// };

// export default page;
