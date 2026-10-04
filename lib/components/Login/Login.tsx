import { useState, type FormEvent, type ReactNode } from 'react';
import { Button } from '../Button/Button';
import { CheckBox } from '../CheckBox/CheckBox';
import { Field } from '../Field/Field';
import { Password } from '../Password/Password';
import { TextBox } from '../TextBox/TextBox';
import styles from './Login.module.css';

export interface LoginCredentials {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginProps {
  /**
   * Native form endpoint. When set without `onLogin`, the form posts
   * natively (SPA apps pass `onLogin` instead and the submit is
   * intercepted).
   */
  action?: string;
  method?: string;
  /** SPA submit: called with the credentials; may be async (pending state). */
  onLogin?: (creds: LoginCredentials) => void | Promise<void>;
  onRegister?: () => void;
  onForgotPassword?: () => void;
  registerContent?: ReactNode;
  forgotPasswordContent?: ReactNode;
  /** Show the remember-me checkbox. Defaults to true. */
  rememberMe?: boolean;
  /** External loading state (OR-ed with the internal pending state). */
  loading?: boolean;
  title?: ReactNode;
  usernameLabel?: string;
  passwordLabel?: string;
  submitText?: string;
  /** Username persistence key for remember-me. Null disables. */
  storageKey?: string | null;
  className?: string;
}

const USERNAME_KEY = 'dx-login-username';

function readStored(key: string | null | undefined): string | undefined {
  const resolved = key === undefined ? USERNAME_KEY : key;
  if (resolved === null) return undefined;
  try {
    if (typeof localStorage === 'undefined') return undefined;
    return localStorage.getItem(resolved) ?? undefined;
  } catch {
    return undefined;
  }
}

function writeStored(key: string | null | undefined, username: string): void {
  const resolved = key === undefined ? USERNAME_KEY : key;
  if (resolved === null) return;
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(resolved, username);
  } catch {
    /* persistence is best-effort */
  }
}

function clearStored(key: string | null | undefined): void {
  const resolved = key === undefined ? USERNAME_KEY : key;
  if (resolved === null) return;
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.removeItem(resolved);
  } catch {
    /* persistence is best-effort */
  }
}

export function Login({
  action,
  method = 'post',
  onLogin,
  onRegister,
  onForgotPassword,
  registerContent,
  forgotPasswordContent,
  rememberMe = true,
  loading = false,
  title,
  usernameLabel = 'Username',
  passwordLabel = 'Password',
  submitText = 'Sign in',
  storageKey,
  className,
}: LoginProps) {
  const [username, setUsername] = useState(() => readStored(storageKey) ?? '');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const busy = loading || pending;
  const native = action != null && onLogin == null;

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    if (!native) e.preventDefault();
    const next: typeof errors = {};
    if (!username.trim()) next.username = 'Username is required.';
    if (!password) next.password = 'Password is required.';
    setErrors(next);
    if (next.username || next.password || !onLogin) return;
    setPending(true);
    try {
      await onLogin({
        username: username.trim(),
        password,
        rememberMe: remember,
      });
      if (remember) writeStored(storageKey, username.trim());
      else clearStored(storageKey);
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      className={[styles.login, className].filter(Boolean).join(' ')}
      action={native ? action : undefined}
      method={native ? method : undefined}
      noValidate
      onSubmit={(e) => void submit(e)}
    >
      {title != null && <div className={styles.title}>{title}</div>}
      <Field label={usernameLabel} required error={errors.username}>
        {({ inputId }) => (
          <TextBox
            id={inputId}
            value={username}
            autoComplete="username"
            disabled={busy}
            aria-invalid={errors.username ? true : undefined}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors((prev) => ({ ...prev, username: undefined }));
            }}
          />
        )}
      </Field>
      <Field label={passwordLabel} required error={errors.password}>
        {({ inputId }) => (
          <Password
            id={inputId}
            value={password}
            autoComplete="current-password"
            disabled={busy}
            aria-invalid={errors.password ? true : undefined}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: undefined }));
            }}
          />
        )}
      </Field>
      {rememberMe && (
        <label className={styles.remember}>
          <CheckBox
            checked={remember}
            disabled={busy}
            onChange={(e) => setRemember(e.target.checked)}
          />{' '}
          Remember me
        </label>
      )}
      <Button type="submit" loading={busy} disabled={busy}>
        {submitText}
      </Button>
      {(forgotPasswordContent ?? onForgotPassword) && (
        <button
          type="button"
          className={styles.link}
          onClick={() => onForgotPassword?.()}
        >
          {forgotPasswordContent ?? 'Forgot password?'}
        </button>
      )}
      {(registerContent ?? onRegister) && (
        <button
          type="button"
          className={styles.link}
          onClick={() => onRegister?.()}
        >
          {registerContent ?? 'Create account'}
        </button>
      )}
    </form>
  );
}
