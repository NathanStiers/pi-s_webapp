import React from 'react'
import JobFuture from '../JobFuture/JobFuture'

function Future({ job }) {
  var pair = 'bg-white col-12 pt-2'
  var impair = 'bg-light col-12 pt-2'
  const array = job.map((item, i) =>
    <div class={i % 2 === 0 ? pair : impair} >
      <JobFuture date={item.date} place={item.place} job={item.job} description={item.description}></JobFuture>
    </div>
  )
  return (
    <div class="row" name="ListeAnciensJobs">
      {array}
    </div>
  )
}

export default Future;