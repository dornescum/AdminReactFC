const StatisticiJudetGrapf =()=>{
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
    return <>
        <Line />
    </>
}
export default StatisticiJudetGrapf;
