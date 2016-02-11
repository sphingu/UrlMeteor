setTitle = (title) => {
  let base = 'MReact Project';

  if(title){
      return document.title = '${title} - ${base}';
  }
  return document.title = base;
};
