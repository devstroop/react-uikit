import { useRef, useState, type CSSProperties } from 'react';
import {
  AutoComplete,
  Button,
  CheckBox,
  CheckBoxList,
  ColorPicker,
  type ColorPickerProps,
  DatePicker,
  DropZone,
  DropDown,
  Field,
  Fieldset,
  Form,
  FormField,
  Input,
  Label,
  ListBox,
  Mask,
  Numeric,
  Password,
  RadioButtonList,
  Rating,
  Select,
  SelectBar,
  SecurityCode,
  SignaturePad,
  type SignaturePadHandle,
  Slider,
  Stack,
  Switch,
  Text,
  TextArea,
  TextBox,
  TimeSpanPicker,
  Upload,
  type UploadHandle,
  email,
  maxLength,
  minLength,
  pattern,
  required,
  useFormField,
} from '../../lib/main';
import { Code } from './shared/Code';
import { DemoPage } from './demo-page';
import { EventLog } from './shared/EventLog';
import { KeyboardTable } from './shared/KeyboardTable';

/** Cards clip by design; popup demos need the overflow escape hatch. */
const POPUP_CARD: CSSProperties = { overflow: 'visible' };

const PAIR_OPTIONS = [
  { value: 'a', label: 'Alpha' },
  { value: 'b', label: 'Beta' },
  { value: 'c', label: 'Gamma', disabled: true },
];

const SELECT_ALL_ITEMS = ['Alpha', 'Beta', 'Gamma'];

/** Tri-state "Select all" — the canonical indeterminate checkbox demo. */
function SelectAllDemo() {
  const [selected, setSelected] = useState<string[]>(['Alpha']);
  const all = selected.length === SELECT_ALL_ITEMS.length;
  const none = selected.length === 0;
  return (
    <Stack orientation="vertical" gap={8}>
      <label>
        <CheckBox
          checked={all}
          indeterminate={!all && !none}
          onChange={(e) =>
            setSelected(e.target.checked ? [...SELECT_ALL_ITEMS] : [])
          }
        />{' '}
        Select all
      </label>
      <Stack orientation="horizontal" gap={12}>
        {SELECT_ALL_ITEMS.map((item) => (
          <label key={item}>
            <CheckBox
              checked={selected.includes(item)}
              onChange={(e) =>
                setSelected((prev) =>
                  e.target.checked
                    ? [...prev, item]
                    : prev.filter((value) => value !== item)
                )
              }
            />{' '}
            {item}
          </label>
        ))}
      </Stack>
      <Text textStyle="Body2" className="dx-text-muted">
        Selected: {selected.length ? selected.join(', ') : '(none)'}
      </Text>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Form
// ---------------------------------------------------------------------------

function LoginFormFields() {
  const name = useFormField('name', {
    validate: [required('Name is required.')],
  });
  const emailField = useFormField('email', {
    validate: [required('Email is required.'), email('Enter a valid email.')],
  });
  return (
    <>
      <Field label="Name" required error={name.errors[0]}>
        {({ inputId }) => (
          <Input
            id={inputId}
            value={name.value ?? ''}
            onChange={(e) => name.setValue(e.target.value)}
          />
        )}
      </Field>
      <Field label="Email" required error={emailField.errors[0]}>
        {({ inputId }) => (
          <Input
            id={inputId}
            type="email"
            value={emailField.value ?? ''}
            onChange={(e) => emailField.setValue(e.target.value)}
          />
        )}
      </Field>
    </>
  );
}

function LoginFormBody() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Form
      model={{}}
      onSubmit={() =>
        setEvents((prev) => [...prev, 'onSubmit: all validators passed'])
      }
      onInvalidSubmit={(errs) =>
        setEvents((prev) => [
          ...prev,
          ...Object.entries(errs).flatMap(([field, messages]) =>
            messages.map((m) => `onInvalidSubmit: ${field} — ${m}`)
          ),
        ])
      }
    >
      <LoginFormFields />
      <Button type="submit">Sign in</Button>
      <EventLog
        events={events}
        emptyText="Submit empty for onInvalidSubmit; fill both fields for onSubmit."
      />
    </Form>
  );
}

function ValidatorsFormFields() {
  const username = useFormField('username', {
    validate: [
      required('Username is required.'),
      pattern(/^[a-z0-9._-]+$/, 'Lowercase letters, digits, . _ - only.'),
      minLength(3, 'At least 3 characters.'),
    ],
  });
  const note = useFormField('note', {
    validate: [maxLength(40, 'Keep the note to 40 characters.')],
  });
  return (
    <>
      <Field label="Username" required error={username.errors[0]}>
        {({ inputId }) => (
          <TextBox
            id={inputId}
            autoComplete="off"
            value={username.value ?? ''}
            onChange={(e) => username.setValue(e.target.value)}
          />
        )}
      </Field>
      <Field
        label="Release note"
        hint="Optional — 40 characters max."
        error={note.errors[0]}
      >
        {({ inputId }) => (
          <TextArea
            id={inputId}
            rows={2}
            value={note.value ?? ''}
            onChange={(e) => note.setValue(e.target.value)}
          />
        )}
      </Field>
    </>
  );
}

function ValidatorsFormBody() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Form
      model={{}}
      onSubmit={() =>
        setEvents((prev) => [...prev, 'onSubmit: all validators passed'])
      }
      onInvalidSubmit={(errs) =>
        setEvents((prev) => [
          ...prev,
          ...Object.entries(errs).flatMap(([field, messages]) =>
            messages.map((m) => `onInvalidSubmit: ${field} — ${m}`)
          ),
        ])
      }
    >
      <ValidatorsFormFields />
      <Button type="submit">Validate</Button>
      <EventLog
        events={events}
        emptyText="Try a 2-character username or a 41-character note."
      />
    </Form>
  );
}

function FormStateField({ submits }: { submits: number }) {
  const nick = useFormField('nick', {
    validate: [required('Give a nickname.')],
  });
  return (
    <>
      <Field label="Nickname" error={nick.errors[0]}>
        {({ inputId }) => (
          <Input
            id={inputId}
            value={nick.value ?? ''}
            onChange={(e) => nick.setValue(e.target.value)}
          />
        )}
      </Field>
      <Button type="submit">Submit</Button>
      <Text textStyle="Body2">
        value: {nick.value ? `“${nick.value}”` : '(empty)'}
      </Text>
      <Text textStyle="Body2">
        errors: {nick.errors.length ? nick.errors.join('; ') : '(none)'}
      </Text>
      <Text textStyle="Body2">submits: {submits}</Text>
      <Text textStyle="Body2" className="dx-text-muted">
        Errors appear after the first submit and clear as you edit.
      </Text>
    </>
  );
}

function FormStateBody() {
  const [submits, setSubmits] = useState(0);
  const count = () => setSubmits((n) => n + 1);
  return (
    <Form model={{}} onSubmit={count} onInvalidSubmit={count}>
      <FormStateField submits={submits} />
    </Form>
  );
}

const FORM_KEYS = [
  { keys: 'Tab', action: 'Move to the next field or the submit button' },
  { keys: 'Shift+Tab', action: 'Move back to the previous control' },
  {
    keys: 'Enter',
    action: 'Submit the form from a text field (implicit submission)',
  },
] as const;

// ---------------------------------------------------------------------------
// Field
// ---------------------------------------------------------------------------

function FieldLabelDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Field label="Email" hint="We never share it.">
        {({ inputId }) => (
          <TextBox
            id={inputId}
            placeholder="you@zone.app"
            onFocus={() =>
              setEvents((prev) => [
                ...prev,
                'focus: input (label click or Tab)',
              ])
            }
          />
        )}
      </Field>
      <EventLog
        events={events}
        emptyText="Click the label or Tab — focus lands in the input."
      />
    </Stack>
  );
}

function FieldErrorDemo() {
  const [value, setValue] = useState('ab');
  const error =
    value.length > 0 && value.length < 5 ? 'Use at least 5 characters.' : null;
  return (
    <Stack orientation="vertical" gap={8}>
      <Field label="Display name" error={error}>
        {({ inputId }) => (
          <TextBox
            id={inputId}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </Field>
      <Text textStyle="Body2">
        error: {error ?? 'none'} — while it shows, aria-invalid=true and
        aria-describedby points at the polite live region.
      </Text>
    </Stack>
  );
}

const FIELD_KEYS = [
  { keys: 'Tab', action: 'Focus the field input' },
  { keys: 'Shift+Tab', action: 'Step back to the previous control' },
] as const;

// ---------------------------------------------------------------------------
// Fieldset
// ---------------------------------------------------------------------------

function FieldsetControlledDemo() {
  const [collapsed, setCollapsed] = useState(false);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Fieldset
        text="Advanced settings"
        allowCollapse
        collapsed={collapsed}
        onExpand={() => setEvents((prev) => [...prev, 'onExpand'])}
        onCollapse={() => setEvents((prev) => [...prev, 'onCollapse'])}
      >
        <FormField text="Region">
          {({ inputId }) => <TextBox id={inputId} placeholder="eu-west-1" />}
        </FormField>
      </Fieldset>
      <Stack orientation="horizontal" gap={8}>
        <Button onClick={() => setCollapsed(true)}>Collapse</Button>
        <Button onClick={() => setCollapsed(false)}>Expand</Button>
      </Stack>
      <EventLog
        events={events}
        emptyText="Use the legend toggle or the buttons — events land here."
      />
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Input / TextBox / TextArea / Password / Mask / Label
// ---------------------------------------------------------------------------

function InputBasicDemo() {
  const [value, setValue] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Input
        aria-label="Alias demo"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setEvents((prev) => [...prev, `onChange: “${e.target.value}”`]);
        }}
      />
      <Text textStyle="Body2">value: {value ? `“${value}”` : '(empty)'}</Text>
      <EventLog
        events={events}
        emptyText="Type — Input behaves exactly as TextBox."
      />
    </Stack>
  );
}

