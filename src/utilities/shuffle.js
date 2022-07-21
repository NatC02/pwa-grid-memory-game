// Combine and shuffle the two arrays
const shuffle = () => {
    const assets = [
      { image: '/assets/1.png' },
      { image: '/assets/2.png' },
      { image: '/assets/3.png'},
      { image: '/assets/4.png' },
      { image: '/assets/5.png' },
      { image: '/assets/6.png' },
      { image: '/assets/7.png'},
      { image: '/assets/8.png' },
    ];
    return [...assets, ...assets] // double the array
      .sort(() => Math.random() - 0.5) // sort array on invocation
      .map((card) => ({ ...card, id: Math.random() }));
  };
  
  export default shuffle;