import ContentWrapper from "../../Layout/ContentWrapper";
import Chartist from 'chartist';
import StatisticiJudetGrapf from "./StatisticiJudetGrapf";
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";
// import ChartistGraph from "react-chartist";
// import {Line} from "../../Charts/ChartChartist.setup";

// Chartist
import 'matchmedia/index.js';
import 'chartist/dist/chartist.min.css';
import ChartistGraph from 'react-chartist';


const StatisticiJudete = () => {
    const Line = {
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
                [12, 9, 7, 8, 5],
                [2, 1, 3.5, 7, 3],
                [1, 3, 4, 5, 6]
            ]
        },
        options: {
            fullWidth: true,
            height: 280,
            chartPadding: {
                right: 40
            }
        }
    }

    const CardDefault = props => (
        <Card {...props} className="card-default">
            {props.children}
        </Card>
    )

    return <ContentWrapper>
        <Row>
            <Col md={12}>
                <CardDefault>
                    <CardHeader>Line</CardHeader>
                    <CardBody>
                        <ChartistGraph data={Line.data} options={Line.options} type={'Line'}/>
                    </CardBody>
                </CardDefault>
            </Col>
        </Row>
    </ContentWrapper>
}
export default StatisticiJudete;
