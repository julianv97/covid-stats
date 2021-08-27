const formatDate = (date) => {
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return `${year}-${month}-${day}`;
};

export default formatDate;
