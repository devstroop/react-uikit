import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormField } from './FormField';

const HERE = dirname(fileURLToPath(import.meta.url));

describe('FormField', () => {
  it('renders text, control, and helper', () => {
    render(
      <FormField text="Email" helper="We never share it.">
        <input type="text" />
      </FormField>
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('We never share it.')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('floats by default and honors the variant', () => {
    const { container, rerender } = render(
      <FormField text="Name" variant="filled">
        <input type="text" />
      </FormField>
    );
    const root = container.firstElementChild;
    expect(root?.className).toContain('floating');
    expect(root?.className).toContain('filled');
    rerender(
      <FormField text="Name" variant="flat" allowFloatingLabel={false}>
        <input type="text" />
      </FormField>
    );
    expect(container.firstElementChild?.className).toContain('flat');
    expect(container.firstElementChild?.className).not.toContain('floating');
  });

  it('renders start and end adornments inside the box', () => {
    render(
      <FormField
        text="Search"
        start={<span aria-hidden="true">S</span>}
        end={<button type="button">Clear</button>}
      >
        <input type="text" />
      </FormField>
    );
    expect(screen.getByText('S')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
  });

  it('associates the label with a backfilled DOM child id', () => {
    render(
      <FormField text="Email">
        <input type="text" />
      </FormField>
    );
    const input = screen.getByRole('textbox');
    const id = input.getAttribute('id');
    expect(id).toBeTruthy();
    expect(screen.getByText('Email').getAttribute('for')).toBe(id);
  });

  it('passes generated ids to render-prop children', () => {
    render(
      <FormField text="Email">
        {({ inputId }) => <input type="text" id={inputId} />}
      </FormField>
    );
    const input = screen.getByRole('textbox');
    expect(screen.getByText('Email').getAttribute('for')).toBe(
      input.getAttribute('id')
    );
  });

  it('leaves the label unassociated when the id cannot exist', () => {
    const Custom = () => <span>custom</span>;
    render(<FormField text="Custom">{<Custom />}</FormField>);
    expect(screen.getByText('Custom')).not.toHaveAttribute('for');
  });

  it('backfills a blank placeholder for the float trigger', () => {
    render(
      <FormField text="Name">
        <input type="text" />
      </FormField>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', ' ');
  });

  it('respects an explicit placeholder over the blank', () => {
    render(
      <FormField text="Name">
        <input type="text" placeholder="Jane" />
      </FormField>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Jane');
  });

  it('leaves placeholder alone on non-text controls', () => {
    render(
      <FormField text="Country">
        <select>
          <option value="a">A</option>
        </select>
      </FormField>
    );
    expect(screen.getByRole('combobox')).not.toHaveAttribute('placeholder');
  });

  it('wires helper via aria-describedby and invalid via aria-invalid', () => {
    render(
      <FormField text="Amount" helper="Must be positive." invalid>
        <input type="text" />
      </FormField>
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    const describedby = input.getAttribute('aria-describedby') ?? '';
    const helper = screen.getByText('Must be positive.');
    expect(helper.getAttribute('id')).toBeTruthy();
    expect(describedby.split(' ')).toContain(helper.getAttribute('id'));
  });

  it('does not clone custom components without a helper', () => {
    const Custom = (props: Record<string, unknown>) => (
      <span {...props}>custom</span>
    );
    const { container } = render(
      <FormField text="Custom">{<Custom />}</FormField>
    );
    expect(container.querySelector('span')).not.toHaveAttribute('id');
    expect(screen.getByText('Custom')).not.toHaveAttribute('for');
  });

  it('skips the blank placeholder on checkbox and date inputs', () => {
    render(
      <FormField text="Agree">
        <input type="checkbox" />
      </FormField>
    );
    const box = screen.getByRole('checkbox');
    expect(box).not.toHaveAttribute('placeholder');
    expect(box.getAttribute('id')).toBeTruthy();
  });

  it('reaches custom components with invalid alone via aria-invalid', () => {
    const Custom = (props: Record<string, unknown>) => (
      <input type="text" {...props} />
    );
    render(
      <FormField text="Code" invalid>
        {<Custom />}
      </FormField>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('leaves fragments uncloned with no label association', () => {
    render(
      <FormField text="Pair" helper="Two boxes.">
        <>
          <input type="text" aria-label="First" />
          <input type="text" aria-label="Second" />
        </>
      </FormField>
    );
    expect(screen.getByText('Pair')).not.toHaveAttribute('for');
    expect(screen.getByText('Two boxes.')).toBeInTheDocument();
  });

  it('marks invalid and required', () => {
    const { container } = render(
      <FormField text="Name" required invalid helper="Required.">
        <input type="text" />
      </FormField>
    );
    expect(container.firstElementChild?.className).toContain('invalid');
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders nothing when visible is false', () => {
    const { container } = render(
      <FormField text="Name" visible={false}>
        <input type="text" />
      </FormField>
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('never backfills ids onto wrapper elements', () => {
    const { container } = render(
      <FormField text="Password">
        <span className="field-control">
          <input type="password" />
        </span>
      </FormField>
    );
    // No duplicate/dangling target: the wrapper carries no id, and the
    // label carries no htmlFor without an explicit `component` id.
    expect(container.querySelector('.field-control')).not.toHaveAttribute('id');
    expect(screen.getByText('Password')).not.toHaveAttribute('for');
  });

  it('associates wrappers via an explicit component id', () => {
    render(
      <FormField text="Password" component="pw">
        <span className="field-control">
          <input type="password" id="pw" />
        </span>
      </FormField>
    );
    expect(screen.getByText('Password')).toHaveAttribute('for', 'pw');
    expect(screen.getByLabelText('Password').getAttribute('id')).toBe('pw');
  });

  it('owns floating box height per inner data-size', () => {
    // Sizing contract (Radzen filled-field parity): the box grows to a
    // field token while inner controls surrender fixed heights.
    const css = readFileSync(join(HERE, 'FormField.module.css'), 'utf8');
    const tokens = readFileSync(
      join(HERE, '..', '..', 'styles', 'tokens.css'),
      'utf8'
    );
    for (const size of ['xs', 'sm', 'md', 'lg', 'xl']) {
      expect(tokens).toContain(`--dx-field-height-${size}:`);
      expect(tokens).toContain(`--dx-field-padding-${size}:`);
    }
    // md is the default (base rules, no qualifier); other tiers key
    // off the inner control's data-size hook.
    for (const size of ['xs', 'sm', 'lg', 'xl']) {
      expect(css).toContain(`[data-size='${size}']`);
    }
    expect(css).toContain('min-height: var(--dx-field-height-md)');
    expect(css).toMatch(
      /\.floating \.content > input,\s*\.floating \.content > textarea,\s*\.floating \.content > select\s*{[^}]*height: auto/
    );
  });
});