const INPUT_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

function TextBoxBasicDemo() {
  const [value, setValue] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <TextBox
        aria-label="Username"
        maxLength={40}
        autoComplete="off"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setEvents((prev) => [
            ...prev,
            `onChange: ${e.target.value.length} chars`,
          ]);
        }}
      />
      <Text textStyle="Body2">{value.length}/40 characters</Text>
      <EventLog
        events={events}
        emptyText="Type — every keystroke lands in the log."
      />
    </Stack>
  );
}

const TEXTBOX_TYPES = [
  { type: 'email', label: 'Email', placeholder: 'you@zone.app' },
  { type: 'tel', label: 'Phone', placeholder: '+1 555 0100' },
  { type: 'url', label: 'Website', placeholder: 'https://zone.app' },
] as const;

// ---------------------------------------------------------------------------
// Password
// ---------------------------------------------------------------------------

function PasswordBasicDemo() {
  const [value, setValue] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Password
        aria-label="Password"
        autoComplete="new-password"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setEvents((prev) => [
            ...prev,
            `onChange: ${e.target.value.length} characters`,
          ]);
        }}
      />
      <Text textStyle="Body2">
        {value ? `${value.length} characters stored` : '(empty)'}
      </Text>
      <EventLog
        events={events}
        emptyText="Type — only the length is logged, never the password."
      />
    </Stack>
  );
}

const PASSWORD_KEYS = [
  { keys: 'Tab', action: 'Focus the password input, then the reveal toggle' },
  {
    keys: 'Enter / Space',
    action: 'Press the toggle — aria-pressed flips with visibility',
  },
  { keys: 'Type', action: 'Characters render masked until revealed' },
] as const;

// ---------------------------------------------------------------------------
// Mask
// ---------------------------------------------------------------------------

function MaskBasicDemo() {
  const [value, setValue] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Mask
        mask="(###) ###-####"
        placeholder="(555) 000-0000"
        aria-label="Phone number"
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [...prev, `onChange: ${next || '(empty)'}`]);
        }}
      />
      <Text textStyle="Body2">value: {value ? value : '(empty)'}</Text>
      <EventLog
        events={events}
        emptyText="Type digits — the mask formats them as you go."
      />
    </Stack>
  );
}

const MASK_KEYS = [
  {
    keys: 'Digit',
    action: 'Fills the next # slot; literals appear as you type',
  },
  {
    keys: 'Backspace',
    action: 'Deletes the last digit, stepping over mask literals',
  },
  { keys: 'Any other key', action: 'Ignored — only digits are accepted' },
] as const;

// ---------------------------------------------------------------------------
// Label
// ---------------------------------------------------------------------------

function LabelBasicDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Label htmlFor="demo-label-target">Email address</Label>
      <Input
        id="demo-label-target"
        placeholder="you@zone.app"
        onFocus={() =>
          setEvents((prev) => [...prev, 'focus: input (label click or Tab)'])
        }
      />
      <EventLog
        events={events}
        emptyText="Click “Email address” — focus jumps to the input."
      />
    </Stack>
  );
}

const LABEL_KEYS = [
  { keys: 'Tab', action: 'Focus the labelled control' },
  { keys: 'Shift+Tab', action: 'Step back to the previous control' },
] as const;

// ---------------------------------------------------------------------------
// CheckBox / CheckBoxList / RadioButtonList / Switch
// ---------------------------------------------------------------------------

function CheckBoxBasicDemo() {
  const [checked, setChecked] = useState(false);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <label>
        <CheckBox
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
            setEvents((prev) => [
              ...prev,
              `onChange: ${e.target.checked ? 'checked' : 'unchecked'}`,
            ]);
          }}
        />{' '}
        Email me release notes
      </label>
      <Text textStyle="Body2">state: {checked ? 'checked' : 'unchecked'}</Text>
      <EventLog events={events} emptyText="Toggle the checkbox." />
    </Stack>
  );
}

const CHECKBOXLIST_KEYS = [
  { keys: 'Tab', action: 'Move between the checkboxes in the list' },
  { keys: 'Space', action: 'Toggle the focused checkbox' },
] as const;

function CheckBoxListDemo() {
  const [values, setValues] = useState<string[]>(['a']);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <CheckBoxList
        legend="Toppings"
        name="toppings"
        options={PAIR_OPTIONS}
        value={values}
        onChange={(next) => {
          setValues(next);
          setEvents((prev) => [...prev, `onChange: [${next.join(', ')}]`]);
        }}
      />
      <Text textStyle="Body2">
        selected: {values.length ? values.join(', ') : '(none)'}
      </Text>
      <EventLog
        events={events}
        emptyText="Toggle a row — the array lands here."
      />
    </Stack>
  );
}

const RADIO_KEYS = [
  {
    keys: 'Tab',
    action: 'Enter the group — focus lands on the selected (or first) radio',
  },
  { keys: 'Arrow keys', action: 'Move and select within the group' },
  { keys: 'Space', action: 'Select the focused radio' },
] as const;

function RadioButtonListDemo() {
  const [value, setValue] = useState('a');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <RadioButtonList
        legend="Plan"
        name="plan-basic"
        options={PAIR_OPTIONS}
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [...prev, `onChange: ${next}`]);
        }}
      />
      <Text textStyle="Body2">value: {value}</Text>
      <EventLog
        events={events}
        emptyText="Pick a plan — the value lands here."
      />
    </Stack>
  );
}

const SWITCH_KEYS = [
  { keys: 'Tab', action: 'Focus the switch' },
  { keys: 'Space', action: 'Toggle on/off (native checkbox behaviour)' },
] as const;

function SwitchBasicDemo() {
  const [on, setOn] = useState(true);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <label>
        <Switch
          checked={on}
          onChange={(e) => {
            setOn(e.target.checked);
            setEvents((prev) => [
              ...prev,
              `onChange: ${e.target.checked ? 'on' : 'off'}`,
            ]);
          }}
        />{' '}
        Notifications
      </label>
      <Text textStyle="Body2">state: {on ? 'on' : 'off'}</Text>
      <EventLog events={events} emptyText="Flip the switch." />
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Slider / Rating / SelectBar
// ---------------------------------------------------------------------------

function SliderBasicDemo() {
  const [value, setValue] = useState(40);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Slider
        label="Level"
        value={value}
        min={0}
        max={100}
        onChange={(v) => {
          if (typeof v === 'number') {
            setValue(v);
            setEvents((prev) => [...prev, `onChange: ${v}`]);
          }
        }}
      />
      <Text textStyle="Body2">value: {value}</Text>
      <EventLog
        events={events}
        emptyText="Release a handle or press an arrow key — onChange commits."
      />
    </Stack>
  );
}

function SliderRangeDemo() {
  const [range, setRange] = useState({ min: 20, max: 80 });
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Slider
        range
        label="From"
        minLabel="From"
        maxLabel="To"
        valueMin={range.min}
        valueMax={range.max}
        onChange={(v) => {
          if (typeof v !== 'number') {
            setRange(v);
            setEvents((prev) => [
              ...prev,
              `onChange: {min: ${v.min}, max: ${v.max}}`,
            ]);
          }
        }}
      />
      <Text textStyle="Body2">
        range: {range.min}–{range.max} (min handle clamped to max handle)
      </Text>
      <EventLog events={events} emptyText="Drag either handle." />
    </Stack>
  );
}

const SLIDER_KEYS = [
  { keys: 'Arrow keys', action: 'Step by step, clamped to min/max' },
  { keys: 'Home', action: 'Jump to the minimum' },
  { keys: 'End', action: 'Jump to the maximum' },
] as const;

function RatingBasicDemo() {
  const [value, setValue] = useState(3);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Rating
        ariaLabel="How was the build?"
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [...prev, `onChange: ${next}`]);
        }}
      />
      <Text textStyle="Body2">
        rating: {value ? `${value} of 5` : '(cleared)'}
      </Text>
      <EventLog
        events={events}
        emptyText="Click a star or press an arrow key — Clear resets to 0."
      />
    </Stack>
  );
}

const RATING_KEYS = [
  { keys: 'Arrow keys', action: 'Move between stars and set the rating' },
  { keys: 'Tab', action: 'Focus the rating group (or the Clear button)' },
  { keys: 'Enter / Space', action: 'Press Clear to reset the rating to 0' },
] as const;

const SELECTBAR_ROLES = [
  { value: 'rider', label: 'Rider' },
  { value: 'driver', label: 'Driver' },
  { value: 'both', label: 'Both' },
];

function SelectBarSingleDemo() {
  const [value, setValue] = useState('driver');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <SelectBar
        aria-label="Role"
        options={SELECTBAR_ROLES}
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [...prev, `onChange: ${next}`]);
        }}
      />
      <Text textStyle="Body2">value: {value}</Text>
      <EventLog
        events={events}
        emptyText="Pick a role — aria-pressed marks the pick."
      />
    </Stack>
  );
}

