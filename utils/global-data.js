export const getGlobalData = () => {
  const name = 'Emre Özcan';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Under Construction';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '2022 - Emre Özcan';

  return {
    name,
    blogTitle,
    footerText,
  };
};
