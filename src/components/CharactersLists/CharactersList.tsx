import Card from "../Card/Card";
import useCharactersLists from "../../hooks/useCharacter";
import React from "react";
const CharactersLists: React.FC = () => {
  const { Data, Status }: { Data: any; Status: string } = useCharactersLists();
  return (
    <>
      {Status === "loading" && <div>Loading...</div>}
      {Status === "error" && <div>Error</div>}
      {Data?.pages[0]?.results && (
        <div className="characters_container">
          <div className={Data?.pages[0]?.results ? "characters-lists" : "result"}>
            {Data?.pages[0]?.results ? (
              Data?.pages.map((group: any, i: any) => (
                <React.Fragment key={i}>
                  {group.results.map((card: any) => (
                    <div key={card.id} className="cards">
                      <Card {...card} />
                    </div>
                  ))}
                </React.Fragment>
              ))
            ) : (
              <div className="error_container">
                <h1 className="error">Character is not found!</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CharactersLists;
