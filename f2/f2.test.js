const f2 = require('./f2');
const students_f2 = {
    'Sakk Klub': 1,
    'Kosárlabda Csapat': 1,
    'Röplabda Klub': 1,
    'Színjátszó Kör': 1,
    'Foci Klub': 1,
    'Kézműves Kör': 1,
    'Filmkészítő Klub': 1,
    'Énekkar': 1,
    'Futball Klub': 1,
    'Rajzkör': 1,
    'Túraklub': 1,
    'Olvasókör': 1,
    'Vívás Klub': 1,
    'Táncklub': 1,
    'Kertész Klub': 1,
    'Kézilabda Csapat': 1,
    'Matek Kör': 1,
    'Gitárklub': 1,
    'Társasjáték Klub': 1,
    'Filmklub': 1
  }
test('F2 : Club names and participant numbers', () => {
    expect(f2()).toEqual(students_f2)
})