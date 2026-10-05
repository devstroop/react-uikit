import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { RangeNavigator } from './RangeNavigator';

function rect(el: Element, left: number, width: number) {
  vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({
    x: left,
    y: 0,
    left,
    top: 0,
    right: left + width,
    bottom: 0,
    width,
    height: 0,
    toJSON: () => ({}),
  });
}

describe('RangeNavigator', () => {
  it('renders two sliders with the window values', () => {
    render(
      <RangeNavigator
        min={0}
        max={100}
        defaultValue={{ start: 20, end: 80 }}
        ariaLabel="Zoom"
      />
    );
    expect(
      screen.getByRole('slider', { name: 'Window start' })
    ).toHaveAttribute('aria-valuenow', '20');
    expect(screen.getByRole('slider', { name: 'Window end' })).toHaveAttribute(
      'aria-valuenow',
      '80'
    );
  });

  it('arrow keys move the focused handle and fire onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RangeNavigator
        min={0}
        max={100}
        defaultValue={{ start: 20, end: 80 }}
        onChange={onChange}
      />
    );
    const start = screen.getByRole('slider', { name: 'Window start' });
    start.focus();
    await user.keyboard('{ArrowRight}');
    expect(onChange).toHaveBeenLastCalledWith({ start: 21, end: 80 });
  });

  it('clamps the window to the domain and minSpan', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RangeNavigator
        min={0}
        max={100}
        defaultValue={{ start: 20, end: 80 }}
        minSpan={10}
        onChange={onChange}
      />
    );
    const end = screen.getByRole('slider', { name: 'Window end' });
    end.focus();
    for (let i = 0; i < 80; i++) {
      await user.keyboard('{ArrowLeft}');
    }
    const last = onChange.mock.calls.at(-1)?.[0];
    expect(last.end - last.start).toBeGreaterThanOrEqual(10);
    expect(last.end).toBeLessThanOrEqual(100);
  });

  it('dragging a handle moves it (pointer geometry stubbed)', () => {
    const onChange = vi.fn();
    const { container } = render(
      <RangeNavigator
        min={0}
        max={100}
        defaultValue={{ start: 20, end: 80 }}
        onChange={onChange}
      />
    );
    const track = container.querySelector('[class*="track"]')!;
    rect(track, 0, 280);
    const start = screen.getByRole('slider', { name: 'Window start' });
    fireEvent.pointerDown(start);
    fireEvent.pointerMove(document, { clientX: 140 });
    fireEvent.pointerUp(document);
    expect(onChange).toHaveBeenLastCalledWith({ start: 50, end: 80 });
  });

  it('controlled mode follows the value prop', () => {
    const { rerender } = render(
      <RangeNavigator
        min={0}
        max={100}
        value={{ start: 10, end: 90 }}
        onChange={() => {}}
      />
    );
    expect(
      screen.getByRole('slider', { name: 'Window start' })
    ).toHaveAttribute('aria-valuenow', '10');
    rerender(
      <RangeNavigator
        min={0}
        max={100}
        value={{ start: 30, end: 60 }}
        onChange={() => {}}
      />
    );
    expect(
      screen.getByRole('slider', { name: 'Window start' })
    ).toHaveAttribute('aria-valuenow', '30');
  });
});
