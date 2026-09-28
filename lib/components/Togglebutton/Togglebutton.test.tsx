import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Togglebutton } from './Togglebutton';

describe('Togglebutton', () => {
  it('renders a button with the accessible name', () => {
    render(<Togglebutton>Bold</Togglebutton>);
    expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument();
  });

  it('defaults to aria-pressed=false', () => {
    render(<Togglebutton>Bold</Togglebutton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
  });

  it('toggles on click and notifies onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Togglebutton onChange={onChange}>Bold</Togglebutton>);
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
      <Togglebutton pressed onChange={onChange}>
        Bold
      </Togglebutton>
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
      <Togglebutton onClick={onClick} onChange={onChange}>
        Bold
      </Togglebutton>
    );
    const button = screen.getByRole('button', { name: 'Bold' });
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('starts from defaultPressed', () => {
    render(<Togglebutton defaultPressed>Bold</Togglebutton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Togglebutton disabled onChange={onChange}>
        Bold
      </Togglebutton>
    );
    const button = screen.getByRole('button', { name: 'Bold' });
    await user.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('forwards its ref to the underlying button', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Togglebutton ref={ref}>Bold</Togglebutton>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('passes the Button axis through (variant, severity, shade, size)', () => {
    render(
      <Togglebutton
        variant="outlined"
        severity="info"
        shade="dark"
        size="sm"
        fullWidth
      >
        Bold
      </Togglebutton>
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
      <Togglebutton defaultPressed>Bold</Togglebutton>
    );
    let button = screen.getByRole('button', { name: 'Bold' });
    expect(button.className).toContain('shade-darker');
    expect(button.className).toContain('style-primary');
    expect(button.className).toContain('filled');

    rerender(
      <Togglebutton
        defaultPressed
        variant="outlined"
        severity="success"
        toggleVariant="text"
        toggleSeverity="warning"
        toggleShade="lighter"
      >
        Bold
      </Togglebutton>
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
      <Togglebutton toggleContent={<span data-testid="on">On</span>}>
        Off
      </Togglebutton>
    );
    expect(screen.queryByTestId('on')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Off' })).toBeInTheDocument();

    rerender(
      <Togglebutton pressed toggleContent={<span data-testid="on">On</span>}>
        Off
      </Togglebutton>
    );
    expect(screen.getByTestId('on')).toBeInTheDocument();
    expect(screen.queryByText('Off')).not.toBeInTheDocument();
  });

  it('marks loading buttons busy and skips the toggle', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Togglebutton loading onChange={onChange}>
        Bold
      </Togglebutton>
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
      <Togglebutton visible={false}>Bold</Togglebutton>
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('stacks the hover wash over the pressed state layer', () => {
    // Button's flat/outlined/text hover rule sets the same
    // `background-image` at equal specificity — the hover rule must
    // carry both layers or pressing + hovering renders no change.
    const here = dirname(fileURLToPath(import.meta.url));
    const css = readFileSync(join(here, 'Togglebutton.module.css'), 'utf8');
    const hoverRule = css.match(/\.pressed:hover[^{]*\{[^}]*\}/)?.[0] ?? '';
    expect(hoverRule).toContain('0.1');
    expect(hoverRule).toContain('0.06');
    expect(hoverRule.match(/linear-gradient/g)).toHaveLength(2);
  });
});
