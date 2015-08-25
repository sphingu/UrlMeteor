/* global Fixtures */
// fixtures using moonco:fixtures package


Fixtures.insert(Links, 'firstLink', {
  name: 'My First Link',
  createdAt: new Date()
});

console.log(Fixtures.get(Links, 'firstLink'));
