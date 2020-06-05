import React from 'react';
import Konva from "konva";
import { Stage, Layer, Star, Text, Image } from "react-konva";

class URLImage extends React.Component {
    state = {
      image: null,
      isDragging: false,
      x: this.props.x,
      y: this.props.y,
    };
  
    handleDragStart = e => {

        this.setState({
            isDragging: true
          });
      e.target.setAttrs({
        shadowOffset: {
          x: 15,
          y: 15
        },
        scaleX: 1.1,
        scaleY: 1.1
      });
    };
  
    handleDragEnd = e => {

        this.setState({
            isDragging: false,
            x: e.target.x(),
            y: e.target.y()
          });
      e.target.to({
        duration: 0.5,
        easing: Konva.Easings.ElasticEaseOut,
        scaleX: 1,
        scaleY: 1,
        shadowOffsetX: 5,
        shadowOffsetY: 5
      });
    };
    componentDidMount() {
      this.loadImage();
    }
    componentDidUpdate(oldProps) {
      if (oldProps.src !== this.props.src) {
        this.loadImage();
      }
    }
    componentWillUnmount() {
      this.image.removeEventListener("load", this.handleLoad);
    }
    loadImage() {
      // save to "this" to remove "load" handler on unmount
      this.image = new window.Image();
      this.image.src = this.props.src;
      this.image.crossOrigin = 'Anonymous'
      this.image.addEventListener("load", this.handleLoad);
    }
    handleLoad = () => {
      // after setState react-konva will update canvas and redraw the layer
      // because "image" property is changed      
      this.setState({
        image: this.image,
      });
      // if you keep same image object during source updates
      // you will have to update layer manually:
      // this.imageNode.getLayer().batchDraw();
    };
    render() {
     
      let {imageWidth, imageHeight, ratio, x, y, image} = this.state;

      return (
        <Image
            

          onDragStart={(e) => {
            this.handleDragStart(e)
          }}
          onDragEnd={e => {
            this.handleDragEnd(e)
          }}
          draggable
          x={x}
          y={y}
          image={image}
          width={this.props.width}
          height={this.props.height}
          opacity={this.props.opacity}
          ref={node => {
            this.imageNode = node;
          }}
        />
      );
    }
  }


  export default URLImage;