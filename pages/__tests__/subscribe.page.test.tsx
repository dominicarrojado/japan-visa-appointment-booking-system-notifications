import { render } from '@testing-library/react';
import Subscribe from '../subscribe.page';

describe('<Subscribe />', () => {
  it('should render without errors', () => {
    const { container } = render(<Subscribe />);

    expect(container).toBeInTheDocument();
  });
});
