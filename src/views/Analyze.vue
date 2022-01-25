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
  b-container
    b-row
      b-col.text-center.date(cols='12')
        |< 2019.7.03 - 2019.7.08 >
      b-col(cols='12')

</template>
