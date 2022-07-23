// Combine and shuffle the two arrays
const shuffle = () => {
  const assets = [
    { image: '/assets/css.png' },
    { image: '/assets/html5.png' },
    { image: '/assets/jquery.png'},
    { image: '/assets/js.png' },
    { image: '/assets/next.png' },
    { image: '/assets/node.png' },
    { image: '/assets/react.png'},
    { image: '/assets/ts.png' },
  ];
    return [...assets, ...assets] // double the array
      .sort(() => Math.random() - 0.5) // sort array on invocation
      .map((card) => ({ ...card, id: Math.random() }));
  };
  
  export default shuffle;