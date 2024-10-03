const f2 = require('./f2');
const students_f2 = {
  'Sakk Klub': 4,
  'Kosárlabda Csapat': 4,
  'Táncklub': 4,
  'Foci Klub': 1,
  'Énekkar': 1,
  'Túraklub': 1,
  'Olvasókör': 1,
  'Vívás Klub': 1,
  'Kézilabda Csapat': 1,
  'Gitárklub': 1,
  'Társasjáték Klub': 1
}
test('F2 : Club names and participant numbers', () => {
    expect(f2()).toEqual(students_f2)
})