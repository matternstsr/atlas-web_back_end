function getListStudentIds(studentArray) {
  if (!Array.isArray(studentArray)) {
    return [];
  }
  return studentArray.map(({ id }) => id);
}
export default getListStudentIds;
