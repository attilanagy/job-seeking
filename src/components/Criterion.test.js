import { fireEvent, render, screen } from '@testing-library/react';
import Criterion from "./Criterion";

describe('unanswered question', () => {
    let myYesHandler;
    let myNoHandler;

    beforeEach(() => {
        myYesHandler = jest.fn();
        myNoHandler = jest.fn();

        render(<Criterion
            title={"myTitle"}
            question={"myQuestion"}
            answer={null}
            reason={"myReason"}
            yesHandler={myYesHandler}
            noHandler={myNoHandler} />);
    });

    test('renders title properly', () => {
        expect(screen.getByText('myTitle')).toBeInTheDocument();
    });

    test('renders body properly', () => {
        expect(screen.getByText('myQuestion')).toBeInTheDocument()
    });

    test('yesHandler is called', () => {
        fireEvent.click(screen.getByText('Yes'));
        expect(myYesHandler).toBeCalled();
    });

    test('noHandler is called', () => {
       fireEvent.click(screen.getByText('No'));
       expect(myNoHandler).toBeCalled();
    });

    test('has proper background', () => {
        const cardElement = screen.getByText('myQuestion').parentElement.parentElement;
        expect(cardElement).toHaveClass('bg-secondary');
    });

    test('yes button has proper class', () => {
        expect(screen.getByText('Yes')).toHaveClass('btn-success');
    });

    test('no button has proper class', () => {
        expect(screen.getByText('No')).toHaveClass('btn-danger');
    });
});

[
    {name: 'correct answer', answer: true, expectedClass: 'bg-success'},
    {name: 'incorrect answer', answer: false, expectedClass: 'bg-danger'}
].forEach(testCase => {
    describe('answered question - ' + testCase.name, () => {
        beforeEach(() => {
            render(<Criterion
                title={"myTitle"}
                question={"myQuestion"}
                answer={testCase.answer}
                reason={"myReason"}
                yesHandler={jest.fn()}
                noHandler={jest.fn()} />);
        });

        test('renders title properly', () => {
            expect(screen.getByText('myTitle')).toBeInTheDocument();
        });
    
        test('renders body properly', () => {
            expect(screen.getByText('myReason')).toBeInTheDocument()
        });

        test('has proper background', () => {
            const cardElement = screen.getByText('myReason').parentElement.parentElement;
            expect(cardElement).toHaveClass(testCase.expectedClass);
        });

        test('yes button has proper class', () => {
            expect(screen.getByText('Yes')).toHaveClass('btn-dark');
        });
    
        test('no button has proper class', () => {
            expect(screen.getByText('No')).toHaveClass('btn-dark');
        });

        test('yes button has no onClick handler defined', () => {
            expect(screen.getByText('Yes').onclick).toBe(null);
        });

        test('no button has no onClick handler defined', () => {
            expect(screen.getByText('No').onclick).toBe(null);
        });
    });
});