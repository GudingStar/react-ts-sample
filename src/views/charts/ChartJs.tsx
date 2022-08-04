import React from 'react';
import { Doughnut, Line, Bar, Radar, Pie } from 'react-chartjs-2';
import { Row, Col } from 'reactstrap';
import {Chart, ArcElement ,CategoryScale ,registerables } from 'chart.js'
import chartData from './ChartJsData';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';

import ComponentCard from '../../components/ComponentCard';

import { options1 } from './ChartJsType';

//Doughnut Chart
Chart.register(ArcElement);
Chart.register(CategoryScale);
Chart.register(...registerables);
const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange'],

  datasets: [
    {
      data: chartData.doughnutData.data,
      backgroundColor: ['#dc3545', '#2962ff', '#fb6340', '#2dce89', '#4fc3f7'],
      hoverBackgroundColor: ['#dc3545', '#2962ff', '#fb6340', '#2dce89', '#4fc3f7'],
    },
  ],
};

//Pie Chart
const pieData = {
  labels: ['Green', 'Yellow', 'Blue'],
  datasets: [
    {
      data: chartData.pieData.data,
      backgroundColor: ['#2dce89', '#5e72e4', '#23b7e5'],
      hoverBackgroundColor: ['#2dce89', '#5e72e4', '#23b7e5'],
    },
  ],
};

//Bar Chart
const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Apple',
      backgroundColor: '#2962ff',
      borderColor: '#2962ff',
      data: chartData.barData.data.a,
    },
    {
      label: 'Google',
      backgroundColor: '#4fc3f7',
      borderColor: '#4fc3f7',
      data: chartData.barData.data.b,
    },
  ],
};

//Line chart
const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Income',
      backgroundColor: 'rgb(79, 195, 247)',
      borderColor: 'rgb(79, 195, 247)',
      pointBorderColor: '#fff',
      data: chartData.lineData.data.a,
    },
    {
      label: 'Outcome',
      backgroundColor: 'rgb(246, 249, 252)',
      borderColor: 'rgb(246, 249, 252)',
      pointBorderColor: '#fff',
      data: chartData.lineData.data.b,
    },
  ],
};

// Rader Chart
const radarData = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'Apple',
      backgroundColor: 'rgba(246, 45, 81,0.2)',
      borderColor: 'rgba(246, 45, 81,1)',
      data: chartData.radarData.data.a,
    },
    {
      label: 'Google',
      backgroundColor: 'rgba(45, 206, 137,0.2)',
      borderColor: 'rgba(45, 206, 137,1)',
      data: chartData.radarData.data.b,
    },
  ],
};

//Polar Chart
// const polarData = {
//   datasets: [
//     {
//       data: chartData.polarData.data,
//       backgroundColor: ['#dc3545', '#2962ff', '#fb6340', '#2dce89'],
//       label: 'My dataset',
//     },
//   ],
//   labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
// };

function Chartjs() {
  return (
    <div>
      <BreadCrumbs />
      {/*--------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/*--------------------------------------------------------------------------------*/}
      <Row>
        <Col md="6">
          <ComponentCard title="Pie Chart">
            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
              <Pie
                data={pieData}
                options={options1}
              />
            </div>
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Bar Chart">
            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
              <Bar
                data={barData}
                options={options1}
              />
            </div>
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Doughnut Chart">
            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
              <Doughnut
                data={doughnutData}
                options={options1}
              />
            </div>
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Line Chart">
            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
              <Line
                data={lineData}
                options={options1}
              />
            </div>
          </ComponentCard>
        </Col>

        <Col md="6">
          <ComponentCard title="Radar Chart">
            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
              <Radar
                data={radarData}
                options={options1}
              />
            </div>
          </ComponentCard>
        </Col>
      </Row>
      {/*--------------------------------------------------------------------------------*/}
      {/*End Inner Div*/}
      {/*--------------------------------------------------------------------------------*/}
    </div>
  );
}

export default Chartjs;
