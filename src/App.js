import './App.css';
import Criteria from './components/Criteria';

const INITIAL_CRITERIA = [
  {
    id: "remote-work",
    question: "Is the position fully remote?",
    answer: null,
    reason: "Covid 19 changed everything. Companies learned how to operate their organization fully remote. We should utilize this knowledge to save commute time."
  },
  {
    id: "no-services-company",
    question: "Can I directly contribute to product development?",
    answer: null,
    reason: "I would like to see the real meaning of my daily effort, so I would like to work as a regular employee."
  },
  {
    id: "culture-fit-interview",
    question: "Does the discussion with the hiring manager preseed the technical round in the process?",
    answer: null,
    reason: "You probably heard the phrase: culture eats strategy for breakfast."
  },
  {
    id: "home-assignment",
    question: "Is the technical interview based on a home assignment where I can implement something on my own?",
    answer: null,
    reason: "A company is a business organization, not a school. The candidate is not a student. Therefore the interview should not look like an exam."
  },
  {
    id: "linux-workstation",
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
