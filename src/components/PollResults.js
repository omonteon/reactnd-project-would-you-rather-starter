import PollOption from './PollOption';

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