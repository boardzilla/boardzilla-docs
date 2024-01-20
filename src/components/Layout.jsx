import React from 'react';
import { Board, createBoardClasses } from '@boardzilla/core';

import styles from './layout.module.css';

const Layout = () => {
  const [pieces, setPieces] = React.useState(4);
  const [gapX, setGapX] = React.useState(10);
  const [gapY, setGapY] = React.useState(0);
  const [aspectRatio, setAspectRatio] = React.useState(7);
  const [scaling, setScaling] = React.useState('fit');
  const [alignment, setAlignment] = React.useState('center');

  const board = React.useMemo(() => {
    const {Space, Piece, GameElement} = createBoardClasses();
    const board = new Board({ classRegistry: [Space, Piece, GameElement] });
    return board;
  }, [Board]);

  const aspectRatioStr = ['1 / 4', '1 / 3', '1 / 2', '3 / 5', '2 / 3', '3 / 4', '4 / 5', '1', '5 / 4', '4 / 3', '3 / 2', '5 / 3', '2 / 1', '3 / 1', '4 / 1'];

  React.useMemo(() => {
    const {Piece} = createBoardClasses();

    board.resetUI();
    Piece.aspectRatio = aspectRatio;
    board.layout(Piece, {
      margin: 0,
      gap: {x: gapX, y: gapY},
      aspectRatio: eval(aspectRatioStr[aspectRatio]),
      scaling,
      alignment,
    });

    if (pieces > board._t.children.length) {
      board.createMany(pieces - board._t.children.length, Piece, 'a');
    }
    if (pieces < board._t.children.length) {
      board.lastN(board._t.children.length - pieces, Piece).remove();
    }
    board.applyLayouts();

  }, [board, gapX, gapY, pieces, aspectRatio, scaling, alignment]);

  return (
    <div>
      <div>
        <div>
          # of pieces: <input type="number" min={0} value={pieces} onChange={e => setPieces(parseInt(e.target.value))}/>
        </div>
        <div>
          gap:
          <div>
            X: <input type="range" min={0} max={50} step={0.5} value={gapX} onChange={e => setGapX(parseFloat(e.target.value))}/> {gapX}%
            Y: <input type="range" min={0} max={50} step={0.5} value={gapY} onChange={e => setGapY(parseFloat(e.target.value))}/> {gapY}%
          </div>
        </div>
        <div>
          aspect ratio: <input type="range" min={0} max={14} value={aspectRatio} onChange={e => setAspectRatio(parseFloat(e.target.value))}/> {aspectRatioStr[aspectRatio]}
        </div>
        <div>
          scaling:
          <input type="button" className={scaling === 'fit' && styles.selected} onClick={() => setScaling('fit')} value="fit" />
          <input type="button" className={scaling === 'fill' && styles.selected} onClick={() => setScaling('fill')} value="fill" />
        </div>
        <div>
          alignment:
          <select onChange={e => setAlignment(e.target.value)} value={alignment}>
            <option>center</option>
            <option>top</option>
            <option>bottom</option>
            <option>left</option>
            <option>right</option>
            <option>top left</option>
            <option>bottom left</option>
            <option>top right</option>
            <option>bottom right</option>
          </select>
        </div>
      </div>
      <div className={styles.main}>
        {board._t.children.map(c => (
          <div
            key={c._t.id}
            className={styles.piece}
            style={{
              left: `${c._ui.computedStyle?.left}%`,
              top: `${c._ui.computedStyle?.top}%`,
              width: `${c._ui.computedStyle?.width}%`,
              height: `${c._ui.computedStyle?.height}%`,
            }}
          >{c._t.id - 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
