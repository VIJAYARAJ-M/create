/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
//import {  Bar } from "react-chartjs-2";
import {FcPicture} from "react-icons/fc"
import "./Card.css";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { NavDropdown } from "react-bootstrap";
//import {ReactDateTime} from "react-datetime"
//import 'bootstrap-daterangepicker/daterangepicker.css';
import {  Bar, BarChart, CartesianGrid,Line,  LineChart,ResponsiveContainer,Tooltip,XAxis, YAxis } from "recharts";
import "./inter.css";
import 'bootstrap-daterangepicker/daterangepicker.css';
import FeaturedInfo from "Funnel/funnel";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import {HiDuplicate} from "react-icons/hi"
import { ProgressCircular, ProgressLinear } from "ui-neumorphism";
import 'ui-neumorphism/dist/index.css'
import Tables from "./examples/Tables";

import {BsFillPersonFill,BsStack,BsPersonLinesFill} from "react-icons/bs"
import {FaChartBar,FaChartPie} from "react-icons/fa"
import GaugeChart from "react-advanced-gauge-chart/dist/GaugeChart";
import ReactApexChart from "react-apexcharts";
const data =[
  {
  
      span:"bi-person-fill ",
      h5:"CV Sent",
      h4:"1"
  
  },
  {
  
    span:"bi-person-fill ",
    h5:"1st Interview",
    h4:"2"

},
{
  
  span:"bi-person-fill ",
  h5:"2nd Interview",
  h4:"3"

},
{
  
  span:"bi-person-fill ",
  h5:"3rd Interview",
  h4:"4"

},
{
  
  span:" BsFillPersonFill",
  h5:"offers",
  h4:"5"

},
{
  
  span:"bi-person-fill ",
  h5:"offers",
  h4:"1"

},
]
const renderCard = (card, index) => {
  return (
    <Col  className="" >
                      <Card className="" style={{backgroundImage:"linear-gradient(to right, #FFFBFF ,#D4D9DD )",
                      height:"200px",width:"200px",borderRadius:"50%",border:"  solid #D9D9D9",
                      /*borderImage:" linear-gradient(to right, #bd1d58, #40db19)10",*/
                      boxShadow:"8px 8px 10px 0px rgb( 120 120 120/ 80%), -8px -8px 10px 3px rgb(249 250 252/ 100%)"}}>
                          <Row className="p-4">
                              <Col>
                              <Card  style={{backgroundImage:"linear-gradient(to right,#D4D9DD, #FFFBFF  )",height:"150px",width:"150px",borderRadius:"50%",
                              border:"solid #D1D2D3"}}>
                                  <Row className="p-3">
                                      <Col>
                                     <Card className="text-center" key={index} style={{backgroundColor:"#EDEEF0",border:"solid #F2CE3E",
                                      height:"120px",width:"120px",borderRadius:"50%",marginLeft:"-4px",marginTop:"-4px"}}>
                                          <CardBody className="  ">
                                              <Row className="justify-content-center d-flex align-items-center"> 
                                                 <span><BsFillPersonFill size="2rem"/></span>
                                              </Row>
                                               <Row className="justify-content-center d-flex align-items-center">
                                               <h5>{card.h5}</h5>
                                               </Row>
                                              <Row className="justify-content-center d-flex align-items-center">
                                                <h4>{card.h4}</h4>
                                              </Row>
                                              
                                          </CardBody>
                                      </Card>
                                      </Col>
                                  </Row>
                              </Card>
                              </Col>

                          </Row>
                      </Card>
    </Col>
  );
};

const data02=[{
  name: 'Page A',
  uv: 4000,
  pv: 2400,
  amt: 2400,
},
{
  name: 'Page B',
  uv: 3000,
  pv: 1398,
  amt: 2210,
},
{
  name: 'Page C',
  uv: 2000,
  pv: 9800,
  amt: 2290,
},
{
  name: 'Page D',
  uv: 2780,
  pv: 3908,
  amt: 2000,
},
{
  name: 'Page E',
  uv: 1890,
  pv: 4800,
  amt: 2181,
},
{
  name: 'Page F',
  uv: 2390,
  pv: 3800,
  amt: 2500,
},
{
  name: 'Page G',
  uv: 3490,
  pv: 4300,
  amt: 2100,
}]

 const series= [{
  name: 'Inflation',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}]

 const options= {
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444'
    }
  }
 }