function SelectBarMultiDemo() {
  const [values, setValues] = useState<string[]>(['rider']);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <SelectBar
        multiple
        aria-label="Skills"
        options={SELECTBAR_ROLES}
        value={values}
        onChange={(next) => {
          setValues(next);
          setEvents((prev) => [...prev, `onChange: [${next.join(', ')}]`]);
        }}
      />
      <Text textStyle="Body2">
        values: {values.length ? values.join(', ') : '(none)'}
      </Text>
      <EventLog events={events} emptyText="Toggle one or more options." />
    </Stack>
  );
}

const SELECTBAR_KEYS = [
  { keys: 'Tab', action: 'Move between the option buttons' },
  {
    keys: 'Enter / Space',
    action: 'Press the focused option (aria-pressed flips)',
  },
] as const;

// ---------------------------------------------------------------------------
// Numeric / SecurityCode
// ---------------------------------------------------------------------------

function NumericBasicDemo() {
  const [value, setValue] = useState<number | null>(1);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Numeric
        aria-label="Quantity"
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [
            ...prev,
            `onChange: ${next === null ? 'null' : next}`,
          ]);
        }}
      />
      <Text textStyle="Body2">value: {value === null ? '(null)' : value}</Text>
      <EventLog
        events={events}
        emptyText="Use the buttons, arrow keys or type a number."
      />
    </Stack>
  );
}

function NumericLimitsDemo() {
  const [value, setValue] = useState<number | null>(2.5);
  return (
    <Stack orientation="vertical" gap={8}>
      <Numeric
        aria-label="Zoom"
        value={value}
        min={0}
        max={10}
        step={0.5}
        onChange={setValue}
      />
      <Text textStyle="Body2">
        value: {value ?? '(null)'} — arrows move 0.5 and clamp at 0…10; blur
        snaps to the nearest step.
      </Text>
    </Stack>
  );
}

const NUMERIC_KEYS = [
  { keys: 'ArrowUp', action: 'Increment by step (clamped at max)' },
  { keys: 'ArrowDown', action: 'Decrement by step (clamped at min)' },
  { keys: 'Tab', action: 'Reach the increment/decrement buttons' },
  { keys: 'Type', action: 'Digits only — symbols and letters are stripped' },
] as const;

function SecurityCodeDemo() {
  const [code, setCode] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <SecurityCode
        length={4}
        label="One-time code"
        value={code}
        onChange={(next) => {
          setCode(next);
          setEvents((prev) => [
            ...prev,
            `onChange: ${'•'.repeat(next.length)} (${next.length}/4)`,
          ]);
        }}
      />
      <Text textStyle="Body2">
        code:{' '}
        {code ? `${'•'.repeat(code.length)} (${code.length}/4)` : '(empty)'}
      </Text>
      <EventLog
        events={events}
        emptyText="Type digits — focus auto-advances across the cells."
      />
    </Stack>
  );
}

const SECURITYCODE_KEYS = [
  { keys: 'Type a digit', action: 'Fill the current cell and advance focus' },
  { keys: 'Backspace', action: 'Clear the current cell and step back' },
  { keys: 'Paste', action: 'Split the pasted code across the cells' },
] as const;

// ---------------------------------------------------------------------------
// TimeSpanPicker / DatePicker / ColorPicker
// ---------------------------------------------------------------------------

function TimespanBasicDemo() {
  const [value, setValue] = useState('01:30:00');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <TimeSpanPicker
        ariaLabel="Time spent"
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [...prev, `onChange: ${next || '(cleared)'}`]);
        }}
      />
      <Text textStyle="Body2">value: {value || '(cleared)'}</Text>
      <EventLog
        events={events}
        emptyText="Open the picker, step a unit, then Enter commits."
      />
    </Stack>
  );
}

function TimespanPrecisionDemo() {
  const [value, setValue] = useState('02:15:00');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <TimeSpanPicker
        ariaLabel="Standup window"
        precision="minute"
        allowClear
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [...prev, `onChange: ${next || '(cleared)'}`]);
        }}
      />
      <Text textStyle="Body2">
        precision=&quot;minute&quot; hides the seconds stepper; the clear button
        empties the value.
      </Text>
      <EventLog
        events={events}
        emptyText="Adjust the stepper or press Clear."
      />
    </Stack>
  );
}

const TIMESPAN_KEYS = [
  {
    keys: 'ArrowUp / ArrowDown',
    action: 'Step the focused unit — values carry over at each maximum',
  },
  { keys: 'Enter', action: 'Commit the staged edits (canonical value)' },
  { keys: 'Escape', action: 'Close and revert uncommitted edits' },
  { keys: 'Home / End', action: 'Clamp the focused unit to its min/max' },
] as const;

function DatePickerBasicDemo() {
  const [value, setValue] = useState('2024-03-10');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <DatePicker
        aria-label="Start date"
        showButton
        allowClear
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [...prev, `onChange: ${next || '(cleared)'}`]);
        }}
      />
      <Text textStyle="Body2">value: {value || '(cleared)'}</Text>
      <EventLog
        events={events}
        emptyText="Open the calendar and pick a day — onChange fires on commit."
      />
    </Stack>
  );
}

function DatePickerBoundsDemo() {
  const [value, setValue] = useState('2024-03-10');
  return (
    <Stack orientation="vertical" gap={8}>
      <DatePicker
        aria-label="Delivery day"
        showButton
        value={value}
        min="2024-03-01"
        max="2024-03-31"
        disabledDates={['2024-03-17', '2024-03-24']}
        onChange={setValue}
      />
      <Text textStyle="Body2">
        min=&quot;2024-03-01&quot;, max=&quot;2024-03-31&quot;, weekends
        disabled — out-of-range days are skipped by click and arrow keys, and
        typed values clamp on blur.
      </Text>
    </Stack>
  );
}

function DatePickerDateTimeDemo() {
  const [value, setValue] = useState('2024-03-10 09:30');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <DatePicker
        aria-label="Deploy at"
        showTime
        showButton
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [...prev, `onChange: ${next}`]);
        }}
      />
      <Text textStyle="Body2">
        showTime adds hour/minute steppers — the OK button commits date and time
        together.
      </Text>
      <EventLog events={events} emptyText="Adjust the time and press OK." />
    </Stack>
  );
}

const DATEPICKER_KEYS = [
  { keys: 'Arrow keys', action: 'Move the focused day (roving tabindex grid)' },
  { keys: 'Enter', action: 'Select the focused day and close' },
  { keys: 'Escape', action: 'Close the calendar' },
  {
    keys: 'Tab',
    action: 'Move through the dialog: month buttons, then the day grid',
  },
] as const;

function ColorPickerBasicDemo() {
  const [value, setValue] = useState('#2563eb');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Stack orientation="horizontal" gap={12} align="center">
        <ColorPicker
          value={value}
          onChange={(next) => {
            setValue(next);
            setEvents((prev) => [...prev, `onChange: ${next}`]);
          }}
        />
        <span
          aria-hidden="true"
          style={{
            background: value,
            border: 'var(--dx-border)',
            display: 'inline-block',
            height: 24,
            width: 24,
          }}
        />
        <Text textStyle="Body2">{value}</Text>
      </Stack>
      <EventLog
        events={events}
        emptyText="Open the picker — swatches commit immediately."
      />
    </Stack>
  );
}

/** Controlled variant used by the sections/staged demos. */
function ColorPickerVariantDemo({
  initial,
  caption,
  ...pickerProps
}: {
  initial: string;
  caption: string;
} & Omit<ColorPickerProps, 'value' | 'onChange'>) {
  const [value, setValue] = useState(initial);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Stack orientation="horizontal" gap={12} align="center">
        <ColorPicker
          {...pickerProps}
          value={value}
          onChange={(next) => {
            setValue(next);
            setEvents((prev) => [...prev, `onChange: ${next}`]);
          }}
        />
        <Text textStyle="Body2">
          {caption} — {value}
        </Text>
      </Stack>
      <EventLog events={events} emptyText="Pick a swatch (or stage + OK)." />
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Upload
// ---------------------------------------------------------------------------

function UploadBasicDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Upload
        url="/upload"
        multiple
        onProgress={(name, progress) =>
          setEvents((prev) => [...prev, `onProgress: ${name} ${progress}%`])
        }
        onComplete={(name) =>
          setEvents((prev) => [...prev, `onComplete: ${name}`])
        }
        onError={(name, message) =>
          setEvents((prev) => [...prev, `onError: ${name} — ${message}`])
        }
      />
      <EventLog
        events={events}
        emptyText="Choose files — rows show a named progressbar per file."
      />
    </Stack>
  );
}

function UploadLimitsDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Upload
        auto={false}
        multiple
        maxFileCount={2}
        maxFileSize={1024}
        onError={(name, message) =>
          setEvents((prev) => [...prev, `onError: ${name} — ${message}`])
        }
      />
      <Text textStyle="Body2" className="dx-text-muted">
        maxFileSize={'{'}1024{'}'} (1 KB) and maxFileCount={'{'}2{'}'} —
        rejected files never queue and never hit the network.
      </Text>
      <EventLog
        events={events}
        emptyText="Pick an oversized file or a third file — the rejection lands here."
      />
    </Stack>
  );
}

