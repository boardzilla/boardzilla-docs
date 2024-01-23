import React from 'react';
import { Board, createBoardClasses } from '@boardzilla/core';

import styles from './layout.module.css';

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
  const preRef = React.useRef()
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


      <div className={styles.code}>
        <button onClick={() =>  navigator.clipboard.writeText(preRef.current.innerText)}className={styles.copy}>Copy</button>
        <pre ref={preRef}>
          <div>space.<span className={styles.keyword}>layout</span>(Piece, &#123;</div>
          {(minRows !== undefined || maxRows !== undefined) &&
            <div className={styles.indent}>
              <span className={styles.keyword}>rows</span>: {minRows === maxRows || maxRows === 1 ? maxRows :
                <>&#123;{minRows ? <><span className={styles.keyword}>min</span>: {minRows}</> : ''}{minRows && maxRows ? ', ' : ''}{(maxRows ? <><span className={styles.keyword}>max</span>: {maxRows}</> : '')}&#125;</>
              },
            </div>
          }
          {(minColumns !== undefined || maxColumns !== undefined) &&
            <div className={styles.indent}>
              <span className={styles.keyword}>columns</span>: {minColumns === maxColumns ? minColumns :
                <>&#123;{minColumns ? <><span className={styles.keyword}>min</span>: {minColumns}</> : ''}{minColumns && maxColumns ? ', ' : ''}{maxColumns ? <><span className={styles.keyword}>max</span>: {maxColumns}</> : ''}&#125;</>
              },
            </div>
          }
          {(orthogonal && (gapX > 0 || gapY > 0)) && <div className={styles.indent}><span className={styles.keyword}>gap</span>: {gapX === gapY ? gapX : <>&#123;<span className={styles.keyword}>x</span>: {gapX}, <span className={styles.keyword}>y</span>: {gapY}&#125;</>},</div>}
          {!orthogonal && maxRows !== 1 && <div className={styles.indent}><span className={styles.keyword}>offsetRow</span>: {offsetRowX === 0 ? offsetRowY : <>&#123;<span className={styles.keyword}>x</span>: {offsetRowX}, <span className={styles.keyword}>y</span>: {offsetRowY}&#125;</>},</div>}
          {!orthogonal && maxColumns !== 1 && <div className={styles.indent}><span className={styles.keyword}>offsetColumn</span>: {offsetColumnY === 0 ? offsetColumnX : <>&#123;<span className={styles.keyword}>x</span>: {offsetColumnX}, <span className={styles.keyword}>y</span>: {offsetColumnY}&#125;</>},</div>}
          {scaling !== 'fit' && <div className={styles.indent}><span className={styles.keyword}>scaling</span>: <span className={styles.string}>'{scaling}'</span>,</div>}
          {alignment !== 'center' && <div className={styles.indent}><span className={styles.keyword}>alignment</span>: <span className={styles.string}>'{alignment}'</span>,</div>}
          {direction !== 'square' && <div className={styles.indent}><span className={styles.keyword}>direction</span>: <span className={styles.string}>'{direction}'</span>,</div>}
          {maxOverlap < 100 && <div className={styles.indent}><span className={styles.keyword}>maxOverlap</span>: {maxOverlap},</div>}
          {haphazardly > 0 && <div className={styles.indent}><span className={styles.keyword}>haphazardly</span>: {haphazardly},</div>}
          <div>&#125;);</div>
          <div>&nbsp;</div>
          <div>board.<span className={styles.keyword}>all</span>(Piece).<span className={styles.keyword}>appearance</span>(&#123;</div>
          <div className={styles.indent}><span className={styles.keyword}>aspectRatio</span>: {aspectRatioStr[aspectRatio]}</div>
          <div>&#125;);</div>
        </pre>
      </div>

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
