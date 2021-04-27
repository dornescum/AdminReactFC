import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, InputGroupAddon, InputGroupText, Input, CustomInput } from 'reactstrap';
// React Slider
// import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css';
// Color picker
// import { ChromePicker, SketchPicker, BlockPicker, TwitterPicker  } from 'react-color'
// React Select
// import Select from 'react-select';
// Masked Input
// import MaskedInput from 'react-maskedinput'
// DateTimePicker
// import Datetime from 'react-datetime';
// import 'react-datetime/css/react-datetime.css';
// React Draft Wysiwyg
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


// editor initial content
const blocksFromHTML = convertFromHTML('<p>Write something...</p>');
const initialEditorContent = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
);

class DespreFirma extends Component {
    state = {
        editorState: EditorState.createWithContent(initialEditorContent)
    };

    onEditorStateChange = editorState => {
        this.setState({ editorState })
    }

    render() {
        // editor
        const { editorState } = this.state;

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Despre firma
                        <p className='font-para-title'>Descrieti firma / PFA, furnizand cat mai multe detalii (activitate, anul infiintarii, dotari, proiecte importante, portofoliu etc).</p>
                    </div>
                </div>
                { /*  START card */ }
                <Card className="card-default">
                    <CardHeader>Form elements</CardHeader>
                    <CardBody>
                        <form method="get" action="#" className="form-horizontal">
                            <fieldset>
                                <legend>New Components</legend>
                            </fieldset>
                            <fieldset>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label">Simple wysiwyg</label>
                                    <Col md={ 10 }>
                                        <Editor
                                            editorState={editorState}
                                            wrapperClassName="wysiwig-editor-wrapper"
                                            editorClassName="form-control"
                                            editorStyle={{height: 300}}
                                            onEditorStateChange={this.onEditorStateChange}
                                        />
                                        {/*<p className="mt-3">JSON OUTPUT</p>*/}
                                        {/*<p dangerouslySetInnerHTML={{__html: JSON.stringify(convertToRaw(editorState.getCurrentContent()))}}></p>*/}
                                    </Col>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="form-group row">
                                    <div className="col-sm-4 col-sm-offset-2">
                                        <button type="submit" className="btn btn-secondary">Cancel</button>
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </CardBody>
                </Card>
                { /*  END card */ }
            </ContentWrapper>
        );
    }

}

export default DespreFirma;