function UploadHandleDemo() {
  const handle = useRef<UploadHandle>(null);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Upload
        ref={handle}
        url="/upload"
        auto={false}
        multiple
        chooseText="Choose files"
        onComplete={(name) =>
          setEvents((prev) => [...prev, `onComplete: ${name}`])
        }
        onError={(name, message) =>
          setEvents((prev) => [...prev, `onError: ${name} — ${message}`])
        }
      />
      <Stack orientation="horizontal" gap={8}>
        <Button onClick={() => handle.current?.open()}>open() via ref</Button>
        <Button onClick={() => handle.current?.upload()}>
          upload() via ref
        </Button>
      </Stack>
      <EventLog
        events={events}
        emptyText="Queue files, then fire upload() from the handle."
      />
    </Stack>
  );
}

const UPLOAD_KEYS = [
  { keys: 'Tab', action: 'Focus the choose button, then the remove buttons' },
  { keys: 'Enter / Space', action: 'Open the file picker (native button)' },
] as const;

// ---------------------------------------------------------------------------
// Select / DropDown / AutoComplete / ListBox
// ---------------------------------------------------------------------------

function SelectBasicDemo() {
  const [value, setValue] = useState('a');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Label htmlFor="demo-select">Pairing</Label>
      <Select
        id="demo-select"
        options={PAIR_OPTIONS}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setEvents((prev) => [...prev, `onChange: ${e.target.value}`]);
        }}
      />
      <Text textStyle="Body2">value: {value}</Text>
      <EventLog
        events={events}
        emptyText="Choose an option — Gamma is disabled and skipped."
      />
    </Stack>
  );
}

const SELECT_KEYS = [
  { keys: 'Arrow keys', action: 'Move to the next/previous option' },
  { keys: 'Letter keys', action: 'Typeahead — jump to a matching option' },
  { keys: 'Tab', action: 'Leave the select; the selection is kept' },
] as const;

function DropDownBasicDemo() {
  const [value, setValue] = useState('a');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <DropDown
        aria-label="Pairing"
        options={PAIR_OPTIONS}
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [...prev, `onChange: ${next}`]);
        }}
      />
      <Text textStyle="Body2">value: {value}</Text>
      <EventLog
        events={events}
        emptyText="Open the popup — ArrowDown highlights, Enter selects."
      />
    </Stack>
  );
}

const DROPDOWN_KEYS = [
  {
    keys: 'ArrowDown / ArrowUp',
    action: 'Open the popup and move the highlighted option',
  },
  { keys: 'Enter', action: 'Select the highlighted option and close' },
  { keys: 'Escape', action: 'Close and return focus to the trigger' },
] as const;

function AutoCompleteBasicDemo() {
  const [value, setValue] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <AutoComplete
        aria-label="Pairing"
        options={PAIR_OPTIONS}
        placeholder="Filter…"
        value={value}
        onChange={(next) => {
          setValue(next);
          setEvents((prev) => [...prev, `onChange: “${next}”`]);
        }}
        onSelect={(next, option) =>
          setEvents((prev) => [...prev, `onSelect: ${option.label} (${next})`])
        }
      />
      <Text textStyle="Body2">value: {value ? `“${value}”` : '(empty)'}</Text>
      <EventLog
        events={events}
        emptyText="Type to filter; ArrowDown then Enter commits an option."
      />
    </Stack>
  );
}

function AutoCompleteFilterDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <AutoComplete
        aria-label="Starts-with filter"
        options={PAIR_OPTIONS}
        placeholder="Type 'b'…"
        onChange={(next) =>
          setEvents((prev) => [...prev, `onChange: “${next}”`])
        }
        filter={(option, query) =>
          option.label.toLowerCase().startsWith(query.toLowerCase())
        }
      />
      <Text textStyle="Body2" className="dx-text-muted">
        filter matches on prefix only — type &quot;ta&quot; and nothing matches
        (the popup shows &quot;No matches&quot;).
      </Text>
      <EventLog events={events} emptyText="Each keystroke lands here." />
    </Stack>
  );
}

const AUTOCOMPLETE_KEYS = [
  { keys: 'Type', action: 'Filter the options and open the popup' },
  { keys: 'ArrowDown / ArrowUp', action: 'Move the highlighted option' },
  { keys: 'Enter', action: 'Commit the highlighted option (onSelect)' },
  { keys: 'Escape', action: 'Close the popup, keeping text and focus' },
] as const;

function ListBoxSingleDemo() {
  const [value, setValue] = useState('a');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <ListBox
        aria-label="Pairing"
        options={PAIR_OPTIONS}
        value={value}
        onChange={(next) => {
          const v = typeof next === 'string' ? next : (next[0] ?? '');
          setValue(v);
          setEvents((prev) => [...prev, `onChange: ${v}`]);
        }}
      />
      <Text textStyle="Body2">value: {value}</Text>
      <EventLog
        events={events}
        emptyText="Arrow keys move and select — selection follows focus."
      />
    </Stack>
  );
}

function ListBoxMultiDemo() {
  const [values, setValues] = useState<string[]>(['a']);
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={8}>
      <ListBox
        multiple
        aria-label="Pick several"
        options={PAIR_OPTIONS}
        value={values}
        onChange={(next) => {
          const v = Array.isArray(next) ? next : [next];
          setValues(v);
          setEvents((prev) => [...prev, `onChange: [${v.join(', ')}]`]);
        }}
      />
      <Text textStyle="Body2">
        values: {values.length ? values.join(', ') : '(none)'}
      </Text>
      <EventLog
        events={events}
        emptyText="Space toggles the focused option without moving."
      />
    </Stack>
  );
}

const LISTBOX_KEYS = [
  {
    keys: 'ArrowDown / ArrowUp',
    action: 'Move — single mode commits the selection as focus moves',
  },
  { keys: 'Space', action: 'Toggle the focused option (multiple mode)' },
  { keys: 'Tab', action: 'Leave the listbox' },
] as const;

// ---------------------------------------------------------------------------
// DropZone / SignaturePad (Phase 2 — unchanged)
// ---------------------------------------------------------------------------

const DROPZONE_EMPTY = 'Dropped files land here.';
const SIGNATURE_EMPTY = 'Draw or clear to see onChange.';

function DropZoneBasicDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const logFiles = (files: FileList) =>
    setEvents((prev) => [
      ...prev,
      ...Array.from(files).map(
        (f) => `${f.name} · ${f.type || 'unknown'} · ${f.size} B`
      ),
    ]);
  return (
    <>
      <DropZone onDrop={logFiles} />
      <EventLog events={events} emptyText={DROPZONE_EMPTY} />
    </>
  );
}

function DropZoneAcceptDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const logFiles = (files: FileList) =>
    setEvents((prev) => [
      ...prev,
      ...Array.from(files).map((f) => `${f.name} accepted (image/*)`),
    ]);
  return (
    <>
      <DropZone
        label="Drop images here (png, jpeg, webp, gif)"
        dragLabel="Drop images to attach"
        browseText="Choose image"
        accept="image/*"
        multiple
        onDrop={logFiles}
      />
      <EventLog events={events} emptyText="Matching images land here." />
    </>
  );
}

const DROPZONE_KEYS = [
  { keys: 'Tab', action: 'Focus the Browse button inside the zone' },
  { keys: 'Enter / Space', action: 'Open the file picker (Browse button)' },
] as const;

const SIGNATURE_KEYS = [
  { keys: 'Tab', action: 'Focus the Clear button (canvas is pointer-draw)' },
  { keys: 'Enter / Space', action: 'Clear the canvas (emits onChange)' },
] as const;

const PEN_COLORS = [
  { value: '#1c1c1c', label: 'Ink' },
  { value: '#1d4ed8', label: 'Blue' },
  { value: '#b91c1c', label: 'Red' },
];

function SignatureBasicDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const [value, setValue] = useState('');
  return (
    <>
      <SignaturePad
        ariaLabel="Basic signature"
        onChange={(v) => {
          setValue(v);
          setEvents((prev) => [
            ...prev,
            v
              ? 'onChange: stroke committed (PNG data URL)'
              : 'onChange: cleared',
          ]);
        }}
      />
      <Text textStyle="Body1" className="dx-mt-2">
        {value
          ? 'Stroke captured — value holds a PNG data URL.'
          : 'Draw a stroke: onChange fires on pointer-up.'}
      </Text>
      <EventLog events={events} emptyText={SIGNATURE_EMPTY} />
    </>
  );
}

function SignaturePenDemo() {
  const [color, setColor] = useState('#1c1c1c');
  const [width, setWidth] = useState('2.5');
  return (
    <Stack orientation="vertical" gap={8}>
      <Stack orientation="horizontal" gap={12} align="center" wrap>
        <Text textStyle="Caption">Pen color</Text>
        <SelectBar
          aria-label="Pen color"
          options={PEN_COLORS}
          value={color}
          onChange={setColor}
        />
        <Text textStyle="Caption">Pen width</Text>
        <Select
          aria-label="Pen width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          options={[
            { value: '1.5', label: '1.5 px' },
            { value: '2.5', label: '2.5 px' },
            { value: '5', label: '5 px' },
          ]}
        />
      </Stack>
      <SignaturePad
        ariaLabel="Pen options signature"
        penColor={color}
        penWidth={Number(width)}
      />
    </Stack>
  );
}

