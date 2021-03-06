import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { select } from 'd3';
import FileSaver from 'file-saver';

import TutorialPopover from './TutorialPopover';
import { Wrapper } from './graph/graph-customization/CustomizerUI';

export default class GraphExport extends Component{

  render() {
    const tooltip = (
      <span>
        Exported <code>SVG</code> will contain whole graph even if it's clippend on the preview canvas.
      </span>)

    return (
      <Wrapper>
        <h1>
          Export <small><TutorialPopover tooltipText={tooltip} /></small>
          <Button
            bsStyle='success pull-right'
            onClick={e => this.saveSVG()}
          ><FontAwesome name='download' /> SVG</Button>
        </h1>
      </Wrapper>
    );
  }

  saveSVG(){
    var html = select('svg')
        .attr('title', 'test')
        .attr('version', 1.1)
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .node().parentNode.innerHTML;

    var blob = new Blob([html], {
        type: 'image/svg+xml'
    });
    FileSaver.saveAs(blob, 'graph.svg')
  }
}
