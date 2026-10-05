import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ToggleButton } from './ToggleButton';

describe('ToggleButton', () => {
  it('renders a button with the accessible name', () => {
    render(<ToggleButton>Bold</ToggleButton>);
    expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument();
  });

  it('defaults to aria-pressed=false', () => {
    render(<ToggleButton>Bold</ToggleButton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
  });

  it('toggles on click and notifies onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ToggleButton onChange={onChange}>Bold</ToggleButton>);
    const button = screen.getByRole('button', { name: 'Bold' });
    await user.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(button.className).toContain('pressed');
    expect(onChange).toHaveBeenCalledWith(true);
    await user.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('respects the controlled pressed prop over clicks', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <ToggleButton pressed onChange={onChange}>
        Bold
      </ToggleButton>
    );
    const button = screen.getByRole('button', { name: 'Bold' });
    expect(button).toHaveAttribute('aria-pressed', 'true');
    await user.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('keeps the consumer onClick alongside the toggle', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const onChange = vi.fn();
    render(
      <ToggleButton onClick={onClick} onChange={onChange}>
        Bold
      </ToggleButton>
    );
    const button = screen.getByRole('button', { name: 'Bold' });
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('passes fullWidth through to the button', () => {
    render(<ToggleButton fullWidth>Wide</ToggleButton>);
    expect(screen.getByRole('button', { name: 'Wide' }).className).toContain(
      'fullWidth'
    );
  });

  it('starts from defaultPressed', () => {
    render(<ToggleButton defaultPressed>Bold</ToggleButton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <ToggleButton disabled onChange={onChange}>
        Bold
      </ToggleButton>
    );
    const button = screen.getByRole('button', { name: 'Bold' });
    await user.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('forwards its ref to the underlying button', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<ToggleButton ref={ref}>Bold</ToggleButton>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('passes the Button axis through (variant, severity, shade, size)', () => {
    render(
      <ToggleButton
        variant="outlined"
        severity="info"
        shade="dark"
        size="sm"
        fullWidth
      >
        Bold
      </ToggleButton>
    );
    const button = screen.getByRole('button', { name: 'Bold' });
    expect(button.className).toContain('outlined');
    expect(button.className).toContain('style-info');
    expect(button.className).toContain('shade-dark');
    expect(button.className).toContain('sm');
    expect(button.className).toContain('fullWidth');
    expect(button.className).toContain('dx-ripple');
  });

  it('applies the Radzen toggle axis while pressed', () => {
    // Radzen defaults: ToggleShade=Darker, ToggleButtonStyle=Primary,
    // ToggleVariant=null → base variant.
    const { rerender } = render(
      <ToggleButton defaultPressed>Bold</ToggleButton>
    );
    let button = screen.getByRole('button', { name: 'Bold' });
    expect(button.className).toContain('shade-darker');
    expect(button.className).toContain('style-primary');
    expect(button.className).toContain('filled');

    rerender(
      <ToggleButton
        defaultPressed
        variant="outlined"
        severity="success"
        toggleVariant="text"
        toggleSeverity="warning"
        toggleShade="lighter"
      >
        Bold
      </ToggleButton>
    );
    button = screen.getByRole('button', { name: 'Bold' });
    expect(button.className).toContain('text');
    expect(button.className).toContain('style-warning');
    expect(button.className).toContain('shade-lighter');
    expect(button.className).not.toContain('outlined');
    expect(button.className).not.toContain('style-success');
  });

  it('swaps to toggleContent while pressed', () => {
    const { rerender } = render(
      <ToggleButton toggleContent={<span data-testid="on">On</span>}>
        Off
      </ToggleButton>
    );
    expect(screen.queryByTestId('on')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Off' })).toBeInTheDocument();

    rerender(
      <ToggleButton pressed toggleContent={<span data-testid="on">On</span>}>
        Off
      </ToggleButton>
    );
    expect(screen.getByTestId('on')).toBeInTheDocument();
    expect(screen.queryByText('Off')).not.toBeInTheDocument();
  });

  it('marks loading buttons busy and skips the toggle', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <ToggleButton loading onChange={onChange}>
        Bold
      </ToggleButton>
    );
    const button = screen.getByRole('button', { name: 'Bold' });
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();
    await user.click(button);
    expect(onChange).not.toHaveBeenCalled();
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('renders nothing when visible is false', () => {
    const { container } = render(
      <ToggleButton visible={false}>Bold</ToggleButton>
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('stacks the hover wash over the pressed state layer', () => {
    // Button's flat/outlined/text hover rule sets the same
    // `background-image` at equal specificity — the hover rule must
    // carry both layers or pressing + hovering renders no change.
    const here = dirname(fileURLToPath(import.meta.url));
    const css = readFileSync(join(here, 'ToggleButton.module.css'), 'utf8');
    const hoverRule = css.match(/\.pressed:hover[^{]*\{[^}]*\}/)?.[0] ?? '';
    expect(hoverRule).toContain('0.1');
    expect(hoverRule).toContain('0.06');
    expect(hoverRule.match(/linear-gradient/g)).toHaveLength(2);
  });
});
