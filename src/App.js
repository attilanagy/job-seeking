import './App.css';
import Criteria from './components/Criteria';

const INITIAL_CRITERIA = [
  {
    id: "remote-work",
    title: "Remote",
    question: "Is the position fully remote?",
    answer: null,
    reason: "Covid 19 changed everything. Companies learned how to operate their organization fully remote. We should utilize this knowledge to save commute time."
  },
  {
    id: "cross-functional-team",
    title: "Cross-functional Team",
    question: "Can I work in a cross-functional team?",
    answer: null,
    reason: "I have already built a senior career in several fields inside IT. Stepping out of my comfort zone is daily practice."
  },
  {
    id: "culture-fit-interview",
    title: "Culture Fit",
    question: "Does the discussion with the hiring manager preseed the technical round in the process?",
    answer: null,
    reason: "You probably heard the phrase: culture eats strategy for breakfast."
  },
  {
    id: "home-assignment",
    title: "Technical Interview",
    question: "Is the technical interview based on a home assignment where I can implement something on my own?",
    answer: null,
    reason: "A company is a business organization, not a school. The candidate is not a student. Therefore the interview should not look like an exam."
  },
  {
    id: "linux-workstation",
    title: "Linux",
    question: "Can I install Linux on my workstation?",
    answer: null,
    reason: "Nowadays everything is running in a container, even automated tests. It's still the easiest to work with containers on a Linux based machine.",
  }
]

const App = () => {
  return (
    <div className="App">
        <Criteria initialCriteria={INITIAL_CRITERIA}/>
    </div>
  );
}

export default App;
