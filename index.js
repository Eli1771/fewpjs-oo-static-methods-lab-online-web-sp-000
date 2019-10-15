class Formatter {
  //add static methods here
  static capitalize(s) {
    s = s.charAt(0).toUpperCase() + s.slice(1);
    return s;
  }
  
  static sanitize(s) {
    s = s.replace(/[^a-zA-z]/, '');
  }
}