function PollOption({ option, totalVotes, votedOption }) {
  return (<div className="poll-option">
    <h4>
      Would you rather {option.text}?
  </h4>
    <b>
      {option.votes.length} out of {totalVotes} votes.
  </b>
    {votedOption
      ? <span className="badge badge-success">This was your choice</span>
      : null}
  </div>)
}

export default PollOption;