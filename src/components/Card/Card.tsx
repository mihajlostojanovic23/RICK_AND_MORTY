// Type
interface IProps {
  id: number;
  name: string;
  status: string;
  image: string;
  count: number;
}

const Card = ({ name, status, image }: IProps) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="image">
          <img src={image} alt="" />
          <div className="overlay">
            <p>Status: {status}</p>
          </div>
        </div>
        <h2 className="name">{name}</h2>
      </div>
    </div>
  );
};

export default Card;
