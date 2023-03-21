import { render } from '@testing-library/react';
import Unsubscribe from '..';

describe('<Unsubscribe />', () => {
  it('should render without errors', () => {
    const { container } = render(<Unsubscribe />);

    expect(container).toBeInTheDocument();
  });
});
