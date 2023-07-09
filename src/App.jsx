import Tile from "./Tile";
import "./App.css";

function App() {
  return (
    <main className="monopoly-game">
      {/* <section className="monopoly-cover"></section> */}
      <section className="game-board">
        {/* top row */}
        <Tile data-board-block-id="freeparking" className="parking"></Tile>
        <Tile data-board-block-id="kentuckyave" className="house"></Tile>
        <Tile data-board-block-id="chance" className="house"></Tile>
        <Tile data-board-block-id="indianaave" className="house"></Tile>
        <Tile data-board-block-id="illinoisave" className="house"></Tile>
        <Tile data-board-block-id="borailroad" className="house"></Tile>
        <Tile data-board-block-id="atlanticave" className="house"></Tile>
        <Tile data-board-block-id="ventnorave" className="house"></Tile>
        <Tile data-board-block-id="waterworks" className="house"></Tile>
        <Tile data-board-block-id="marvingardens" className="house"></Tile>
        <Tile data-board-block-id="gotojail" className="jail"></Tile>

        {/* middle rows (start) */}
        <Tile data-board-block-id="newyorkave" className="house"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile data-board-block-id="pacificave" className="house"></Tile>

        <Tile data-board-block-id="tennesseeave" className="house"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile data-board-block-id="northcarolinaave" className="house"></Tile>

        <Tile data-board-block-id="communitychest" className="house"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile data-board-block-id="communitychest" className="house"></Tile>

        <Tile data-board-block-id="stjamesplace" className="house"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile data-board-block-id="pennsylvaniaave" className="house"></Tile>

        <Tile
          data-board-block-id="pennsylvaniarailroad"
          className="house"
        ></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile data-board-block-id="shortlinerailroad" className="house"></Tile>

        <Tile data-board-block-id="virginiaave" className="house"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile data-board-block-id="chance" className="house"></Tile>

        <Tile data-board-block-id="statesave" className="house"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile data-board-block-id="parkplace" className="house"></Tile>

        <Tile data-board-block-id="electriccompany" className="house"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile data-board-block-id="luxerytax" className="house"></Tile>

        <Tile data-board-block-id="stcharlesplace" className="house"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile className="jumbo"></Tile>
        <Tile data-board-block-id="boardwalk" className="house"></Tile>
        {/* middle rows (end) */}

        {/* bottom row */}
        <Tile data-board-block-id="jail" className="jail"></Tile>
        <Tile data-board-block-id="connecticutave" className="house"></Tile>
        <Tile data-board-block-id="vermontave" className="house"></Tile>
        <Tile data-board-block-id="chance" className="house"></Tile>
        <Tile data-board-block-id="orientalave" className="house"></Tile>
        <Tile data-board-block-id="readingrailroad" className="house"></Tile>
        <Tile data-board-block-id="incometax" className="house"></Tile>
        <Tile data-board-block-id="balticave" className="house"></Tile>
        <Tile data-board-block-id="community-chest" className="house"></Tile>
        <Tile data-board-block-id="mediterraneanave" className="house"></Tile>
        <Tile data-board-block-id="go" className="go"></Tile>
      </section>
    </main>
  );
}

export default App;
