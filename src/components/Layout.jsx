import React from 'react';
import { Board, createBoardClasses } from '@boardzilla/core';

import styles from './layout.module.css';
import CodeBlock from '@theme/CodeBlock';

const Layout = () => {
  const [pieces, setPieces] = React.useState(4);
  const [orthogonal, setOrthogonal] = React.useState(true);
  const [gapX, setGapX] = React.useState(10);
  const [gapY, setGapY] = React.useState(0);
  const [offsetRowX, setOffsetRowX] = React.useState(0);
  const [offsetRowY, setOffsetRowY] = React.useState(100);
  const [offsetColumnX, setOffsetColumnX] = React.useState(100);
  const [offsetColumnY, setOffsetColumnY] = React.useState(0);
  const [aspectRatio, setAspectRatio] = React.useState(7);
  const [scaling, setScaling] = React.useState('fit');
  const [alignment, setAlignment] = React.useState('center');
  const [direction, setDirection] = React.useState('square');
  const [minRows, setMinRows] = React.useState(undefined);
  const [maxRows, setMaxRows] = React.useState(undefined);
  const [minColumns, setMinColumns] = React.useState(undefined);
  const [maxColumns, setMaxColumns] = React.useState(undefined);
  const [maxOverlap, setMaxOverlap] = React.useState(100);
  const [haphazardly, setHaphazardly] = React.useState(0);

  const board = React.useMemo(() => {
    const {Space, Piece, GameElement} = createBoardClasses();
    const board = new Board({ classRegistry: [Space, Piece, GameElement] });
    return board;
  }, [Board]);

  const aspectRatioStr = ['1 / 4', '1 / 3', '1 / 2', '3 / 5', '2 / 3', '3 / 4', '4 / 5', '1', '5 / 4', '4 / 3', '3 / 2', '5 / 3', '2 / 1', '3 / 1', '4 / 1'];
  const [codeSample, setCodeSample] = React.useState("")

  React.useMemo(() => {
    const {Piece} = createBoardClasses();

    board.resetUI();
    Piece.aspectRatio = aspectRatio;
    board.layout(Piece, Object.assign({
      margin: 0,
      scaling,
      alignment,
      direction,
      haphazardly: haphazardly || undefined,
      maxOverlap,
      rows: {min: minRows, max: maxRows},
      columns: {min: minColumns, max: maxColumns},
    }, orthogonal ? {
      gap: { x: gapX, y: gapY },
    } : {
      offsetRow: { x: offsetRowX, y: offsetRowY },
      offsetColumn: { x: offsetColumnX, y: offsetColumnY },
    }));

    if (pieces > board._t.children.length) {
      board.createMany(pieces - board._t.children.length, Piece, 'a');
    }
    if (pieces < board._t.children.length) {
      board.lastN(board._t.children.length - pieces, Piece).remove();
    }

    board.all(Piece).appearance({ aspectRatio: eval(aspectRatioStr[aspectRatio]) });

    board.applyLayouts();

  }, [board, orthogonal, gapX, gapY, offsetColumnX, offsetColumnY, offsetRowX, offsetRowY, pieces, aspectRatio, scaling, alignment, direction, minRows, maxRows, minColumns, maxColumns, maxOverlap, haphazardly]);

  React.useEffect(() => {
    const lines = ["space.layout(Piece, {"]
    if (minRows !== undefined || maxRows !== undefined) {
      lines.push("  rows: " + (minRows === maxRows ? minRows : '{' + (minRows ? `min: ${minRows}` : '') + (minRows && maxRows ? ', ' : '') + (maxRows ? `max: ${maxRows}` : '') + '}') + ",")
    }
    if (minColumns !== undefined || maxColumns !== undefined) {
      lines.push("  columns: " + (minColumns === maxColumns ? minColumns : '{' + (minColumns ? `min: ${minColumns}` : '') + (minColumns && maxColumns ? ', ' : '') + (maxColumns ? `max: ${maxColumns}` : '') + '}') + ",")
    }
    if (orthogonal && (gapX > 0 || gapY > 0)) {
      lines.push(`  gap: ${gapX === gapY ? gapX : `{x: ${gapX}, y: ${gapY}}`},`)
    }
    if (!orthogonal) {
      lines.push(`  offsetRow: ${offsetRowX === 0 ? offsetRowY : `{x: ${offsetRowX}, y: ${offsetRowY}}`},`)
      lines.push(`  offsetColumn: ${offsetColumnY === 0 ? offsetColumnX : `{x: ${offsetColumnX}, y: ${offsetColumnY}}`},`)
    }
    if (scaling !== "fit") {
      lines.push(`  scaling: '${scaling}',`)
    }
    if (alignment !== 'center') {
      lines.push(`  alignment: '${alignment}',`)
    }
    if (direction !== 'square') {
      lines.push(`  direction: '${direction}',`)
    }
    if (maxOverlap < 100) {
      lines.push(`  maxOverlap: ${maxOverlap},`)
    }
    if (haphazardly > 0) {
      lines.push(`  haphazardly: ${haphazardly},`)
    }
    lines.push("})")
    lines.push("")
    lines.push("board.all(Piece).appearance({")
    lines.push(`  aspectRatio: ${aspectRatioStr[aspectRatio]}`)
    lines.push("})")
    setCodeSample(lines.join("\n"))
  }, [minRows, maxRows, minColumns, maxColumns, orthogonal, gapX, gapY, scaling, alignment, direction, maxOverlap, haphazardly, aspectRatioStr, aspectRatio ])

  return (
    <div className={styles['layout-playground']}>
      <div className={styles['parameter-controls']}>
        <div className={styles.label}># of pieces</div>
        <div className={styles.value}>
          <input type="number" min={1} value={pieces} onChange={e => setPieces(parseInt(Math.max(1, e.target.value)))}/>
        </div>
        <div className={styles.label}>
          rows<div className={styles.helper}>leave blank for no limit</div>
        </div>
        <div className={styles.value}>
          <div>
            min: <input type="number" min={1} value={minRows ?? ''} onChange={e => setMinRows(e.target.value.length ? parseInt(e.target.value) : undefined)}/><br/>
            max: <input type="number" min={1} value={maxRows ?? ''} onChange={e => setMaxRows(e.target.value.length ? parseInt(e.target.value) : undefined)}/>
          </div>
        </div>
        <div className={styles.label}>
          columns<div className={styles.helper}>leave blank for no limit</div>
        </div>
        <div className={styles.value}>
          <div>
            min: <input type="number" min={1} value={minColumns ?? ''} onChange={e => setMinColumns(e.target.value.length ? parseInt(e.target.value) : undefined)}/><br/>
            max: <input type="number" min={1} value={maxColumns ?? ''} onChange={e => setMaxColumns(e.target.value.length ? parseInt(e.target.value) : undefined)}/>
          </div>
        </div>
        <div className={styles.label}>spacing</div>
        <div className={styles.value}>
          <input type="button" className={orthogonal ? styles.selected : ''} onClick={() => setOrthogonal(true)} value="gap" />
          <input type="button" className={!orthogonal ? styles.selected : ''} onClick={() => setOrthogonal(false)} value="offsets" />
        </div>
        {orthogonal ?
          <>
            <div className={styles.label}>gap<div className={styles.helper}>gap size is absolute to board size</div></div>
            <div className={styles.value}>
              <div className={styles.xyrange}>
                <div>X: <nobr><input type="range" min={0} max={50} step={0.5} value={gapX} onChange={e => setGapX(parseFloat(e.target.value))}/> {gapX}%</nobr></div>
                Y: <input orient="vertical" className={styles.vertical} type="range" min={0} max={50} step={0.5} value={gapY} onChange={e => setGapY(parseFloat(e.target.value))}/> {gapY}%
              </div>
            </div>
          </>
          :
          <>
            <div className={styles.label}>offsets<div className={styles.helper}>offsets are relative % and needed for hex grids</div></div>
            <div className={styles.value}>
              {maxRows !== 1 &&
                <div className={styles.xyrange}>
                  <div>row.x: <nobr><input type="range" min={-100} max={100} value={offsetRowX} onChange={e => setOffsetRowX(parseInt(e.target.value))}/> {offsetRowX}%</nobr></div>
                  row.y: <input type="range" orient="vertical" className={styles.vertical} min={0} max={200} value={offsetRowY} onChange={e => setOffsetRowY(parseInt(e.target.value))}/> {offsetRowY}%
                </div>
              }
              {maxColumns !== 1 &&
                <div className={styles.xyrange}>
                  <div>column.x: <nobr><input type="range" min={0} max={200} value={offsetColumnX} onChange={e => setOffsetColumnX(parseInt(e.target.value))}/> {offsetColumnX}%</nobr></div>
                  column.y: <input type="range" orient="vertical" className={styles.vertical} min={-100} max={100} value={offsetColumnY} onChange={e => setOffsetColumnY(parseInt(e.target.value))}/> {offsetColumnY}%
                </div>
              }
            </div>
          </>
        }
        <div className={styles.label}>aspect ratio</div>
        <div className={styles.value}>
          <input type="range" min={0} max={14} value={aspectRatio} onChange={e => setAspectRatio(parseFloat(e.target.value))}/> {aspectRatioStr[aspectRatio]}
        </div>
        <div className={styles.label}>scaling</div>
        <div className={styles.value}>
          <input type="button" className={scaling === 'fit' ? styles.selected : ''} onClick={() => setScaling('fit')} value="fit" />
          <input type="button" className={scaling === 'fill' ? styles.selected : ''} onClick={() => setScaling('fill')} value="fill" />
        </div>
        <div className={styles.label}>alignment</div>
        <div className={styles.value}>
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
        <div className={styles.label}>direction</div>
        <div className={styles.value}>
          <select onChange={e => setDirection(e.target.value)} value={direction}>
            <option>square</option>
            <option>ltr</option>
            <option>rtl</option>
            <option>rtl-btt</option>
            <option>ltr-btt</option>
            <option>ttb</option>
            <option>ttb-rtl</option>
            <option>btt</option>
            <option>btt-rtl</option>
          </select>
        </div>
        <div className={styles.label}>max overlap</div>
        <div className={styles.value}>
          <input type="range" min={0} max={100} value={maxOverlap} onChange={e => setMaxOverlap(parseInt(e.target.value))}/> {maxOverlap}%
        </div>
        <div className={styles.label}>haphazardly</div>
        <div className={styles.value}>
          <input type="range" step={0.1} min={0} max={2} value={haphazardly} onChange={e => setHaphazardly(parseFloat(e.target.value))}/> {haphazardly || ''}
        </div>
        <div className={styles.label}>example presets</div>
        <div className={styles.value}>
          <input type="button" onClick={() => {setOrthogonal(true); setMinRows(undefined); setMaxRows(undefined); setMinColumns(undefined); setMaxColumns(undefined); setScaling('fit'); setHaphazardly(0); setGapX(0); setGapY(0); setDirection('square')}} value="grid" />
          <input type="button" onClick={() => {setOrthogonal(false); setMinRows(undefined); setMaxRows(undefined); setMinColumns(undefined); setMaxColumns(undefined); setScaling('fit'); setHaphazardly(0); setOffsetColumnX(100); setOffsetColumnY(0); setOffsetRowX(-50); setOffsetRowY(100); setDirection('square')}} value="hex" />
          <input type="button" onClick={() => {setOrthogonal(false); setMaxRows(1); setMinRows(undefined); setMinColumns(undefined); setMaxColumns(undefined); setScaling('fit'); setHaphazardly(0); setOffsetColumnX(5); setOffsetColumnY(5); setOffsetRowX(0); setOffsetRowY(0); setDirection('ltr')}} value="stack" />
        </div>
      </div>


      <CodeBlock className="language-js">{codeSample}</CodeBlock>

      <div className={styles.main}>
        <div className={styles.canvas}>
          {board._t.children.filter(c => c._ui.computedStyle).map((c, i) => (
            <div
              key={c._t.id}
              className={styles.piece}
              style={{
                left: `${c._ui.computedStyle?.left}%`,
                top: `${c._ui.computedStyle?.top}%`,
                width: `${c._ui.computedStyle?.width}%`,
                height: `${c._ui.computedStyle?.height}%`,
              }}
            >Piece {i + 1}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
