import React, { useState, useRef, useEffect } from 'react'
import { Stage, Layer, Text, Transformer } from 'react-konva';


export default function TextLogo({ shapeProps, isSelected, onSelect, onChange, text, textFontSize, textColor, textRotation }) {
    const shapeRef = useRef();
    const trRef = useRef();

    const [isDragging, setIsDragging] = useState(false)
    const [x, setX] = useState(50)
    const [y, setY] = useState(50)

    console.log(textFontSize);
    useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.setNode(shapeRef.current);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <>
            <Text
                id="text-logo"
                text={text}
                x={x}
                y={y}
                fontSize={textFontSize}
                rotation={textRotation}
                draggable
                fill={isDragging ? 'red' : 'black'}
                onDragStart={() => {
                    setIsDragging(true)
                }}
                fill={textColor}
                onDragEnd={e => {
                    setIsDragging(false)
                    setX(e.target.x())
                    setY(e.target.y())
                }}
                onClick={onSelect}
                onTap={onSelect}

                onTransformEnd={e => {
                    // transformer is changing scale of the node
                    // and NOT its width or height
                    // but in the store we have only width and height
                    // to match the data better we will reset scale on transform end
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();

                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...shapeProps,
                        x: node.x(),
                        y: node.y(),
                        // set minimal value
                        width: Math.max(5, node.width() * scaleX),
                        height: Math.max(node.height() * scaleY)
                    });
                }}

            />

            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </>
    )
}
