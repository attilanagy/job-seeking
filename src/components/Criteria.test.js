import { fireEvent, render, screen } from "@testing-library/react";
import Criteria from "./Criteria";

describe('criteria', () => {
    let renderedContainer;

    beforeEach(() => {
        const criterionList = [
            {
                id: "question-1",
                question: "QuestionOne",
                answer: null,
                reason: "ReasonOne"
            },
            {
                id: "question-2",
                question: "QuestionTwo",
                answer: null,
                reason: "ReasonTwo"
            }
        ];
        const { container } = render(<Criteria initialCriteria={criterionList} />);
        renderedContainer = container;
    });
 
    test('renders all the rows', () => {
        expect(renderedContainer.querySelectorAll('.row')).toHaveLength(2);
    });

    test('answers a question with yes', () => {
        fireEvent.click(screen.getAllByText('Yes')[0]);
        expect(renderedContainer.querySelectorAll('.card')[0]).toHaveClass('bg-success');
    });

    test('answers a question with no', () => {
        fireEvent.click(screen.getAllByText('No')[1]);
        expect(renderedContainer.querySelectorAll('.card')[1]).toHaveClass('bg-danger');
    });
});