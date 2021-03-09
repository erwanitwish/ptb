import { List } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Liste() {
  const [Error, setError] = useState();
  const [Lieux, setLieux] = useState([]);
  const [Infos, setInfos] = useState([]);

  useEffect(() => {
    const getLieux = async () => {
      try {
        const lieuxList = await axios.get("http://localhost:8080/lieux");
        setLieux(lieuxList.data);
        console.log({ Lieux });
      } catch (err) {
        setError(err);
      }
    };

    getLieux();
  }, []);

  return (
    <div>
      {Lieux.map((lieu) => {
        return <p>{lieu.nom}</p>;
      })}
    </div>
  );
}
