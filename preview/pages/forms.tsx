import { useState } from 'react';
import {
  Autocomplete,
  Checkbox,
  Checkboxlist,
  Colorpicker,
  Datepicker,
  Dropdown,
  Field,
  Fieldset,
  Form,
  FormField,
  Input,
  Label,
  Listbox,
  Mask,
  Numeric,
  Password,
  Radiobuttonlist,
  Rating,
  Select,
  Selectbar,
  SecurityCode,
  Slider,
  Stack,
  Switch,
  Text,
  Textarea,
  Textbox,
  Timespanpicker,
  Upload,
  required,
  useFormField,
} from '../../lib/main';
import { DemoPage } from './demo-page';

const PAIR_OPTIONS = [
  { value: 'a', label: 'Alpha' },
  { value: 'b', label: 'Beta' },
  { value: 'c', label: 'Gamma', disabled: true },
];

function NameField() {
  const name = useFormField('name', {
    validate: [required('Name is required.')],
  });
  return (
    <Field label="Name" error={name.errors[0]}>
      {({ inputId }) => (
        <Input
          id={inputId}
          value={name.value ?? ''}
          onChange={(e) => name.setValue(e.target.value)}
        />
      )}
    </Field>
  );
}

function FormDemo() {
  return (
    <Form model={{}} onSubmit={() => undefined}>
      <NameField />
    </Form>
  );
}

