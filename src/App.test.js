import { render, screen, store } from './utils/test/test-utils';

import App from './App';

describe('App.js', () => {
  test('should render [Logo] icon', async () => {
    render(<App />);
    const logoLink = await screen.findByRole('link', {
      name: 'crown.svg',
    });

    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
    expect(logoLink).toHaveClass('logo-container');

    //screen.debug(logoLink);
  });
  test('should render [SIGN IN] text', async () => {
    render(<App />);
    const signInLink = await screen.findByRole('link', {
      name: /SIGN IN/i,
    });

    expect(signInLink).toBeInTheDocument();
    expect(signInLink).toHaveAttribute('href', '/auth');
    expect(signInLink).toHaveClass('nav-link');

    //screen.debug(signInLink);
  });

  test('should call [dispatch]', async () => {
    const mockDispatch = jest.fn();
    jest.spyOn(store, 'dispatch').mockImplementation(mockDispatch);
    render(<App />);
    const signInLink = await screen.findByRole('link', {
      name: /SIGN IN/i,
    });

    expect(signInLink).toBeInTheDocument();
    expect(signInLink).toHaveAttribute('href', '/auth');
    expect(signInLink).toHaveClass('nav-link');

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      payload: undefined,
      type: 'user/checkUserSession',
    });

    //screen.debug(signInLink);
  });
});
