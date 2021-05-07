import {useState} from 'react'
import {Card, CardBody, CardHeader} from "reactstrap";
import MorrisChart from "../../Charts/Morris";

const StatisticiGrapf = () => {
    const [data, setData] = useState([
        {y: "2015", a: 100, b: 90},
        {y: "2016", a: 75, b: 65},
        {y: "2017", a: 50, b: 40},
        {y: "2018", a: 75, b: 65},
        {y: "2019", a: 50, b: 40},
        {y: "2020", a: 75, b: 65},
        {y: "2021", a: 40, b: 90}
    ]);
    const [options, setOptions] =useState(
        {
            element: 'morris-area',
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Serie A", "Serie B"],
            lineColors: ['#7266ba', '#23b7e5'],
            resize: true
        }
    )

    return <div style={{padding: '1rem 0'}}>
        <Card className="card-default" >
            <CardHeader>Area</CardHeader>
            <CardBody>
                <MorrisChart type={'Area'} id="morris-area" data={data} options={options}/>
            </CardBody>
        </Card>

    </div>
}
export default StatisticiGrapf;
