function rectangle() {
  return {
    'perimeter' : function(w, h) {
            return 2 * (Number(w) + Number(h));
                
    },
    'area': function(w, h) {
            return Number(w) * Number(h);
                
    }
      
  };

}