function SignatureExportDemo() {
  const padRef = useRef<SignaturePadHandle>(null);
  const [dataUrl, setDataUrl] = useState('');
  return (
    <Stack orientation="vertical" gap={8}>
      <SignaturePad ariaLabel="Export signature" />
      <Stack orientation="horizontal" gap={8} wrap>
        <Button onClick={() => setDataUrl(padRef.current?.toDataURL() ?? '')}>
          Export PNG
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            padRef.current?.clear();
            setDataUrl('');
          }}
        >
          Clear via ref
        </Button>
      </Stack>
      {dataUrl ? (
        <img
          src={dataUrl}
          alt="Exported signature preview"
          style={{ maxWidth: 320, border: 'var(--dx-border)' }}
        />
      ) : (
        <Text textStyle="Body1" className="dx-text-muted">
          Export renders the canvas as a PNG data URL.
        </Text>
      )}
    </Stack>
  );
}

function DropZoneDemos() {
  return (
    <DemoPage
      title="DropZone"
      description="Drag-and-drop file target with a keyboard-operable Browse button (Radzen DropZone parity). accept filters before onDrop; the zone is a labelled region so screen readers land on it."
      sections={[
        {
          id: 'dropzone-basic',
          title: 'Basic',
          description:
            'Drop files onto the zone or press Browse — the accepted FileList lands in the event log.',
          content: <DropZoneBasicDemo />,
        },
        {
          id: 'dropzone-accept',
          title: 'Accept filter & labels',
          description:
            'accept="image/*" with multiple; non-matching files are filtered before onDrop (drop a .txt and nothing lands). label, dragLabel and browseText customize the copy.',
          content: <DropZoneAcceptDemo />,
        },
        {
          id: 'dropzone-states',
          title: 'Disabled',
          description:
            'A disabled zone hides the Browse button and ignores drag events.',
          content: <DropZone disabled label="Uploads are disabled here" />,
        },
        {
          id: 'dropzone-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={DROPZONE_KEYS} />,
        },
      ]}
    />
  );
}

function SignaturePadDemos() {
  return (
    <DemoPage
      title="SignaturePad"
      description="Pointer-drawn signature canvas with a labelled surface, a Clear button and an imperative handle for export (Radzen SignaturePad parity)."
      sections={[
        {
          id: 'signaturepad-basic',
          title: 'Basic with events',
          description:
            'The built-in Clear button resets the canvas; onChange emits the PNG data URL on every committed stroke.',
          content: <SignatureBasicDemo />,
        },
        {
          id: 'signaturepad-pen',
          title: 'Pen options',
          description:
            'penColor and penWidth are plain props — switch them live over the same pad.',
          content: <SignaturePenDemo />,
        },
        {
          id: 'signaturepad-export',
          title: 'Export & clear via ref',
          description:
            'The handle exposes toDataURL() and clear() for imperative export flows.',
          content: <SignatureExportDemo />,
        },
        {
          id: 'signaturepad-states',
          title: 'Disabled',
          description:
            'A disabled pad sets aria-disabled on the canvas and disables Clear.',
          content: <SignaturePad disabled ariaLabel="Disabled signature" />,
        },
        {
          id: 'signaturepad-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={SIGNATURE_KEYS} />,
        },
      ]}
    />
  );
}

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

function FormDemosPage() {
  return (
    <DemoPage
      title="Form"
      description="Submit-scoped validation: useFormField registers each control with the surrounding Form; validators run on submit, errors clear as you edit, and onSubmit/onInvalidSubmit report the outcome (Radzen EditForm parity)."
      sections={[
        {
          id: 'form-basic',
          title: 'Submit flow',
          description:
            'Two required fields — submit empty to see onInvalidSubmit land per field, fill both for onSubmit.',
          content: <LoginFormBody />,
        },
        {
          id: 'form-validators',
          title: 'Validators',
          description: (
            <>
              Validators compose in an array: <Code>required</Code>,{' '}
              <Code>pattern</Code>, <Code>minLength</Code> and{' '}
              <Code>maxLength</Code> from the Validators module.
            </>
          ),
          content: <ValidatorsFormBody />,
        },
        {
          id: 'form-state',
          title: 'Field state (useFormField)',
          description:
            'The hook exposes {value, setValue, errors}: errors appear after the first submit and clear on the next edit (dirty) — the live readout proves it.',
          content: <FormStateBody />,
        },
        {
          id: 'form-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={FORM_KEYS} />,
        },
      ]}
    />
  );
}

function FieldDemosPage() {
  return (
    <DemoPage
      title="Field"
      description="Label + hint/error wrapper with render-prop ids — the label, aria-describedby and aria-invalid are wired for you. Prefer FormField for new code."
      sections={[
        {
          id: 'field-labels',
          title: 'Label & hint',
          description:
            'Click the label or Tab: the render-prop inputId ties the label to the input, and the hint rides aria-describedby.',
          content: <FieldLabelDemo />,
        },
        {
          id: 'field-error',
          title: 'Validation message',
          description:
            'A live error clears as you type past the minimum — aria-invalid flips and aria-describedby swaps to the message.',
          content: <FieldErrorDemo />,
        },
        {
          id: 'field-required',
          title: 'Required marker',
          description:
            'required adds the asterisk (aria-hidden — the input carries native required). visible={false} renders nothing.',
          content: (
            <Field label="Email" required hint="We never share it.">
              {({ inputId }) => (
                <TextBox
                  id={inputId}
                  type="email"
                  required
                  placeholder="you@zone.app"
                />
              )}
            </Field>
          ),
        },
        {
          id: 'field-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={FIELD_KEYS} />,
        },
      ]}
    />
  );
}

function FieldsetDemosPage() {
  return (
    <DemoPage
      title="Fieldset"
      description="Grouped fields with a legend and optional collapse (Radzen Fieldset parity) — a native fieldset/legend pair so assistive tech announces the group name."
      sections={[
        {
          id: 'fieldset-basic',
          title: 'Grouped',
          description:
            'Two fields inside one legend — the group reads as a unit.',
          content: (
            <Fieldset text="Address">
              <FormField text="Street">
                {({ inputId }) => <TextBox id={inputId} />}
              </FormField>
              <FormField text="Town">
                {({ inputId }) => <TextBox id={inputId} />}
              </FormField>
            </Fieldset>
          ),
        },
        {
          id: 'fieldset-collapse',
          title: 'Collapsible with summary',
          description:
            'allowCollapse adds the legend toggle; summary replaces the children while collapsed.',
          content: (
            <Fieldset text="Advanced" allowCollapse summary="2 of 5 set">
              <FormField text="Code">
                {({ inputId }) => <TextBox id={inputId} />}
              </FormField>
            </Fieldset>
          ),
        },
        {
          id: 'fieldset-controlled',
          title: 'Controlled collapse & events',
          description:
            'collapsed is controlled here — toggle via the legend or the buttons; onExpand/onCollapse land in the log.',
          content: <FieldsetControlledDemo />,
        },
      ]}
    />
  );
}

function InputDemosPage() {
  return (
    <DemoPage
      title="Input"
      description="Deprecated alias of TextBox — identical rendering and props. Prefer TextBox in new code."
      sections={[
        {
          id: 'input-basic',
          title: 'Controlled value',
          description:
            'Input and TextBox render the same DOM — typing here behaves exactly like the TextBox demo.',
          content: <InputBasicDemo />,
        },
        {
          id: 'input-sizes',
          title: 'Sizes',
          description: 'The five-step component scale: xs → xl.',
          content: (
            <Stack orientation="vertical" gap={8}>
              {INPUT_SIZES.map((size) => (
                <Input
                  key={size}
                  size={size}
                  aria-label={`Size ${size}`}
                  placeholder={`size="${size}"`}
                />
              ))}
            </Stack>
          ),
        },
        {
          id: 'input-states',
          title: 'Invalid & disabled',
          description:
            'invalid sets aria-invalid and the danger border; disabled blocks focus and typing.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <Input invalid aria-label="Invalid input" defaultValue="Oops" />
              <Input
                disabled
                aria-label="Disabled input"
                value="Locked"
                readOnly
              />
            </Stack>
          ),
        },
      ]}
    />
  );
}

function TextBoxDemosPage() {
  return (
    <DemoPage
      title="TextBox"
      description="Single-line text input with size, invalid state and every native input attribute forwarded (type, maxLength, autoComplete…) — the workhorse control."
      sections={[
        {
          id: 'textbox-basic',
          title: 'Controlled value',
          description:
            'Controlled with a 40-character cap — the counter and the log show every keystroke.',
          content: <TextBoxBasicDemo />,
        },
        {
          id: 'textbox-types',
          title: 'Input types',
          description: (
            <>
              <Code>type</Code> picks the platform keyboard via{' '}
              <Code>inputMode</Code> semantics — email, tel and url hints.
            </>
          ),
          content: (
            <Stack orientation="vertical" gap={8}>
              {TEXTBOX_TYPES.map((t) => (
                <TextBox
                  key={t.type}
                  type={t.type}
                  aria-label={t.label}
                  placeholder={t.placeholder}
                />
              ))}
            </Stack>
          ),
        },
        {
          id: 'textbox-states',
          title: 'Invalid, readonly & disabled',
          description:
            'aria-invalid marks validation failures; readOnly shows a value without allowing edits.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <TextBox
                invalid
                aria-label="Invalid username"
                defaultValue="a b c"
              />
              <TextBox
                readOnly
                aria-label="Readonly slug"
                value="release-2.0"
              />
              <TextBox disabled aria-label="Disabled note" value="Locked" />
            </Stack>
          ),
        },
      ]}
    />
  );
}

