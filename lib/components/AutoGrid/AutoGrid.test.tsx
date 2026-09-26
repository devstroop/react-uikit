import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AutoGrid } from './AutoGrid';

describe('AutoGrid', () => {
  it('renders children in an auto-fit grid with default min', () => {
    const { container } = render(
      <AutoGrid>
        <span>a</span>
        <span>b</span>
      </AutoGrid>
    );
    const grid = container.firstElementChild as HTMLElement;
    expect(grid.style.getPropertyValue('--dx-autogrid-min')).toBe('240px');
    expect(screen.getByText('a')).toBeInTheDocument();
  });

  it('applies numeric min as px and tier gaps as classes', () => {
    const { container } = render(
      <AutoGrid min={160} gap="lg">
        <span>a</span>
      </AutoGrid>
    );
    const grid = container.firstElementChild as HTMLElement;
    expect(grid.style.getPropertyValue('--dx-autogrid-min')).toBe('160px');
    expect(grid.className).toMatch(/gapLg/);
  });

  it('applies numeric gaps as inline px and string mins verbatim', () => {
    const { container } = render(
      <AutoGrid min="20ch" gap={10}>
        <span>a</span>
      </AutoGrid>
    );
    const grid = container.firstElementChild as HTMLElement;
    expect(grid.style.getPropertyValue('--dx-autogrid-min')).toBe('20ch');
    expect(grid.style.gap).toBe('10px');
  });

  it('renders nothing when visible is false', () => {
    const { container } = render(
      <AutoGrid visible={false}>
        <span>a</span>
      </AutoGrid>
    );
    expect(container).toBeEmptyDOMElement();
  });
});
