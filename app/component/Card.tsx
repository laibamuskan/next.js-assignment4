interface Tprops {
  name: string;
  age: number;
  rollNumber: number;
}
const Card = (props: Tprops) => {
  return (
    <div className="max-w-sm bg-blue-100 shadow-lg rounded-lg p-6 mx-auto my-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{props.name}</h2>
      <p className="text-gray-600">Age: {props.age}</p>
      <p className="text-gray-600">Roll Number: {props.rollNumber}</p>
    </div>
  );
};

export default Card;