function TextAreaDemosPage() {
  const [value, setValue] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <DemoPage
      title="TextArea"
      description="Multi-line text input with resize control and invalid state (Radzen TextArea parity)."
      sections={[
        {
          id: 'textarea-basic',
          title: 'Controlled with counter',
          description:
            'maxLength=200 with a live counter — onChange lands in the log as you write.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <TextArea
                aria-label="Release notes"
                rows={3}
                maxLength={200}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setEvents((prev) => [
                    ...prev,
                    `onChange: ${e.target.value.length} chars`,
                  ]);
                }}
              />
              <Text textStyle="Body2">{value.length}/200 characters</Text>
              <EventLog events={events} emptyText="Start typing." />
            </Stack>
          ),
        },
        {
          id: 'textarea-resize',
          title: 'Resize',
          description:
            'resize picks which axes the grab handle exposes — none is the safe default inside forms.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <TextArea
                resize="none"
                rows={2}
                aria-label="No resize"
                defaultValue='resize="none"'
              />
              <TextArea
                resize="vertical"
                rows={2}
                aria-label="Vertical resize"
                defaultValue='resize="vertical"'
              />
              <TextArea
                resize="both"
                rows={2}
                aria-label="Free resize"
                defaultValue='resize="both"'
              />
            </Stack>
          ),
        },
        {
          id: 'textarea-states',
          title: 'Invalid & disabled',
          description: 'Same invalid/disabled contract as TextBox.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <TextArea
                invalid
                rows={2}
                aria-label="Invalid bio"
                defaultValue="Too long to save."
              />
              <TextArea
                disabled
                rows={2}
                aria-label="Disabled bio"
                defaultValue="Locked by the admin."
              />
            </Stack>
          ),
        },
      ]}
    />
  );
}

function PasswordDemosPage() {
  return (
    <DemoPage
      title="Password"
      description="Password input with an accessible reveal toggle — the toggle exposes aria-pressed, and its accessible name flips between Show password and Hide password."
      sections={[
        {
          id: 'password-basic',
          title: 'Reveal toggle',
          description:
            'Type, then press the eye — the input swaps type=password/type=text and the log records length only, never the secret.',
          content: <PasswordBasicDemo />,
        },
        {
          id: 'password-custom',
          title: 'Custom labels & invalid',
          description: (
            <>
              <Code>showLabel</Code>/<Code>hideLabel</Code> retitle the toggle;{' '}
              <Code>invalid</Code> marks a failed strength check.
            </>
          ),
          content: (
            <Stack orientation="vertical" gap={8}>
              <Password
                aria-label="Choose a password"
                showLabel="Reveal"
                hideLabel="Conceal"
                placeholder="At least 12 characters"
              />
              <Password
                invalid
                aria-label="Rejected password"
                defaultValue="password"
              />
            </Stack>
          ),
        },
        {
          id: 'password-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={PASSWORD_KEYS} />,
        },
      ]}
    />
  );
}

function MaskDemosPage() {
  return (
    <DemoPage
      title="Mask"
      description="Digit mask: # placeholders absorb typed digits while literal mask characters appear as you type — onChange reports the formatted string."
      sections={[
        {
          id: 'mask-basic',
          title: 'Phone mask',
          description:
            'mask="(###) ###-####" — type 5551234567 and the parens, space and hyphen fill themselves in.',
          content: <MaskBasicDemo />,
        },
        {
          id: 'mask-formats',
          title: 'Card & postal masks',
          description:
            'Grouping literals differ per format; digits-only input stays constant.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <Mask
                mask="#### #### #### ####"
                placeholder="0000 0000 0000 0000"
                aria-label="Card number"
              />
              <Mask mask="#####" placeholder="00000" aria-label="Postal code" />
            </Stack>
          ),
        },
        {
          id: 'mask-states',
          title: 'Sizes & invalid',
          description:
            'Size follows the component scale; invalid marks a failed format check.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <Mask size="sm" mask="(###) ###-####" aria-label="Small phone" />
              <Mask
                invalid
                mask="(###) ###-####"
                aria-label="Invalid phone"
                defaultValue="12"
              />
            </Stack>
          ),
        },
        {
          id: 'mask-keyboard',
          title: 'Typing rules',
          content: <KeyboardTable bindings={MASK_KEYS} />,
        },
      ]}
    />
  );
}

function LabelDemosPage() {
  return (
    <DemoPage
      title="Label"
      description="Native label element with our typography — htmlFor wires the text to a control so clicking it moves focus (WCAG 2.5.3 label-in-name also applies to the accessible name)."
      sections={[
        {
          id: 'label-basic',
          title: 'Label wires the control',
          description:
            'htmlFor + matching id: click “Email address” and focus lands in the input — the event log proves the transfer.',
          content: <LabelBasicDemo />,
        },
        {
          id: 'label-plain',
          title: 'Without htmlFor (contrast)',
          description:
            'The same text without htmlFor is inert — clicking it does nothing, and assistive tech gains no association. The input keeps its own aria-label so this demo stays accessible.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <Label>Detached text</Label>
              <Input aria-label="Unassociated input" placeholder="Type here" />
            </Stack>
          ),
        },
        {
          id: 'label-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={LABEL_KEYS} />,
        },
      ]}
    />
  );
}

function CheckBoxDemosPage() {
  return (
    <DemoPage
      title="CheckBox"
      description="Native checkbox with indeterminate (tri-state) support — the mixed state is a DOM property browsers expose to assistive tech as aria-checked=mixed."
      sections={[
        {
          id: 'checkbox-basic',
          title: 'Controlled toggle',
          description:
            'Checked state and every change land in the readout and log.',
          content: <CheckBoxBasicDemo />,
        },
        {
          id: 'checkbox-indeterminate',
          title: 'Tri-state select all',
          description:
            'The parent shows a dash while only some children are selected; clicking resolves to all-or-none.',
          content: <SelectAllDemo />,
        },
        {
          id: 'checkbox-disabled',
          title: 'Disabled',
          description:
            'Disabled checkboxes are skipped by Tab and announce as dimmed/disabled to AT.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <label htmlFor="forms-checkbox-disabled-off">
                <CheckBox id="forms-checkbox-disabled-off" disabled /> Disabled
                off
              </label>
              <label htmlFor="forms-checkbox-disabled-on">
                <CheckBox
                  id="forms-checkbox-disabled-on"
                  disabled
                  checked
                  readOnly
                />{' '}
                Disabled on
              </label>
            </Stack>
          ),
        },
      ]}
    />
  );
}

function CheckBoxListDemosPage() {
  return (
    <DemoPage
      title="CheckBoxList"
      description="Fieldset-wrapped multi-select — legend supplies the group name (aria-label is not a prop here) and each row is a native checkbox, so Space toggles."
      sections={[
        {
          id: 'checkboxlist-basic',
          title: 'Controlled multi-select',
          description:
            'value is string[]; the legend “Toppings” names the group for screen readers.',
          content: <CheckBoxListDemo />,
        },
        {
          id: 'checkboxlist-disabled',
          title: 'Disabled options',
          description:
            'disabled on an option keeps it visible but uncheckable — Gamma is skipped.',
          content: (
            <CheckBoxList
              legend="Pairing (Gamma locked)"
              name="toppings-disabled"
              options={PAIR_OPTIONS}
              defaultValue={['a']}
            />
          ),
        },
        {
          id: 'checkboxlist-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={CHECKBOXLIST_KEYS} />,
        },
      ]}
    />
  );
}

function RadioButtonListDemosPage() {
  return (
    <DemoPage
      title="RadioButtonList"
      description="Fieldset-wrapped single-select radio group — name is required and must be unique per group; legend supplies the accessible name."
      sections={[
        {
          id: 'radiobuttonlist-basic',
          title: 'Controlled single select',
          description:
            'One value at a time — name="plan-basic" keeps arrow navigation scoped to this group.',
          content: <RadioButtonListDemo />,
        },
        {
          id: 'radiobuttonlist-disabled',
          title: 'Disabled option',
          description:
            'A disabled radio can never gain the selection; arrows skip it.',
          content: (
            <RadioButtonList
              legend="Pairing (Gamma locked)"
              name="plan-disabled"
              options={PAIR_OPTIONS}
              defaultValue="a"
            />
          ),
        },
        {
          id: 'radiobuttonlist-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={RADIO_KEYS} />,
        },
      ]}
    />
  );
}

function SwitchDemosPage() {
  return (
    <DemoPage
      title="Switch"
      description="role=switch checkbox — immediate on/off semantics for settings that apply right away (contrast with CheckBox, which commits with a form)."
      sections={[
        {
          id: 'switch-basic',
          title: 'Controlled switch',
          description: 'The readout and log track every flip.',
          content: <SwitchBasicDemo />,
        },
        {
          id: 'switch-labelled',
          title: 'Labelled & disabled',
          description:
            'Wrap in a label for the accessible name; disabled switches are skipped by Tab.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <label htmlFor="forms-switch-dark-mode">
                <Switch id="forms-switch-dark-mode" defaultChecked /> Dark mode
              </label>
              <label htmlFor="forms-switch-locked-off">
                <Switch id="forms-switch-locked-off" disabled /> Locked off
              </label>
              <label htmlFor="forms-switch-locked-on">
                <Switch id="forms-switch-locked-on" disabled checked readOnly />{' '}
                Locked on (checked)
              </label>
            </Stack>
          ),
        },
        {
          id: 'switch-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={SWITCH_KEYS} />,
        },
      ]}
    />
  );
}

