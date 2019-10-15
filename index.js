class Formatter {
  //add static methods here
  static capitalize(s) {
    s = s.charAt(0).toUpperCase() + s.slice(1);
    return s;
  }
  
  static sanitize(s) {
    return s.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  
  static titleize(s) {
    let words = s.split(' ');
    this.capitalize(words[0]);
    for (let i = 1; i < words.length; i++) {
      if 
    }
  }
}