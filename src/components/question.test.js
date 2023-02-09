import { render } from "@testing-library/react"
import Question from "./question";

test('renders properly unanswered question', () => {
    const { container } = render(
        <Question
            question={'To be or not to be'}
            answer={null}

        />
        )
});

// test('renders properly answered correct question', () => {

// });

// test('renders properly answered incoccret question', () => {

// });