function SliderDemosPage() {
  return (
    <DemoPage
      title="Slider"
      description="Pointer and keyboard slider (Radzen Slider parity): onChange commits the value, onInput tracks continuously while dragging."
      sections={[
        {
          id: 'slider-basic',
          title: 'Controlled slider',
          description:
            'Release a handle or tap an arrow key — the commit lands in the log.',
          content: <SliderBasicDemo />,
        },
        {
          id: 'slider-range',
          title: 'Range mode',
          description:
            'range with valueMin/valueMax renders two named handles; the lower handle clamps to the upper one.',
          content: <SliderRangeDemo />,
        },
        {
          id: 'slider-vertical',
          title: 'Vertical & disabled',
          description:
            'orientation="vertical" exposes aria-orientation; a disabled handle is unfocusable and reports aria-disabled.',
          content: (
            <Stack orientation="horizontal" gap={16} align="start">
              <div style={{ height: 160 }}>
                <Slider value={70} orientation="vertical" label="Volume" />
              </div>
              <Stack orientation="vertical" gap={8}>
                <Slider value={35} disabled label="Disabled level" />
                <Text textStyle="Body2" className="dx-text-muted">
                  Vertical handle height follows the container.
                </Text>
              </Stack>
            </Stack>
          ),
        },
        {
          id: 'slider-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={SLIDER_KEYS} />,
        },
      ]}
    />
  );
}

function RatingDemosPage() {
  return (
    <DemoPage
      title="Rating"
      description="Star rating as an ARIA radiogroup — roving tabindex, arrow-key commits and a Clear button that resets to zero."
      sections={[
        {
          id: 'rating-basic',
          title: 'Controlled rating',
          description:
            'Click a star, arrow between them, or press Clear — every commit lands in the log.',
          content: <RatingBasicDemo />,
        },
        {
          id: 'rating-states',
          title: 'Read-only & disabled',
          description:
            'readOnly keeps the value visible (aria-readonly, no Clear); disabled unfocuses every star.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <Rating value={4} readOnly ariaLabel="Read-only rating" />
              <Rating value={2} disabled ariaLabel="Disabled rating" />
            </Stack>
          ),
        },
        {
          id: 'rating-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={RATING_KEYS} />,
        },
      ]}
    />
  );
}

function SelectBarDemosPage() {
  return (
    <DemoPage
      title="SelectBar"
      description="Segmented control built from toggle buttons — each option exposes aria-pressed, single mode behaves like radios, multiple mode like checkboxes (Radzen SelectBar parity)."
      sections={[
        {
          id: 'selectbar-single',
          title: 'Single select',
          description:
            'Exactly one option stays pressed; the value lands in the log.',
          content: <SelectBarSingleDemo />,
        },
        {
          id: 'selectbar-multiple',
          title: 'Multiple select',
          description:
            'multiple widens the value to string[] — options toggle independently.',
          content: <SelectBarMultiDemo />,
        },
        {
          id: 'selectbar-vertical',
          title: 'Vertical & disabled options',
          description:
            'orientation="vertical" stacks the buttons; a disabled option can never be pressed.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <SelectBar
                orientation="vertical"
                aria-label="Mode"
                options={SELECTBAR_ROLES}
                defaultValue="rider"
              />
              <SelectBar
                size="sm"
                aria-label="Mode (one locked)"
                options={SELECTBAR_ROLES.map((o) =>
                  o.value === 'driver' ? { ...o, disabled: true } : o
                )}
                defaultValue="rider"
              />
            </Stack>
          ),
        },
        {
          id: 'selectbar-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={SELECTBAR_KEYS} />,
        },
      ]}
    />
  );
}

function NumericDemosPage() {
  return (
    <DemoPage
      title="Numeric"
      description="Numeric box with increment/decrement buttons, arrow-key stepping and input sanitizing (letters and symbols are stripped as you type)."
      sections={[
        {
          id: 'numeric-basic',
          title: 'Controlled counter',
          description:
            'onChange reports the parsed number — null when the field is emptied.',
          content: <NumericBasicDemo />,
        },
        {
          id: 'numeric-limits',
          title: 'min / max / step',
          description:
            'step=0.5 with bounds — arrows move by the step, blur clamps and snaps to the grid.',
          content: <NumericLimitsDemo />,
        },
        {
          id: 'numeric-states',
          title: 'Invalid, disabled & sizes',
          description:
            'invalid marks an out-of-range edit; the scale runs xs → xl.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <Numeric invalid aria-label="Invalid amount" defaultValue={120} />
              <Numeric disabled aria-label="Locked amount" defaultValue={5} />
              <Numeric size="sm" aria-label="Small amount" defaultValue={1} />
            </Stack>
          ),
        },
        {
          id: 'numeric-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={NUMERIC_KEYS} />,
        },
      ]}
    />
  );
}

function SecurityCodeDemosPage() {
  return (
    <DemoPage
      title="SecurityCode"
      description="One-cell-per-digit OTP input: typing auto-advances, Backspace steps back, paste splits across cells — the group carries an accessible label and per-cell digit positions."
      sections={[
        {
          id: 'securitycode-basic',
          title: 'Controlled code',
          description:
            'length=4 with a masked readout — the log shows fill state, never the digits.',
          content: <SecurityCodeDemo />,
        },
        {
          id: 'securitycode-states',
          title: 'Length, invalid & disabled',
          description:
            'The default length is 6; invalid marks mismatched cells, disabled locks every cell.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <SecurityCode label="Six-digit code" defaultValue="482915" />
              <SecurityCode invalid label="Rejected code" defaultValue="12" />
              <SecurityCode disabled label="Locked code" defaultValue="99" />
            </Stack>
          ),
        },
        {
          id: 'securitycode-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={SECURITYCODE_KEYS} />,
        },
      ]}
    />
  );
}

function TimeSpanPickerDemosPage() {
  return (
    <DemoPage
      title="TimeSpanPicker"
      description="Duration picker with day/hour/minute/second steppers in a named dialog — value reports the canonical timespan string (Radzen TimeSpanEdit parity)."
      sections={[
        {
          id: 'timespanpicker-basic',
          title: 'Basic with events',
          description:
            'Open the panel, step a unit, then Enter commits — onValueChange aliases onChange, so only one is logged.',
          content: <TimespanBasicDemo />,
          cardStyle: POPUP_CARD,
        },
        {
          id: 'timespanpicker-precision',
          title: 'Precision & clear',
          description: (
            <>
              <Code>precision</Code> hides finer steppers;{' '}
              <Code>allowClear</Code> adds the clear button.
            </>
          ),
          content: <TimespanPrecisionDemo />,
          cardStyle: POPUP_CARD,
        },
        {
          id: 'timespanpicker-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={TIMESPAN_KEYS} />,
        },
      ]}
    />
  );
}

function DatePickerDemosPage() {
  return (
    <DemoPage
      title="DatePicker"
      description="Date and date-time picker: a labelled calendar dialog with roving day focus, min/max bounds, disabled dates and typed-value clamping (Radzen DatePicker parity)."
      sections={[
        {
          id: 'datepicker-basic',
          title: 'Basic with events',
          description:
            'The calendar trigger opens a role=dialog named after the field; picking a day commits onChange (allowClear adds the ×).',
          content: <DatePickerBasicDemo />,
          cardStyle: POPUP_CARD,
        },
        {
          id: 'datepicker-limits',
          title: 'Bounds & disabled dates',
          description:
            'min/max clamp the month view and typed values on blur; disabledDates are skipped by click and arrow keys.',
          content: <DatePickerBoundsDemo />,
          cardStyle: POPUP_CARD,
        },
        {
          id: 'datepicker-datetime',
          title: 'Date & time',
          description:
            'showTime adds hour/minute steppers — the OK button commits date and time together as one string.',
          content: <DatePickerDateTimeDemo />,
          cardStyle: POPUP_CARD,
        },
        {
          id: 'datepicker-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={DATEPICKER_KEYS} />,
        },
      ]}
    />
  );
}

function ColorPickerDemosPage() {
  return (
    <DemoPage
      title="ColorPicker"
      description="RGB picker with saturation, hue and alpha sliders, rgba fields and a 22-swatch palette — every commit reports a CSS rgb() string in a named dialog."
      sections={[
        {
          id: 'colorpicker-basic',
          title: 'Basic with events',
          description:
            'Controlled value with a swatch readout — swatches commit immediately and close (no showButton).',
          content: <ColorPickerBasicDemo />,
          cardStyle: POPUP_CARD,
        },
        {
          id: 'colorpicker-sections',
          title: 'Sections',
          description:
            'showSaturation/showRgba/showPalette filter the popup — palette-only vs sliders-only.',
          content: (
            <Stack orientation="vertical" gap={12}>
              <ColorPickerVariantDemo
                initial="#ff2800"
                caption="Palette only"
                aria-label="Palette only color"
                showSaturation={false}
                showRgba={false}
              />
              <ColorPickerVariantDemo
                initial="#02f900"
                caption="Sliders only"
                aria-label="Sliders only color"
                showPalette={false}
              />
            </Stack>
          ),
          cardStyle: POPUP_CARD,
        },
        {
          id: 'colorpicker-button',
          title: 'Staged commit (showButton)',
          description:
            'showButton stages picks until OK — Cancel discards and keeps the previous value.',
          content: (
            <ColorPickerVariantDemo
              initial="#ff2800"
              caption="Staged"
              aria-label="Staged color"
              showButton
            />
          ),
          cardStyle: POPUP_CARD,
        },
        {
          id: 'colorpicker-keyboard',
          title: 'Keyboard',
          content: (
            <KeyboardTable
              bindings={[
                {
                  keys: 'Tab',
                  action:
                    'Reach the trigger, then sliders and rgba fields inside the dialog',
                },
                {
                  keys: 'Arrow keys',
                  action: 'Adjust the focused saturation/hue/alpha slider',
                },
                {
                  keys: 'Escape',
                  action: 'Close the popup (staged picks discarded)',
                },
              ]}
            />
          ),
        },
      ]}
    />
  );
}

