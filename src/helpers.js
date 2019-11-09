export const ITEMS_PER_PAGE = 2;
export const splitContentIntoPages = (content, pageNumber) => {
  const endPageIndex = ITEMS_PER_PAGE * (pageNumber || 1);
  const startPageIndex = endPageIndex - ITEMS_PER_PAGE;

  return content.slice(startPageIndex, endPageIndex);
};
