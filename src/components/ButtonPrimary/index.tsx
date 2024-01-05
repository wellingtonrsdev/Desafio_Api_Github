import { Link } from "react-router-dom";
import "./styles.css";

type Props = {
  title: string;
}

export default function ButtonPrimary({title}: Props) {
  return (
    <div className="btn-next pd-left">
      <Link to="/before" className="btn-next-page">{title} </Link>
    </div>
  );
}
