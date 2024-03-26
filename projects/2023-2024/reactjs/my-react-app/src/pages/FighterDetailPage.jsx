import { useParams } from "react-router-dom";

export default function FighterDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Fighter Details {params.name}</h1>
    </>
  );
}
