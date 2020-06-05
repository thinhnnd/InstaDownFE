import React from 'react';
import Konva from "konva";
import { Stage, Layer, Star, Text, Image } from "react-konva";

class MainImage extends React.Component {
    state = {
      image: null,
      isDragging: false,
      x: 50,
      y: 50,
      imageWidth: 0,
      imageHeight: 100,
      ratio: 1
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
      this.image.crossOrigin = 'Anonymous';
      this.image.src = this.props.src;
      this.image.addEventListener("load", this.handleLoad);
    }
    handleLoad = () => {
      // after setState react-konva will update canvas and redraw the layer
      // because "image" property is changed     
      var max = 600;
 
      this.setState({
        image: this.image,
        imageWidth: this.image.width,
        imageHeight: this.image.height,
        ratio: (this.image.width > this.image.height ? (this.image.width / max) : (this.image.height / max))
      });
      let {imageWidth, imageHeight, ratio} = this.state;

      this.props.setStageSize(imageWidth, imageHeight, ratio)
      // if you keep same image object during source updates
      // you will have to update layer manually:
      // this.imageNode.getLayer().batchDraw();
    };
    render() {
     
      let {imageWidth, imageHeight, ratio} = this.state;

      console.table(imageWidth, imageHeight, ratio);

      return (
        <Image
          x={this.props.x}
          y={this.props.y}
          image={this.state.image}
          width={imageWidth/ratio}
          height={imageHeight/ratio}
          ref={node => {
            this.imageNode = node;
          }}
        />
      );
    }
  }


  export default MainImage;