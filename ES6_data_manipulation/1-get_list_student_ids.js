function getListStudents() {
  const studentsData = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return studentsData.map(({ id, firstName, location }) => ({
    id,
    firstName,
    location,
  }));
}

export default getListStudents;
