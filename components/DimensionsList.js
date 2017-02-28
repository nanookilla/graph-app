import * as d3 from 'd3';

export default class DimensionsList extends React.Component{



    render() {

        // ukazkovy dataset, normalne by prisel jako this.props.dataset
        const datasetString =
        'name,economy (mpg),cylinders,displacement (cc),power (hp),weight (lb),0-60 mph (s),year\n\
AMC Ambassador Brougham,13,8,360,175,3821,11,73\n\
AMC Ambassador DPL,15,8,390,190,3850,8.5,70\n\
AMC Ambassador SST,17,8,304,150,3672,11.5,72\n\
AMC Concord DL 6,20.2,6,232,90,3265,18.2,79\n\
AMC Concord DL,18.1,6,258,120,3410,15.1,78\n\
AMC Concord DL,23,4,151,,3035,20.5,82\n\
AMC Concord,19.4,6,232,90,3210,17.2,78\n\
AMC Concord,24.3,4,151,90,3003,20.1,80\n\
AMC Gremlin,18,6,232,100,2789,15,73\n\
AMC Gremlin,19,6,232,100,2634,13,71\n\
AMC Gremlin,20,6,232,100,2914,16,75\n\
AMC Gremlin,21,6,199,90,2648,15,70\n\
AMC Hornet Sportabout (Wagon),18,6,258,110,2962,13.5,71\n\
AMC Hornet,18,6,199,97,2774,15.5,70';
        const dataset = d3.csvParse(datasetString);
        console.log(dataset.columns);
        //

    return (
        <div className="col-md-3">
            <ul>
                {dataset.columns.map(column => {
                    return (
                        <li>
                            {column}
                            <span className="dimension-icon pull-right"><i className="fa fa-bars"></i></span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
  }

}
