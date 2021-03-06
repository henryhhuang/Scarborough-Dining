import React, { Component, Fragment } from 'react';
import * as Validation from '../../utilities/validation';

export default class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filename: 'Choose File'
        }
    }

    onFileInputChange = e => {
        const file = e.target.files[0];
        const filename = file ? file.name : 'Choose File';
        this.setState({
            filename: filename
        });
        if (Validation.isImageFile(file) || Validation.isVideoFile(file)) {
            this.props.onFileUpload(e);
        }
    }

    onFileInputDelete = e => {
        this.setState({
            filename: 'Choose File'
        });
        this.props.onFileDelete(e);
    }

    render() {
        return (
            <Fragment>
                <div style={{zIndex: 0}} className='custom-file mt-4'>
                    <input type='file' className='custom-file-input' id='customFile' accept={this.props.acceptedFiles} onChange={this.onFileInputChange}/>
                    <label className='custom-file-label' htmlFor='customFile'>
                        {this.state.filename}
                    </label>
                </div>
                <input type='submit' onClick={this.onFileInputDelete} value='Delete File' className='bg-danger btn btn-primary mt-1'/>
            </Fragment>
        );
    }
}