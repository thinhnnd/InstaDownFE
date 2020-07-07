import React, { Component } from 'react'
import { Stage, Layer, Star, Text, Image, Transformer } from "react-konva";
import MainImage from './WaterMarkEditor/MainImage';
import TextLogo from './WaterMarkEditor/TextLogo';
import URLImage from './WaterMarkEditor/LogoImage';
import { SketchPicker, ChromePicker, PhotoshopPicker, HuePicker, AlphaPicker } from 'react-color'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

class ImageWaterMark extends Component {

    state = {
        selectedId: null,
        stageWidth: 800,
        stageHeight: 450,
        textInput: 'Instadown',
        logoUrl: '',
        selectedShapeName: '',
        textFontSize: 30,
        textColor: 'yellow',
        textRotation: 0,
        imageLogoHeight: 100,
        imageLogoWidth: 100,
        imageLogoOpacity: 1,
        value: 10
    }

    setStageSize = (width, height, ratio) => {
        this.setState({
            stageWidth: width / ratio,
            stageHeight: height / ratio,
        })
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleFileInputChange = e => {
        var URL = window.webkitURL || window.URL;
        let logoUrl = URL.createObjectURL(e.target.files[0]);
        this.setState({
            logoUrl: logoUrl
        })
    }

    downloadURI = (uri, name) => {
        let link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    handleDownloadButton = () => {
        var dataURL = this.stageNode.getStage().toDataURL();
        this.downloadURI(dataURL, 'image.jpg');
    }

    handleChangeComplete = (color, event) => {
        let { rgb } = color
        let rgbaColor = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;

        this.setState({ textColor: rgbaColor });
    };

    handleRemoveLogoImage() {
        // if (this.state.logoUrl.length != 0) {
            
        // }

        this.setState({
            logoUrl: ''
        })
        this.fileInput.value = "";
    }

    render() {
        const { stageWidth, stageHeight, textInput, textFontSize, textColor, imageLogoHeight, imageLogoWidth, imageLogoOpacity, textRotation, logoUrl } = this.state;
        return (
            <div className="layout" >

                <div
                    id="canvas-container"
                >
                    <Stage ref={node => {
                        this.container = node;
                        this.stageNode = node;
                    }}
                        style={{
                            margin: '0 auto',
                            border: "1px solid grey",
                            backgroundColor: 'grey'
                        }}
                        width={stageWidth} height={stageHeight}
                    >
                        <Layer style={{
                            margin: '0 auto',
                        }}>
                            <MainImage setStageSize={(width, height, ratio) => this.setStageSize(width, height, ratio)} src={this.props.mainImageUrl} />
                            <TextLogo textColor={textColor} textRotation={textRotation} textFontSize={textFontSize} text={textInput} />
                            { logoUrl.length !=  0 ? <URLImage opacity={imageLogoOpacity}
                                name="image-logo"
                                draggable
                                rotation={Math.random() * 180}
                                shadowColor="black"
                                shadowBlur={10}
                                x={stageWidth / 2}
                                y={stageHeight / 2}
                                shadowOpacity={0.6}
                                width={imageLogoWidth}
                                height={imageLogoHeight}
                                src={this.state.logoUrl} /> : null }
                        </Layer>
                    </Stage>
                </div>
                <div className="container">
                    <div className="watermark-controller mt-2 row">
                        <div className="col-6">
                            <h5> Text Controller </h5>
                            <div className="row">
                                <div className="col-6">
                                    <label for="textInput">
                                        <b>Text:</b>
                                        <input id="textInput" name="textInput" value={textInput} onChange={e => this.handleTextChange(e)} />
                                    </label>
                                    <form className="form mt-2" style={{ maxWidth: '250px' }}>
                                        <div>
                                            Rotation:
                                    <InputRange
                                                className=" mt-2"
                                                maxValue={360}
                                                minValue={-360}
                                                value={textRotation}
                                                onChange={textRotation => this.setState({ textRotation })} />
                                        </div>
                                        <div className="mt-3">
                                            Font size:
                                            <InputRange
                                                className="mt-3"
                                                minValue={0}
                                                maxValue={100}
                                                value={textFontSize}
                                                onChange={textFontSize => this.setState({ textFontSize })} />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-6">
                                    <SketchPicker color={textColor} onChange={this.handleChangeComplete} />
                                </div>
                            </div>


                        </div>
                        <div className="col-6">
                            <h5>Image Controller</h5>
                            <div className="row">
                                <div className="col-6">
                                    <input type="file" id="file_input" onChange={e => this.handleFileInputChange(e)} ref={ref=> this.fileInput = ref} />
                                    <div>
                                        <span>Logo Width:</span>
                                        <div className="mt-3">
                                            <InputRange
                                                maxValue={250}
                                                minValue={0}
                                                value={imageLogoWidth}
                                                onChange={imageLogoWidth => this.setState({ imageLogoWidth })} />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <span>Logo Height:</span>
                                        <div className="mt-3">
                                            <InputRange
                                                className="mt-5"
                                                maxValue={250}
                                                minValue={0}
                                                value={imageLogoHeight}
                                                onChange={imageLogoHeight => this.setState({ imageLogoHeight })} />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <span>opacity (0-1)</span>
                                        <div className="mt-3">
                                            <InputRange
                                                step={0.1}
                                                maxValue={1}
                                                minValue={0}
                                                value={imageLogoOpacity}
                                                onChange={imageLogoOpacity => this.setState({ imageLogoOpacity })} />
                                        </div>
                                        <div>
                                            <input type="button" className="btn btn-danger btn-fullwith" value="export" onClick={() => this.handleDownloadButton()} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button onClick={() => this.handleRemoveLogoImage()}>Remove Image</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default ImageWaterMark;