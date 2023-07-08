
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/config";
import { doc } from "firebase/firestore";

const TitleSection = ({ user, stringId,titleInput }) => {
  const [value] = useDocument(doc(db, user.uid, stringId));

if (value) {
  console.log(value.data());
}

if (value) {
  return (
    <section className="title center">
      <h1>
        <input onChange={ async (eo) => {    // update data in firestore
        titleInput(eo)
        }}
          defaultValue={value.data().title}
          className="title-input center"
          type="text"
        />
        <i className="fa-regular fa-pen-to-square"></i>
      </h1>
    </section>
  );
}
};

export default TitleSection;
