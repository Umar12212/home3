const data = ["Иван", "Иванов", "Отдел разработки"];
function func(emp) {
  const [name, surname, department, ...rest] = emp;
  const position = rest.length > 0 ? rest[0] : "Junior";
  console.log(name, surname, department, position);
}
func(data);
