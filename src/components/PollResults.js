import PollOption from './PollOption';

// CODE REVIEW QUESTION: 
// Is it ok to pass this info as props ? 
// or should this component be connected to the store and get the info from there ?
function PollResults({ authedUser, question }) {
  const { optionOne, optionTwo } = question;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  return <div className="poll-results">
    <h3>Results:</h3>
    <PollOption
      option={optionOne}
      totalVotes={totalVotes}
      votedOption={optionOne.votes.find(vote => vote === authedUser)} />
    <PollOption
      option={optionTwo}
      totalVotes={totalVotes}
      votedOption={optionTwo.votes.find(vote => vote === authedUser)} />
  </div>;
}

export default PollResults;