/*const series= [{
  name: 'XYZ MOTORS',
  data: [23,50,80,100,110,150],
}]
 const options= {
  chart: {
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  title: {
    text: 'Stock Price Movement',
    align: 'left'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
    title: {
      text: 'Price'
    },
  },
  xaxis: {
    type: 'datetime',
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0)
      }
    }
  }
 }*/
  /*const series= [{
  data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
}]

 const options= {
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'Germany'
    ],
  }
}*/

const data20 = [
  {
    uv: 4000,
  },
  {
    uv: 3000,
  },
  {
    uv: 2000,
  },
  {
    uv: 2780,
  },
  {
    uv: 1890,
  },
  {
    uv: 2390,
  },
  {
    uv: 3490,
  },
];


const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  const style={
    '@media screen and (min-width:320px) and (max-width:1080px)':{
      width:"80%"
    },
  }




  return (
    <>
       
       {/* <Header />   */}
    
      {/* Page content */}
      <Container className="pb-8 pt-5 pt-md-8" fluid style={{backgroundColor:""}}>
       <Row>
       <Col xl={6} className="">
       <Card className="p-4" style={{backgroundColor:"#e0e0e0",
       }}>

             <Row>
                <Col>
                  <Card className="p-3" style={{backgroundColor:"#e0e0e0",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
                }}>
                    <Row>
                      <Col>
                       <h6>Overview</h6>
                       <h4>Sales Values</h4>
                      </Col>
                      <Col className="justify-content-end d-flex">
                          <Button style={{height:"40px",backgroundColor:"#A2AEF0",color:"white"}}>Month</Button>
                          <Button style={{height:"40px",backgroundColor:"#A2AEF0",color:"white"}}>Year</Button>

                      </Col>
                    </Row>
                  </Card>
                </Col>
             </Row>
            <Row className="mt-4">
              <Col>
                  <Card className="   align-items-center" style={{backgroundColor:"#e0e0e0",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
                  /*backgroundImage:"linear-gradient(to right,#FFB178, #FF78B1, #FF3C8E )"*/}}>
                    
                    <Row>
                    <h5> CV Sent</h5>
                    </Row>
                    <Row>
                    <h5> 1200</h5>
                    </Row>
                  </Card>
              </Col>

              <Col>
                  <Card className="   align-items-center" style={{backgroundColor:"#e0e0e0",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"}}>
                    
                    <Row>
                    <h5> 1<sup>st</sup> Interview</h5>
                    </Row>
                    <Row>
                    <h5> 1200</h5>
                    </Row>
                  </Card>
              </Col>

              <Col>
                  <Card className="   align-items-center" style={{backgroundColor:"#e0e0e0",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"}}>
                    
                    <Row>
                    <h5>2<sup>nd</sup> Interview</h5>
                    </Row>
                    <Row>
                    <h5> 1200</h5>
                    </Row>
                  </Card>
              </Col>

              <Col>
                  <Card className="   align-items-center" style={{backgroundColor:"#e0e0e0",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"}}>
                    
                    <Row>
                    <h5>3<sup>rd</sup> Interview</h5>
                    </Row>
                    <Row>
                    <h5> 1200</h5>
                    </Row>
                  </Card>
              </Col>

              <Col>
                  <Card className="   align-items-center" style={{backgroundColor:"#e0e0e0",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
                  /*backgroundImage:"linear-gradient(to right,#A0BBFF, #EC77FF  )"*/}}>
                    
                    <Row>
                    <h5>Offers</h5>
                    </Row>
                    <Row>
                    <h5> 1200</h5>
                    </Row>
                  </Card>
              </Col>
            </Row>
              
              <Row className="mt-4">
                <Col className="mb-5 mb-xl-0" xl="12" >
                  <Card className=" " 
                  style={{/*boxShadow:"8px 8px 7px 0px rgb( 120 120 120/ 80%), -5px -6px 5px 0 rgb(255 255 255 / 90%)"*/
                  backgroundColor:"#e0e0e0 ",height:"290px",boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff",
                  /*backgroundImage:"linear-gradient(to right, #ffd89b , #19547b )"*/}}>
                    
                    <CardBody>
                      {/* Chart */}
                      <div className="chart">
                        <FeaturedInfo/>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                
              </Row>
        </Card>
        </Col>
        <Col xl={6} className="">
        <Card className=" p-4  " style={{backgroundColor:"#e0e0e0",backgroundImage:"", height:""
      /*boxShadow:"6px 6px 10px #C7D1E8, -6px -6px 10px #C7D1E8"*/}}>
        
        <Row className="">
        <Col xl={3}>
                <Card className="justify-content-center d-flex align-items-center p-5 "  
                style={{backgroundColor:"#e0e0e0", height:"160px",
               boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
             }}>
                  
                    <Row className="justify-content-center d-flex align-items-center ">
                      <Col>
                      <Card style={{backgroundColor:"#e0e0e0",
                      boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px"}}>
                          <DateRangePickerComponent/>
                      </Card>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col >
                      <Card className="text-center justify-content-center align-items-center"
                      style={{backgroundColor:"#e0e0e0",
                      boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px",height:"80px"}}>
                          
                            
                            <Row className="justify-content-center d-flex align-items-center">
                              <h5>Deal Value</h5>
                            </Row>
                            <Row className="justify-content-center d-flex align-items-center">
                              <h5>3500</h5>
                            </Row>
                        
                      </Card>
                      </Col>
                    </Row>

                  
                </Card>
          </Col>

          <Col xl={3}>
                <Card className="justify-content-center d-flex align-items-center "  
                style={{backgroundColor:"#e0e0e0", height:"160px",
               boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
             }}>
                  
                    <Row className="justify-content-center d-flex align-items-center ">
                      <Col>
                      <Card style={{backgroundColor:"#e0e0e0",
                      boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px"}}>
                          <DateRangePickerComponent/>
                      </Card>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col >
                      <Card className="text-center justify-content-center align-items-center"
                      style={{backgroundColor:"#e0e0e0",
                      boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px",height:"80px"}}>
                          
                            
                            <Row className="justify-content-center d-flex align-items-center">
                              <h5>Deal Closed</h5>
                            </Row>
                            <Row className="justify-content-center d-flex align-items-center">
                              <h5>3500</h5>
                            </Row>
                        
                      </Card>
                      </Col>
                    </Row>

                  
                </Card>
          </Col>
          <Col xl={3}>
                <Card className="justify-content-center d-flex align-items-center "  
                style={{backgroundColor:"#e0e0e0", height:"160px",
               boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
             }}>
                  
                    <Row className="justify-content-center d-flex align-items-center ">
                      <Col>
                      <Card style={{backgroundColor:"#e0e0e0",
                      boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px"}}>
                          <DateRangePickerComponent/>
                      </Card>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col >
                      <Card className="text-center justify-content-center align-items-center"
                      style={{backgroundColor:"#e0e0e0",
                      boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px",height:"80px"}}>
                          
                            
                            <Row className="justify-content-center d-flex align-items-center">
                              <h5>Deal Count</h5>
                            </Row>
                            <Row className="justify-content-center d-flex align-items-center">
                              <h5>3500</h5>
                            </Row>
                        
                      </Card>
                      </Col>
                    </Row>

                  
                </Card>
          </Col>

          <Col xl={3}>
                <Card className="justify-content-center d-flex align-items-center "  
                style={{backgroundColor:"#e0e0e0", height:"160px",
               boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
             }}>
                  
                    <Row className="justify-content-center d-flex align-items-center ">
                      <Col>
                      <Card style={{backgroundColor:"#e0e0e0",
                      boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px"}}>
                          <DateRangePickerComponent/>
                      </Card>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col >
                      <Card className="text-center justify-content-center align-items-center"
                      style={{backgroundColor:"#e0e0e0",
                      boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px",height:""}}>
                          
                            
                            <Row className="justify-content-center d-flex align-items-center">
                              <h5>Avg days <br/>
                                to close deal</h5>
                            </Row>
                            <Row className="justify-content-center d-flex align-items-center">
                              <h5>3500</h5>
                            </Row>
                        
                      </Card>
                      </Col>
                    </Row>

                  
                </Card>
          </Col>
          
          
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12" style={{}}>
            <Card className="" style={{boxShadow:"",backgroundColor:"#e0e0e0",height:"270px",
            boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
            /*boxShadow:"inset 2px 2px 5px #e7e7e7, inset -3px -3px 7px #bbbec3",backgroundColor:"#F8F8F8"*/}}>
              <CardHeader className="border-0" style={{backgroundColor:"#e0e0e0"}}>
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Tables</h3>
                  </div>
                 
                </Row>
              </CardHeader>
              <Table className="align-items-center  table-flush" responsive>
                <thead className="">
                  <tr>
                    <th scope="col">Candidate</th>
                    <th scope="col">Stage</th>
                    <th scope="col">No of Days</th>
                    <th scope="col">Flag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Candidate-1</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Candidate-2</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Candidate-3</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Candidate-4</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Candidate-5</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        
        </Row>
       
        </Card>
        </Col>
        </Row>
        

        

        <Card className="mt-4 p-4" style={{backgroundColor:"#e0e0e0"}}>
            <Row className="">
          
            
              <Col xl={6}>
                <Card className="p-3" style={{backgroundColor:"#e0e0e0",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
                }}>
                  <h2>Custom Calculation</h2>
                 <Row className="mt-3 justify-content-center">
                    
                    <Col xl={4}>
                      
                      <Card className="text-center justfy-content-center d-flex bg-light" 
                      style={{ boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3"}}>
                        
                        <NavDropdown className="d-flex text-center justify-content-center"  title="Interview " id="basic-nav-dropdown">
                                 <NavDropdown.Item href="#action/3.1">1<sup>st</sup> Interview</NavDropdown.Item>
                                 <NavDropdown.Item href="#action/3.2">2<sup>nd</sup> Interview</NavDropdown.Item>
                                 <NavDropdown.Item href="#action/3.3">3<sup>rd</sup> Interview</NavDropdown.Item>
                                 <NavDropdown.Divider />
                                 <NavDropdown.Item href="#action/3.4">Cv sent</NavDropdown.Item>
                        </NavDropdown>
                                    
                      </Card>
                      
                      
                    </Col>
                    <Col xl={4} className="">
                      
                      <Card className="text-center justfy-content-center d-flex bg-light"
                      style={{ boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",
                      backgroundColor:"#e0e0e0"}}>
                        
                        <NavDropdown className="d-flex text-center justify-content-center"  title="Offer " id="basic-nav-dropdown">
                                 <NavDropdown.Item href="#action/3.1">1<sup>st</sup> Interview</NavDropdown.Item>
                                 <NavDropdown.Item href="#action/3.2">2<sup>nd</sup> Interview</NavDropdown.Item>
                                 <NavDropdown.Item href="#action/3.3">3<sup>rd</sup> Interview</NavDropdown.Item>
                                 <NavDropdown.Divider />
                                 <NavDropdown.Item href="#action/3.4">Cv sent</NavDropdown.Item>
                        </NavDropdown>
                                    
                      </Card>
                      
                      
                    </Col>
                    
                  </Row>
                  <Row className="mt-5  justify-content-center">
                  <ProgressCircular elevated value={20} size={150} width={15} color='var(--primary)' label="20%"/>
                  </Row>
                  </Card>
                  
                  
              </Col>
              <Col className="mb-5 mb-xl-0" xl="6">
                  <Card style={{backgroundColor:"#e0e0e0",boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"}}>
                  
                    <ReactApexChart options={options} series={series} type="bar" height={310} width={550} />
                  </Card>
            </Col>
              
            </Row>
            
         </Card>
         
         
      <Row>
        <Col>
        <Card>
          
        <LineChart width={600} height={500} data={data02}>
                                                <XAxis dataKey="name"/>
                                                <YAxis/>
                                                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                                                
                                            </LineChart>
        

        </Card>
        </Col>
      </Row>



      
       {/* <ReactApexChart options={options} series={series} type="area" height={350} /> */}
      {/* <ReactApexChart options={options} series={series} type="bar" height={350} /> */}
      {/* <ReactApexChart options={options} series={series} type="bar" height={350} width={600} /> */}

        <ResponsiveContainer>
          <Row>
            <Col>
          <Card>
          <h1>jjkwekfwekf;lfk;lfk;lfkelfke  klfkfkw;lfklkfw ;lkwlkflekfkfkffklkf</h1>
          <LineChart width={1000} height={500} data={data02} >
                                                <XAxis dataKey="name"/>
                                                <YAxis/>
                                                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                                                
                                            </LineChart>
          </Card>
          </Col>
          </Row>
        </ResponsiveContainer>
    
      
        
        
      </Container>
    </>
  );
};

export default Index;
