import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Fieldset } from './Fieldset';

describe('Fieldset', () => {
  it('renders native fieldset semantics with a legend', () => {
    render(
      <Fieldset text="Address">
        <span>fields</span>
      </Fieldset>
    );
    expect(screen.getByRole('group', { name: 'Address' }).tagName).toBe(
      'FIELDSET'
    );
    expect(screen.getByText('fields')).toBeInTheDocument();
  });

  it('omits the legend when untitled and not collapsible', () => {
    const { container } = render(
      <Fieldset>
        <span>fields</span>
      </Fieldset>
    );
    expect(container.querySelector('legend')).toBeNull();
  });

  it('names the toggle from custom labels only when untitled', () => {
    render(
      <Fieldset
        allowCollapse
        expandAriaLabel="Show more"
        collapseAriaLabel="Show less"
      >
        <span>fields</span>
      </Fieldset>
    );
    expect(
      screen.getByRole('button', { name: 'Show less' })
    ).toBeInTheDocument();
  });

  it('toggles collapse with aria wiring', async () => {
    const user = userEvent.setup();
    const onCollapse = vi.fn();
    const onExpand = vi.fn();
    render(
      <Fieldset
        text="Advanced"
        allowCollapse
        onCollapse={onCollapse}
        onExpand={onExpand}
      >
        <span>hidden</span>
      </Fieldset>
    );
    const toggle = screen.getByRole('button', { name: 'Advanced' });
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAttribute('title', 'Collapse');
    await user.click(toggle);
    expect(screen.getByText('hidden')).not.toBeVisible();
    expect(onCollapse).toHaveBeenCalledTimes(1);
    const expanded = screen.getByRole('button', { name: 'Advanced' });
    expect(expanded).toHaveAttribute('aria-expanded', 'false');
    expect(expanded).toHaveAttribute('title', 'Expand');
    await user.click(expanded);
    expect(screen.getByText('hidden')).toBeInTheDocument();
    expect(onExpand).toHaveBeenCalledTimes(1);
  });

  it('toggles with Enter and Space keys', async () => {
    const user = userEvent.setup();
    render(
      <Fieldset text="Advanced" allowCollapse>
        <span>hidden</span>
      </Fieldset>
    );
    const toggle = screen.getByRole('button', { name: 'Advanced' });
    toggle.focus();
    await user.keyboard('{Enter}');
    expect(screen.getByText('hidden')).not.toBeVisible();
    await user.keyboard(' ');
    expect(screen.getByText('hidden')).toBeInTheDocument();
  });

  it('shows the summary only while collapsed', () => {
    const { rerender } = render(
      <Fieldset text="Advanced" allowCollapse summary="3 set">
        <span>hidden</span>
      </Fieldset>
    );
    expect(screen.queryByText('3 set')).not.toBeInTheDocument();
    rerender(
      <Fieldset text="Advanced" allowCollapse collapsed summary="3 set">
        <span>hidden</span>
      </Fieldset>
    );
    expect(screen.getByText('3 set')).toBeInTheDocument();
    expect(screen.getByText('hidden')).not.toBeVisible();
  });

  it('honors controlled collapsed state', () => {
    const { rerender } = render(
      <Fieldset text="Advanced" allowCollapse collapsed>
        <span>hidden</span>
      </Fieldset>
    );
    expect(screen.getByText('hidden')).not.toBeVisible();
    rerender(
      <Fieldset text="Advanced" allowCollapse collapsed={false}>
        <span>hidden</span>
      </Fieldset>
    );
    expect(screen.getByText('hidden')).toBeInTheDocument();
  });

  it('renders nothing when visible is false', () => {
    const { container } = render(
      <Fieldset text="Advanced" visible={false}>
        <span>hidden</span>
      </Fieldset>
    );
    expect(container).toBeEmptyDOMElement();
  });
});