export function FormDemos({ slug }: { slug: string }) {
  const [rating, setRating] = useState(3);
  const [slider, setSlider] = useState(40);
  const [checked, setChecked] = useState(false);
  const [code, setCode] = useState('');
  switch (slug) {
    case 'form':
      return (
        <DemoPage
          title="Form"
          description="Validators live in Validators (required shown above)."
          sections={[{ id: 'form-basic', content: <FormDemo /> }]}
        />
      );
    case 'field':
      return (
        <DemoPage
          title="Field"
          description="Deprecated — prefer FormField for new code."
          sections={[
            {
              id: 'field-states',
              content: (
                <Stack orientation="vertical" gap="md">
                  <Field label="Email" supporting="We never share it.">
                    {({ inputId }) => (
                      <Textbox id={inputId} placeholder="you@zone.app" />
                    )}
                  </Field>
                  <Field label="Broken" error="Fix this field.">
                    {({ inputId }) => <Textbox id={inputId} />}
                  </Field>
                </Stack>
              ),
            },
          ]}
        />
      );
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
                <Stack orientation="vertical" gap="md">
                  <FormField text="Email" helper="We never share it.">
                    <Textbox id="demo-email" placeholder="you@zone.app" />
                  </FormField>
                  <FormField
                    text="Bio"
                    allowFloatingLabel={false}
                    helper="A sentence or two."
                  >
                    <Textarea id="demo-bio" rows={2} />
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
                  <Textbox id="demo-search" />
                </FormField>
              ),
            },
            {
              id: 'formfield-sizes',
              title: 'Sizes',
              description: 'Size follows the field control.',
              content: (
                <Stack orientation="vertical" gap="md">
                  <FormField text="Small" helper="Size sm follows the field.">
                    <Textbox id="demo-small" size="sm" />
                  </FormField>
                  <FormField text="Large" helper="Size lg grows the box.">
                    <Textbox id="demo-large" size="lg" />
                  </FormField>
                </Stack>
              ),
            },
            {
              id: 'formfield-validation',
              title: 'Validation',
              content: (
                <FormField text="Amount" invalid helper="Must be positive.">
                  <Textbox id="demo-amount" />
                </FormField>
              ),
            },
          ]}
        />
      );
    case 'fieldset':
      return (
        <DemoPage
          title="Fieldset"
          description="Grouped fields with optional collapse."
          sections={[
            {
              id: 'fieldset-basic',
              title: 'Grouped',
              content: (
                <Fieldset text="Address">
                  <FormField text="Street">
                    <Textbox id="demo-street" />
                  </FormField>
                  <FormField text="Town">
                    <Textbox id="demo-town" />
                  </FormField>
                </Fieldset>
              ),
            },
            {
              id: 'fieldset-collapse',
              title: 'Collapsible',
              content: (
                <Fieldset text="Advanced" allowCollapse summary="2 of 5 set">
                  <FormField text="Code">
                    <Textbox id="demo-code" />
                  </FormField>
                </Fieldset>
              ),
            },
          ]}
        />
      );
    case 'input':
      return (
        <DemoPage
          title="Input"
          description="Deprecated alias of Textbox — identical rendering."
          sections={[
            {
              id: 'input-states',
              content: (
                <Stack orientation="vertical" gap="sm">
                  <Input placeholder="Default" aria-label="Default input" />
                  <Input
                    placeholder="Disabled"
                    disabled
                    aria-label="Disabled"
                  />
                </Stack>
              ),
            },
          ]}
        />
      );
    case 'textbox':
      return (
        <DemoPage
          title="Textbox"
          sections={[
            {
              id: 'textbox-states',
              content: (
                <Stack orientation="vertical" gap="sm">
                  <Textbox placeholder="Textbox" aria-label="Textbox" />
                  <Textbox placeholder="Invalid" invalid aria-label="Invalid" />
                </Stack>
              ),
            },
          ]}
        />
      );
    case 'textarea':
      return (
        <DemoPage
          title="Textarea"
          sections={[
            {
              id: 'textarea-basic',
              content: (
                <Textarea
                  rows={3}
                  placeholder="Long text"
                  aria-label="Long text"
                />
              ),
            },
          ]}
        />
      );
    case 'password':
      return (
        <DemoPage
          title="Password"
          sections={[
            {
              id: 'password-basic',
              content: (
                <Password placeholder="Password" aria-label="Password" />
              ),
            },
          ]}
        />
      );
    case 'mask':
      return (
        <DemoPage
          title="Mask"
          sections={[
            {
              id: 'mask-basic',
              content: (
                <Mask
                  mask="000-000"
                  placeholder="000-000"
                  aria-label="Masked"
                />
              ),
            },
          ]}
        />
      );
    case 'numeric':
      return (
        <DemoPage
          title="Numeric"
          sections={[
            {
              id: 'numeric-basic',
              content: <Numeric placeholder="0" aria-label="Numeric" />,
            },
          ]}
        />
      );
    case 'select':
      return (
        <DemoPage
          title="Select"
          sections={[
            {
              id: 'select-basic',
              content: (
                <Select
                  aria-label="Select"
                  options={PAIR_OPTIONS}
                  defaultValue="a"
                />
              ),
            },
          ]}
        />
      );
    case 'dropdown':
      return (
        <DemoPage
          title="Dropdown"
          sections={[
            {
              id: 'dropdown-basic',
              content: (
                <Dropdown options={PAIR_OPTIONS} aria-label="Dropdown" />
              ),
            },
          ]}
        />
      );
    case 'autocomplete':
      return (
        <DemoPage
          title="Autocomplete"
          sections={[
            {
              id: 'autocomplete-basic',
              content: (
                <Autocomplete
                  options={PAIR_OPTIONS}
                  aria-label="Autocomplete"
                />
              ),
            },
          ]}
        />
      );
    case 'listbox':
      return (
        <DemoPage
          title="Listbox"
          sections={[
            {
              id: 'listbox-basic',
              content: <Listbox options={PAIR_OPTIONS} aria-label="Listbox" />,
            },
          ]}
        />
      );
    case 'checkbox':
      return (
        <DemoPage
          title="Checkbox"
          sections={[
            {
              id: 'checkbox-basic',
              content: (
                <label>
                  <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />{' '}
                  Accept
                </label>
              ),
            },
          ]}
        />
      );
    case 'checkboxlist':
      return (
        <DemoPage
          title="Checkboxlist"
          sections={[
            {
              id: 'checkboxlist-basic',
              content: (
                <Checkboxlist
                  options={PAIR_OPTIONS}
                  aria-label="Checkboxlist"
                />
              ),
            },
          ]}
        />
      );
    case 'radiobuttonlist':
      return (
        <DemoPage
          title="Radiobuttonlist"
          sections={[
            {
              id: 'radiobuttonlist-basic',
              content: (
                <Radiobuttonlist
                  options={PAIR_OPTIONS}
                  name="choice"
                  aria-label="Choices"
                />
              ),
            },
          ]}
        />
      );
    case 'switch':
      return (
        <DemoPage
          title="Switch"
          sections={[
            {
              id: 'switch-basic',
              content: (
                <label>
                  <Switch
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />{' '}
                  Enabled
                </label>
              ),
            },
          ]}
        />
      );
    case 'slider':
      return (
        <DemoPage
          title="Slider"
          sections={[
            {
              id: 'slider-basic',
              content: (
                <>
                  <Slider
                    value={slider}
                    min={0}
                    max={100}
                    label="Level"
                    onChange={(v) => {
                      if (typeof v === 'number') setSlider(v);
                    }}
                  />
                  <Text textStyle="Body1">{slider}</Text>
                </>
              ),
            },
          ]}
        />
      );
    case 'rating':
      return (
        <DemoPage
          title="Rating"
          sections={[
            {
              id: 'rating-states',
              content: (
                <Stack orientation="vertical" gap="sm">
                  <Rating
                    value={rating}
                    onChange={setRating}
                    ariaLabel="Rating"
                  />
                  <Rating value={4} readOnly ariaLabel="Read-only rating" />
                </Stack>
              ),
            },
          ]}
        />
      );
    case 'colorpicker':
      return (
        <DemoPage
          title="Colorpicker"
          sections={[
            {
              id: 'colorpicker-basic',
              content: <Colorpicker value="#2563eb" aria-label="Color" />,
            },
          ]}
        />
      );
    case 'datepicker':
      return (
        <DemoPage
          title="Datepicker"
          sections={[
            {
              id: 'datepicker-basic',
              content: <Datepicker aria-label="Date" />,
            },
          ]}
        />
      );
    case 'timespanpicker':
      return (
        <DemoPage
          title="Timespanpicker"
          sections={[
            {
              id: 'timespanpicker-basic',
              content: <Timespanpicker aria-label="Duration" />,
            },
          ]}
        />
      );
    case 'securitycode':
      return (
        <DemoPage
          title="SecurityCode"
          sections={[
            {
              id: 'securitycode-basic',
              content: (
                <SecurityCode
                  length={4}
                  value={code}
                  onChange={setCode}
                  aria-label="Code"
                />
              ),
            },
          ]}
        />
      );
    case 'upload':
      return (
        <DemoPage
          title="Upload"
          sections={[{ id: 'upload-basic', content: <Upload url="/upload" /> }]}
        />
      );
    case 'selectbar':
      return (
        <DemoPage
          title="Selectbar"
          sections={[
            {
              id: 'selectbar-basic',
              content: (
                <Selectbar
                  options={[
                    { value: 'rider', label: 'Rider' },
                    { value: 'driver', label: 'Driver' },
                  ]}
                  defaultValue="driver"
                  aria-label="Role"
                />
              ),
            },
          ]}
        />
      );
    case 'label':
      return (
        <DemoPage
          title="Label"
          sections={[
            {
              id: 'label-basic',
              content: (
                <>
                  <Label htmlFor="demo-label-target">Plain label</Label>
                  <Input id="demo-label-target" placeholder="Labeled" />
                </>
              ),
            },
          ]}
        />
      );
    default:
      return null;
  }
}
