import { render } from '@testing-library/react';
import axe from 'axe-core';
import { describe, it, expect } from 'vitest';
import { PanelMenu, PanelMenuItem } from './PanelMenu';

describe('PanelMenu a11y', () => {
  it('has no axe violations (basic)', async () => {
    const { container } = render(
      <PanelMenu ariaLabel="Panel menu">
        <PanelMenuItem text="Dashboard" icon="home" path="/dashboard" />
        <PanelMenuItem text="Settings">
          <PanelMenuItem text="Profile" path="/profile" />
        </PanelMenuItem>
      </PanelMenu>
    );
    const results = await axe.run(container);
    expect(results.violations).toEqual([]);
  });
});
