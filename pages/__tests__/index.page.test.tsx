import { render } from '@testing-library/react';
import Home from '../index.page';

describe('<Home />', () => {
  it('should render without errors', () => {
    const { container } = render(<Home />);

    expect(container).toBeInTheDocument();
  });
});
