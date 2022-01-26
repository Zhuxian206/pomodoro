<style>
#analyze {
  width: 43vw;
  height: 100%;
  background: #2D2C2C;
  margin-left: 13%;
}
.analysis_title {
  font-family: 'Open Sans', sans-serif;
  color: #F5A623;
  font-size: 2rem;
  margin-bottom: 70px;
}
#analyze .block {
display: flex;
flex-direction: row;
justify-content: flex-start;
}

#analyze div {
  color: #F5A623;
  font-size: 3rem;
}

#analyze .number {
margin-right: 1rem;
}

#analyze h4 {
  color: #818080;
  font-size: 1.5rem;
}

#analyze .toma {
  color: #818080;
  font-size: 1.5rem;
  line-height: 3.5;
}

#analyze .date {
  font-size: 1.2rem;
  font-weight: bold;
  color: #818080;
}
#analyze .chart {
  position: relative;
  width: 400px;
  height: 300px;
  /* background: rgb(163, 88, 88); */
  overflow: hidden;
}
#analyze .cl_w {
position: absolute;
font-size: 1rem;
top: 3%;
left: 3%;
line-height: 2.1;
}

#analyze .row_w {
width: 98%;
position: absolute;
display: flex;
flex-direction: row;
justify-content:space-around;
align-items: center;
font-size: 1rem;
bottom: -6%;
left: 3%;
}

#analyze .cl_line {
position: absolute;
margin-left: 2%;
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content:space-around;
align-items: center;
}
#analyze .cl_line div{
width: 1px;
height: 100%;
background: #787777;
margin-bottom: 13%;
}
#analyze .row_line {
position: absolute;
margin-left: 5%;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content:space-around;
align-items: center;
}

#analyze .row_line div{
margin-left: 11%;
height: 1px;
width: 100%;
background: #787777;
}

</style>

<template lang="pug">
#analyze.p-5
  b-container
    b-row
      b-col(cols='12')
        h1.analysis_title.mt-4 ANALYSIS
      b-col(cols='6')
        h4 Today
        div.block
          .number 20
          .toma /tomato
      b-col(cols='6')
        h4 Week
        div.block
          .number 160
          .toma /tomato
  b-container.mt-5
    b-row
      b-col.text-center.date.mt-5(cols='12')
        b-icon(icon="chevron-left")
        | 2019.7.03 - 2019.7.08
        b-icon(icon="chevron-right")
      b-col.mt-4.d-flex.justify-content-center.align-items-center(cols='12')
        .chart
          .cl_w
            p 10
            p 8
            p 6
            p 4
            p 2
          .row_w
            p 7/3
            p 7/4
            p 7/5
            p 7/6
            p 7/7
            p 7/8
          .cl_line
            div
            div
            div
            div
            div
            div
          .row_line
            div
            div
            div
            div
            div
            div
</template>
