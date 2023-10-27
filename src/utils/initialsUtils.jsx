
const generateInitials = (author) => {
    if (!author) return ''; // Handle the case when author is undefined or empty
    const initials = author?.slice(0, 1) + author?.charAt(Math.floor(author?.length / 2));
    return initials;
  };
  
  export default generateInitials;