import React from 'react';
import marked from 'marked'
import './App.css';


class App extends React.Component {
    state= {
        text: `
Heading
=======

Sub-heading
-----------

Paragraphs are separated
by a blank line.

Two spaces at the end of a line  
produces a line break.

Text attributes _italic_, 
**bold**, \`monospace\`.

Horizontal rule:

---

Strikethrough:
~~strikethrough~~

Bullet list:

  * apples
  * oranges
  * pears

Numbered list:

  1. lather
  2. rinse
  3. repeat

An [example](http://example.com).

![Image](Icon-pictures.png "icon")

> Markdown uses email-style 
> characters for blockquoting.`
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        const { text } = this.state;
        const markdown = marked(text, {breaks: true});
        return (
            <div className="App">
                <h1>Markdown Previewer</h1>
                <div className="container">
                    <div className="editor-box">
                        <textarea id="editor" value={text} onChange={this.handleChange}/>
                    </div>
                    <div id="preview" dangerouslySetInnerHTML={{__html: markdown}}>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
