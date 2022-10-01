import { render, screen } from './utils/test/test-utils';

import App from './App';

describe('App.js', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('should render [Logo] icon', () => {
    const logoLink = screen.getByRole('link', {
      name: 'crown.svg',
    });

    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
    expect(logoLink).toHaveClass('logo-container');

    //screen.debug(logo);
  });
  test('should render [SIGN IN] text', () => {
    const signInLink = screen.getByRole('link', {
      name: /SIGN IN/i,
    });

    expect(signInLink).toBeInTheDocument();
    expect(signInLink).toHaveAttribute('href', '/auth');
    expect(signInLink).toHaveClass('nav-link');

    //screen.debug(signInLink);
  });
});
