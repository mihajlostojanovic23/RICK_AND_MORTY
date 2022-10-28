import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useContext } from "react";
import DataContext from "../../context/dataContext";

export default function CharactersStatus() {
  const { status, setStatus } = useContext(DataContext);

  const set = (e: any) => {
    const target = e.target as HTMLTextAreaElement;
    setStatus(target.value);
  };
  return (
    <div className="character-status">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Character Status: {status}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          id="radio-buttons"
          sx={{ display: "flex" }}
        >
          <div className="buttons">
            <div className="any">
              <Radio value=" " onClick={set} /> <label>Any</label>
            </div>
            <div className="alive">
              <Radio value="Alive" onClick={set} /> <label>Alive</label>
            </div>
            <div className="dead">
              <Radio value="Dead" onClick={set} /> <label>Dead</label>
            </div>
            <div className="unknown">
              <Radio value="Unknown" onClick={set} /> <label>Unknown</label>
            </div>
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
}
