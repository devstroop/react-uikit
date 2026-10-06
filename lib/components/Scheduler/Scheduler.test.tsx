import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Scheduler } from './Scheduler';

const events = [
  {
    id: '1',
    title: 'Meeting',
    start: new Date('2024-01-15T10:00:00'),
    end: new Date('2024-01-15T11:00:00'),
  },
  {
    id: '2',
    title: 'Lunch',
    start: new Date('2024-01-15T12:00:00'),
    end: new Date('2024-01-15T13:00:00'),
  },
];

describe('Scheduler', () => {
  it('renders grid and events', () => {
    render(<Scheduler data={events} date={new Date('2024-01-15')} />);
    expect(
      screen.getByRole('group', { name: 'Scheduler' })
    ).toBeInTheDocument();
    expect(screen.getByText('Meeting')).toBeInTheDocument();
  });
  it('calls onEventClick', () => {
    const fn = vi.fn();
    render(
      <Scheduler
        data={events}
        date={new Date('2024-01-15')}
        onEventClick={fn}
      />
    );
    fireEvent.click(screen.getByText('Meeting'));
    expect(fn).toHaveBeenCalled();
  });
  it('calls onSlotClick', () => {
    const fn = vi.fn();
    render(
      <Scheduler data={events} date={new Date('2024-01-15')} onSlotClick={fn} />
    );
    const days = screen.getAllByLabelText(/2024/);
    fireEvent.click(days[0]!);
    expect(fn).toHaveBeenCalled();
  });
  it('navigates dates', () => {
    const fn = vi.fn();
    render(
      <Scheduler
        data={events}
        date={new Date('2024-01-15')}
        onDateChange={fn}
      />
    );
    fireEvent.click(screen.getByLabelText('Next'));
    expect(fn).toHaveBeenCalled();
  });
  it('exposes the day column as a labelled group, not presentation', () => {
    render(
      <Scheduler data={events} date={new Date('2024-12-02')} view="day" />
    );
    const day = screen.getAllByLabelText(/2024/)[0]!;
    expect(day).toHaveAttribute('role', 'group');
    expect(day.getAttribute('aria-label')).toContain('2024');
  });
  it('renders resource labels as plain visible text', () => {
    render(
      <Scheduler
        data={[]}
        date={new Date('2024-12-02')}
        view="day"
        resources={[{ id: 'r1', name: 'Room A' }]}
      />
    );
    const res = screen.getByText('Room A');
    expect(res).not.toHaveAttribute('role');
    expect(res).not.toHaveAttribute('aria-label');
  });
  it('fires onSlotClick once for an hour slot, with the hour set', () => {
    const fn = vi.fn();
    render(
      <Scheduler
        data={events}
        date={new Date('2024-12-02')}
        view="day"
        onSlotClick={fn}
      />
    );
    const day = screen.getAllByLabelText(/2024/)[0]!;
    const slot = Array.from(day.children).find(
      (el) => el.tagName === 'DIV' && el.textContent === ''
    );
    expect(slot).toBeDefined();
    fireEvent.click(slot!);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn.mock.calls[0]![0].date.getHours()).toBe(8);
  });
});
