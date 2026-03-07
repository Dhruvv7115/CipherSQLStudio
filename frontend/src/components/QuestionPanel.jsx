import "../styles/_question_panel.scss"
const QuestionPanel = ({ assignment }) => {
  return (
    <div className="question-panel">
      <div className="question-panel__header">
        <h1 className="question-panel__title">{assignment.title}</h1>
        <span className={`question-panel__difficulty ${assignment.difficulty.toLowerCase()}`}>
          {assignment.difficulty}
        </span>
      </div>

      <p className="question-panel__question">{assignment.question}</p>

      <div className="question-panel__requirements">
        <h3 className="question-panel__requirements-title">Requirements</h3>
        <ul className="question-panel__requirements-list">
          {assignment.requirements.map((req, index) => (
            <li key={index} className="question-panel__requirements-item">
              <span className="question-panel__requirements-index">{index + 1}</span>
              {req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default QuestionPanel