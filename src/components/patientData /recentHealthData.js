import React from 'react'
import { Line, Bar, HorizontalBar } from 'react-chartjs-2';

const recentHealthData = (props) =>  

<Line
height={250}
data={props.recentHealthData} />

export default recentHealthData