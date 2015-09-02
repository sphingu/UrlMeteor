/* global Links */
/* global Fixtures */
/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

if (Links.find().count() == 0) {
  console.log('seeding ...');
  Fixtures.insert(Links, 'firstLink', {
    title: Fake.word(),
    body: Fake.paragraph(5),
    color: '#343434',
    createdAt: new Date()
  });

  console.log(Fixtures.get(Links, 'firstLink'));
}
else {
  console.log('no need for seeding.')
}
