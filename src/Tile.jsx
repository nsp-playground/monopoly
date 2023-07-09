/* eslint-disable react/prop-types */

export default function Tile(props) {
  const isJumboTile = props.className && props.className.includes("jumbo");

  const onTileClick = (e) => {
    // e.preventDefault();
    const tileId = e?.target?.dataset?.boardBlockId;
    if (!tileId) return;
    console.log({ tileId });
  };

  return (
    <button
      {...props}
      type="button"
      className={`block ${props.className || ""} `}
      disabled={isJumboTile}
      onClick={(e) => onTileClick(e)}
    ></button>
  );
}
