import React from 'react'
import JobAncien from '../JobAncien/JobAncien'

function Anciens({ job }) {
  var pair = 'bg-white col-12 pt-2'
  var impair = 'bg-light col-12 pt-2'
  const array = job.map((item, i) =>
    <div class={i % 2 === 0 ? pair : impair} >
      <JobAncien date={item.date} gain={item.gain} job={item.job}></JobAncien>
    </div>
  )
  return (
    <div class="row" name="ListeAnciensJobs">
      {array}
    </div>
  )
}

export default Anciens;