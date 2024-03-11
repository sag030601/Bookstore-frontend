import React from "react";
import FictionContent from "../utils/FictionContent"
import NonFictionContent from "../utils/NonFictionContent"
import MystreyContent from "../utils/MystreyContent"
import SciFiContent from "../utils/SciFiContent"
import SelfHelpContent from "../utils/SelfHelpContent"
import ThrillerContent from "../utils/ThrillerContent"

function TabContent({ activeGenre }) {
  return (
    <div>
      {activeGenre === "Fiction" && <FictionContent activeGenre={activeGenre} />}
      {activeGenre === "Non-Fiction" && <NonFictionContent  activeGenre={activeGenre}  />}
      {activeGenre === "Mystrey" && <MystreyContent  activeGenre={activeGenre}  />}
      {activeGenre === "Sci-Fi" && <SciFiContent  activeGenre={activeGenre}  />}
      {activeGenre === "Self-Help" && <SelfHelpContent  activeGenre={activeGenre}  />}
      {activeGenre === "Thriller" && <ThrillerContent  activeGenre={activeGenre}  />}
    </div>
  );
}

export default TabContent;
