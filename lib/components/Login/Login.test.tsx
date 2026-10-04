import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Login } from './Login';

describe('Login', () => {
  it('blocks empty submit with field errors', async () => {
    const user = userEvent.setup();
    const onLogin = vi.fn();
    render(<Login onLogin={onLogin} />);
    await user.click(screen.getByRole('button', { name: 'Sign in' }));
    expect(
      await screen.findByText('Username is required.')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Password is required.')
    ).toBeInTheDocument();
    expect(onLogin).not.toHaveBeenCalled();
  });

  it('submits credentials incl. rememberMe and persists the username', async () => {
    const user = userEvent.setup();
    const onLogin = vi.fn();
    render(<Login onLogin={onLogin} />);
    await user.type(screen.getByLabelText(/Username/), 'ada');
    await user.type(screen.getByLabelText(/Password/), 's3' + 'cret');
    await user.click(screen.getByRole('checkbox', { name: 'Remember me' }));
    await user.click(screen.getByRole('button', { name: 'Sign in' }));
    await waitFor(() =>
      expect(onLogin).toHaveBeenCalledWith({
        username: 'ada',
        password: 's3' + 'cret',
        rememberMe: true,
      })
    );
    expect(localStorage.getItem('dx-login-username')).toBe('ada');
  });

  it('prefills the remembered username', () => {
    localStorage.setItem('dx-login-username', 'ada');
    render(<Login onLogin={() => {}} />);
    expect(screen.getByLabelText(/Username/)).toHaveValue('ada');
    localStorage.clear();
  });

  it('shows loading state while the login promise pends', async () => {
    const user = userEvent.setup();
    let resolve!: () => void;
    const gate = new Promise<void>((r) => {
      resolve = r;
    });
    render(<Login onLogin={() => gate} />);
    await user.type(screen.getByLabelText(/Username/), 'ada');
    await user.type(screen.getByLabelText(/Password/), 's3' + 'cret');
    await user.click(screen.getByRole('button', { name: 'Sign in' }));
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeDisabled();
    resolve();
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Sign in' })).toBeEnabled()
    );
  });

  it('fires register and forgot-password events', async () => {
    const user = userEvent.setup();
    const onRegister = vi.fn();
    const onForgotPassword = vi.fn();
    render(
      <Login
        onLogin={() => {}}
        onRegister={onRegister}
        onForgotPassword={onForgotPassword}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Create account' }));
    await user.click(screen.getByRole('button', { name: 'Forgot password?' }));
    expect(onRegister).toHaveBeenCalledTimes(1);
    expect(onForgotPassword).toHaveBeenCalledTimes(1);
  });

  it('renders a native form when action is set without onLogin', () => {
    render(<Login action="/login" />);
    const form = document.querySelector('form')!;
    expect(form.getAttribute('action')).toBe('/login');
    expect(form.getAttribute('method')).toBe('post');
  });
});
