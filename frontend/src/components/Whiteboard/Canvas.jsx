/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";
import {
  Arrow,
  Circle,
  Layer,
  Line,
  Rect,
  Stage,
  Text,
  Transformer,
} from "react-konva";

export default function Canvas({
  stageRef,
  action,
  rectangles,
  setRectangles,
  circles,
  setCircles,
  arrows,
  setArrows,
  scribbles,
  setScribbles,
  strokeColor,
  isPaining,
  currentShapeId,
  transformerRef,
  isDraggable,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onClick,
}) {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [showGridLines, setShowGridLines] = useState(false);
  const gridLinesPatternRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const lineSize = 20;
    const stage = stageRef.current;
    if (stage && stage.renderer) {
      const renderer = stage.renderer;
      const gridLinesPattern = renderer.createPattern({
        width: lineSize * 2,
        height: lineSize * 2,
        stroke: "#ddd",
        strokeWidth: 0.5,
      });
      gridLinesPattern.addLine({
        x: 0,
        y: 0,
        points: [0, 0, lineSize, lineSize],
      });
      gridLinesPattern.addLine({
        x: lineSize,
        y: 0,
        points: [lineSize, 0, 0, lineSize],
      });
      gridLinesPatternRef.current = gridLinesPattern;
    }
  }, [stageRef]);

  const toggleGridLines = () => {
    setShowGridLines((prevState) => !prevState);
  };

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
    setShowGridLines(false);
  };

  const getBackgroundFill = () => {
    if (showGridLines && gridLinesPatternRef.current) {
      console.log(gridLinesPatternRef.current);
      return gridLinesPatternRef.current;
    } else {
      return backgroundColor;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 right-0 m-4 z-10">
        <button
          className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={() => changeBackgroundColor("#ffffff")}
        >
          White
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={toggleGridLines}
        >
          {showGridLines ? "Solid" : "Grid"}
        </button>
      </div>
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <Layer>
          <Rect
            x={0}
            y={0}
            height={window.innerHeight}
            width={window.innerWidth}
            fill={getBackgroundFill()}
            id="bg"
            onClick={() => {
              transformerRef.current.nodes([]);
            }}
          />

          {rectangles.map((rectangle) => (
            <Rect
              key={rectangle.id}
              x={rectangle.x}
              y={rectangle.y}
              stroke={strokeColor}
              strokeWidth={2}
              fill={rectangle.fillColor}
              height={rectangle.height}
              width={rectangle.width}
              draggable={isDraggable}
              onClick={onClick}
            />
          ))}

          {circles.map((circle) => (
            <Circle
              key={circle.id}
              radius={circle.radius}
              x={circle.x}
              y={circle.y}
              stroke={strokeColor}
              strokeWidth={2}
              fill={circle.fillColor}
              draggable={isDraggable}
              onClick={onClick}
            />
          ))}

          {arrows.map((arrow) => (
            <Arrow
              key={arrow.id}
              points={arrow.points}
              stroke={strokeColor}
              strokeWidth={2}
              fill={arrow.fillColor}
              draggable={isDraggable}
              onClick={onClick}
            />
          ))}

          {scribbles.map((scribble) => (
            <Line
              key={scribble.id}
              lineCap="round"
              lineJoin="round"
              points={scribble.points}
              stroke={strokeColor}
              strokeWidth={2}
              fill={scribble.fillColor}
              draggable={isDraggable}
              onClick={onClick}
            />
          ))}

          <Transformer ref={transformerRef} />
        </Layer>
      </Stage>
    </div>
  );
}
