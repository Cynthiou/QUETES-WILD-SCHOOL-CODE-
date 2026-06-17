interface EmployeeCardProps {
  employee: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      medium: string;
    };
  };
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  return (
    <>
      <img src={employee.picture.medium} alt={employee.name.last} />
      <h2>
        {employee.name.first} {employee.name.last}
      </h2>
      <p>{employee.email}</p>
    </>
  );
};

export default EmployeeCard;
