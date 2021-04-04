function PollOption({ option, totalVotes, votedOption }) {
  const percentageValue = option.votes.length / totalVotes * 100;
  const percentage = Number.isInteger(percentageValue) ? percentageValue : parseFloat(percentageValue).toFixed(1);
  return (<div className="poll-option">
    <h4>
      Would you rather {option.text}?
  </h4>
    <b>
      {option.votes.length} out of {totalVotes} votes. ({percentage}%)
  </b>
    {votedOption
      ? <span className="badge badge-success">This was your choice</span>
      : null}
  </div>)
}

export default PollOption;