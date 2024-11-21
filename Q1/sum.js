function sum(n) {
  
  const fn = (x) => {
      
      if (x === undefined) return n;
      
      
      return sum(n + x);
  };
  
  return fn;
}