function UploadDemosPage() {
  return (
    <DemoPage
      title="Upload"
      description="File upload with per-row progress: each row carries a progressbar named “&lt;file&gt; upload progress”, plus client-side size/count limits and an imperative handle (Radzen Upload parity)."
      sections={[
        {
          id: 'upload-basic',
          title: 'Auto upload',
          description:
            'auto=true posts each file immediately; the preview host has no /upload endpoint, so the log truthfully shows the error path (progress/complete land against a real server).',
          content: <UploadBasicDemo />,
        },
        {
          id: 'upload-limits',
          title: 'Client-side limits',
          description:
            'maxFileSize and maxFileCount reject at selection time — no network is touched.',
          content: <UploadLimitsDemo />,
        },
        {
          id: 'upload-handle',
          title: 'Manual handle',
          description:
            'auto=false queues rows as pending; the ref exposes open() and upload() for custom flows.',
          content: <UploadHandleDemo />,
        },
        {
          id: 'upload-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={UPLOAD_KEYS} />,
        },
      ]}
    />
  );
}

function SelectDemosPage() {
  return (
    <DemoPage
      title="Select"
      description="Native select styled to the system — platform listbox semantics (arrow navigation, typeahead, disabled options) come for free."
      sections={[
        {
          id: 'select-basic',
          title: 'Labelled & controlled',
          description:
            'A native select is labelable — htmlFor/id pair it without any wiring tricks; Gamma is a disabled option.',
          content: <SelectBasicDemo />,
        },
        {
          id: 'select-sizes',
          title: 'Sizes & invalid',
          description:
            'size runs the component scale; invalid marks a failed choice.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <Select
                size="sm"
                aria-label="Small select"
                options={PAIR_OPTIONS}
                defaultValue="a"
              />
              <Select
                size="lg"
                aria-label="Large select"
                options={PAIR_OPTIONS}
                defaultValue="b"
              />
              <Select
                invalid
                aria-label="Invalid select"
                options={PAIR_OPTIONS}
              />
            </Stack>
          ),
        },
        {
          id: 'select-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={SELECT_KEYS} />,
        },
      ]}
    />
  );
}

function DropDownDemosPage() {
  return (
    <DemoPage
      title="DropDown"
      description="Custom listbox popup with a labelled combobox trigger (Radzen DropDown parity) — highlighted option via aria-activedescendant, Escape restores focus to the trigger."
      sections={[
        {
          id: 'dropdown-basic',
          title: 'Controlled with events',
          description:
            'ArrowDown opens and highlights; Enter commits into the log.',
          content: <DropDownBasicDemo />,
          cardStyle: POPUP_CARD,
        },
        {
          id: 'dropdown-states',
          title: 'Placeholder & disabled',
          description:
            'placeholder shows until a value is chosen; a disabled trigger never opens.',
          content: (
            <Stack orientation="vertical" gap={8}>
              <DropDown
                aria-label="Pick a pairing"
                options={PAIR_OPTIONS}
                placeholder="Choose…"
              />
              <DropDown
                aria-label="Locked pairing"
                options={PAIR_OPTIONS}
                value="a"
                disabled
              />
            </Stack>
          ),
          cardStyle: POPUP_CARD,
        },
        {
          id: 'dropdown-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={DROPDOWN_KEYS} />,
        },
      ]}
    />
  );
}

function AutoCompleteDemosPage() {
  return (
    <DemoPage
      title="AutoComplete"
      description="Filtering text input with a listbox popup — typing filters live, ArrowDown moves the highlighted option, Enter fires onSelect with the chosen option."
      sections={[
        {
          id: 'autocomplete-basic',
          title: 'Controlled filtering',
          description:
            'onChange reports every keystroke; onSelect reports the committed option (label + value).',
          content: <AutoCompleteBasicDemo />,
          cardStyle: POPUP_CARD,
        },
        {
          id: 'autocomplete-filter',
          title: 'Custom filter & empty state',
          description: (
            <>
              <Code>filter</Code> replaces the default substring match — a
              prefix-only filter shows the &quot;No matches&quot; empty state.
            </>
          ),
          content: <AutoCompleteFilterDemo />,
          cardStyle: POPUP_CARD,
        },
        {
          id: 'autocomplete-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={AUTOCOMPLETE_KEYS} />,
        },
      ]}
    />
  );
}

function ListBoxDemosPage() {
  return (
    <DemoPage
      title="ListBox"
      description="Always-visible listbox (no popup) — single mode follows focus, multiple mode toggles with Space; the group needs aria-label/aria-labelledby for its accessible name."
      sections={[
        {
          id: 'listbox-single',
          title: 'Single select',
          description:
            'Arrow keys move — selection follows focus in single mode.',
          content: <ListBoxSingleDemo />,
        },
        {
          id: 'listbox-multiple',
          title: 'Multiple select',
          description:
            'multiple keeps aria-multiselectable; Space toggles without moving.',
          content: <ListBoxMultiDemo />,
        },
        {
          id: 'listbox-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={LISTBOX_KEYS} />,
        },
      ]}
    />
  );
}

export function FormDemos({ slug }: { slug: string }) {
  switch (slug) {
    case 'form':
      return <FormDemosPage />;
    case 'field':
      return <FieldDemosPage />;
    case 'formfield':
      return (
        <DemoPage
          title="FormField"
          description="Custom controls carry explicit ids — FormField cannot backfill ids it cannot see, so the label points at the id you pass."
          sections={[
            {
              id: 'formfield-labels',
              title: 'Labels and Helpers',
              content: (
                <Stack orientation="vertical" gap={12}>
                  <FormField text="Email" helper="We never share it.">
                    <TextBox id="demo-email" placeholder="you@zone.app" />
                  </FormField>
                  <FormField
                    text="Bio"
                    allowFloatingLabel={false}
                    helper="A sentence or two."
                  >
                    <TextArea id="demo-bio" rows={2} />
                  </FormField>
                </Stack>
              ),
            },
            {
              id: 'formfield-adornments',
              title: 'Adornments',
              description: 'Start and end slots for icons and actions.',
              content: (
                <FormField
                  text="Search"
                  variant="filled"
                  start={<span aria-hidden="true">S</span>}
                  end={
                    <button type="button" aria-label="Clear">
                      ×
                    </button>
                  }
                >
                  <TextBox id="demo-search" />
                </FormField>
              ),
            },
            {
              id: 'formfield-sizes',
              title: 'Sizes',
              description: 'Size follows the field control.',
              content: (
                <Stack orientation="vertical" gap={12}>
                  <FormField text="Small" helper="Size sm follows the field.">
                    <TextBox id="demo-small" size="sm" />
                  </FormField>
                  <FormField text="Large" helper="Size lg grows the box.">
                    <TextBox id="demo-large" size="lg" />
                  </FormField>
                </Stack>
              ),
            },
            {
              id: 'formfield-validation',
              title: 'Validation',
              content: (
                <FormField text="Amount" invalid helper="Must be positive.">
                  <TextBox id="demo-amount" />
                </FormField>
              ),
            },
          ]}
        />
      );
    case 'fieldset':
      return <FieldsetDemosPage />;
    case 'input':
      return <InputDemosPage />;
    case 'textbox':
      return <TextBoxDemosPage />;
    case 'textarea':
      return <TextAreaDemosPage />;
    case 'password':
      return <PasswordDemosPage />;
    case 'mask':
      return <MaskDemosPage />;
    case 'numeric':
      return <NumericDemosPage />;
    case 'select':
      return <SelectDemosPage />;
    case 'dropdown':
      return <DropDownDemosPage />;
    case 'autocomplete':
      return <AutoCompleteDemosPage />;
    case 'listbox':
      return <ListBoxDemosPage />;
    case 'checkbox':
      return <CheckBoxDemosPage />;
    case 'checkboxlist':
      return <CheckBoxListDemosPage />;
    case 'radiobuttonlist':
      return <RadioButtonListDemosPage />;
    case 'switch':
      return <SwitchDemosPage />;
    case 'slider':
      return <SliderDemosPage />;
    case 'rating':
      return <RatingDemosPage />;
    case 'colorpicker':
      return <ColorPickerDemosPage />;
    case 'datepicker':
      return <DatePickerDemosPage />;
    case 'timespanpicker':
      return <TimeSpanPickerDemosPage />;
    case 'securitycode':
      return <SecurityCodeDemosPage />;
    case 'upload':
      return <UploadDemosPage />;
    case 'selectbar':
      return <SelectBarDemosPage />;
    case 'label':
      return <LabelDemosPage />;
    case 'dropzone':
      return <DropZoneDemos />;
    case 'signaturepad':
      return <SignaturePadDemos />;
    default:
      return null;
  }
}
