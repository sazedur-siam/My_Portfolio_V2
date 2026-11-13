// Cool-blue accent rotation from the design guide. Use these for chips, icon tiles and groups;
// never pick unrelated hues.
export const ACCENTS = [
  "#1E88E5",
  "#039BE5",
  "#00ACC1",
  "#5C6BC0",
  "#26A69A",
  "#42A5F5",
  "#0288D1",
  "#7986CB",
  "#0097A7",
  "#1976D2",
  "#4DB6AC",
  "#546E7A",
];

export const SUCCESS = "#26A69A";

export const accentAt = (index) => ACCENTS[index % ACCENTS.length];
