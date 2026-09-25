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
import { DemoSection } from './section';

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
        <DemoSection title="Form">
          <FormDemo />
          <Text textStyle="Body1" className="dx-text-muted">
            Validators live in Validators (required shown above).
          </Text>
        </DemoSection>
      );
    case 'field':
      return (
        <DemoSection title="Field">
          <Text textStyle="Body1" className="dx-text-muted">
            Deprecated — prefer FormField for new code.
          </Text>
          <Field label="Email" supporting="We never share it.">
            {({ inputId }) => (
              <Textbox id={inputId} placeholder="you@zone.app" />
            )}
          </Field>
          <Field label="Broken" error="Fix this field.">
            {({ inputId }) => <Textbox id={inputId} />}
          </Field>
        </DemoSection>
      );
    case 'formfield':
      return (
        <DemoSection title="FormField">
          <Text textStyle="Body1" className="dx-text-muted">
            Custom controls carry explicit ids — FormField cannot backfill ids
            it cannot see, so the label points at the id you pass.
          </Text>
          <FormField text="Email" helper="We never share it.">
            <Textbox id="demo-email" placeholder="you@zone.app" />
          </FormField>
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
          <FormField
            text="Bio"
            allowFloatingLabel={false}
            helper="A sentence or two."
          >
            <Textarea id="demo-bio" rows={2} />
          </FormField>
          <FormField text="Amount" invalid helper="Must be positive.">
            <Textbox id="demo-amount" />
          </FormField>
        </DemoSection>
      );
    case 'fieldset':
      return (
        <DemoSection title="Fieldset">
          <Fieldset text="Address">
            <FormField text="Street">
              <Textbox id="demo-street" />
            </FormField>
            <FormField text="Town">
              <Textbox id="demo-town" />
            </FormField>
          </Fieldset>
          <Fieldset text="Advanced" allowCollapse summary="2 of 5 set">
            <FormField text="Code">
              <Textbox id="demo-code" />
            </FormField>
          </Fieldset>
        </DemoSection>
      );
    case 'input':
      return (
        <DemoSection title="Input">
          <Text textStyle="Body1" className="dx-text-muted">
            Deprecated alias of Textbox — identical rendering.
          </Text>
          <Stack orientation="vertical" gap="sm">
            <Input placeholder="Default" aria-label="Default input" />
            <Input placeholder="Disabled" disabled aria-label="Disabled" />
          </Stack>
        </DemoSection>
      );
    case 'textbox':
      return (
        <DemoSection title="Textbox">
          <Textbox placeholder="Textbox" aria-label="Textbox" />
          <Textbox placeholder="Invalid" invalid aria-label="Invalid" />
        </DemoSection>
      );
    case 'textarea':
      return (
        <DemoSection title="Textarea">
          <Textarea rows={3} placeholder="Long text" aria-label="Long text" />
        </DemoSection>
      );
    case 'password':
      return (
        <DemoSection title="Password">
          <Password placeholder="Password" aria-label="Password" />
        </DemoSection>
      );
    case 'mask':
      return (
        <DemoSection title="Mask">
          <Mask mask="000-000" placeholder="000-000" aria-label="Masked" />
        </DemoSection>
      );
    case 'numeric':
      return (
        <DemoSection title="Numeric">
          <Numeric placeholder="0" aria-label="Numeric" />
        </DemoSection>
      );
    case 'select':
      return (
        <DemoSection title="Select">
          <Select aria-label="Select" options={PAIR_OPTIONS} defaultValue="a" />
        </DemoSection>
      );
    case 'dropdown':
      return (
        <DemoSection title="Dropdown">
          <Dropdown options={PAIR_OPTIONS} aria-label="Dropdown" />
        </DemoSection>
      );
    case 'autocomplete':
      return (
        <DemoSection title="Autocomplete">
          <Autocomplete options={PAIR_OPTIONS} aria-label="Autocomplete" />
        </DemoSection>
      );
    case 'listbox':
      return (
        <DemoSection title="Listbox">
          <Listbox options={PAIR_OPTIONS} aria-label="Listbox" />
        </DemoSection>
      );
    case 'checkbox':
      return (
        <DemoSection title="Checkbox">
          <label>
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />{' '}
            Accept
          </label>
        </DemoSection>
      );
    case 'checkboxlist':
      return (
        <DemoSection title="Checkboxlist">
          <Checkboxlist options={PAIR_OPTIONS} aria-label="Checkboxlist" />
        </DemoSection>
      );
    case 'radiobuttonlist':
      return (
        <DemoSection title="Radiobuttonlist">
          <Radiobuttonlist
            options={PAIR_OPTIONS}
            name="choice"
            aria-label="Choices"
          />
        </DemoSection>
      );
    case 'switch':
      return (
        <DemoSection title="Switch">
          <label>
            <Switch
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />{' '}
            Enabled
          </label>
        </DemoSection>
      );
    case 'slider':
      return (
        <DemoSection title="Slider">
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
        </DemoSection>
      );
    case 'rating':
      return (
        <DemoSection title="Rating">
          <Rating value={rating} onChange={setRating} ariaLabel="Rating" />
          <Rating value={4} readOnly ariaLabel="Read-only rating" />
        </DemoSection>
      );
    case 'colorpicker':
      return (
        <DemoSection title="Colorpicker">
          <Colorpicker value="#2563eb" aria-label="Color" />
        </DemoSection>
      );
    case 'datepicker':
      return (
        <DemoSection title="Datepicker">
          <Datepicker aria-label="Date" />
        </DemoSection>
      );
    case 'timespanpicker':
      return (
        <DemoSection title="Timespanpicker">
          <Timespanpicker aria-label="Duration" />
        </DemoSection>
      );
    case 'securitycode':
      return (
        <DemoSection title="SecurityCode">
          <SecurityCode
            length={4}
            value={code}
            onChange={setCode}
            aria-label="Code"
          />
        </DemoSection>
      );
    case 'upload':
      return (
        <DemoSection title="Upload">
          <Upload url="/upload" />
        </DemoSection>
      );
    case 'selectbar':
      return (
        <DemoSection title="Selectbar">
          <Selectbar
            options={[
              { value: 'rider', label: 'Rider' },
              { value: 'driver', label: 'Driver' },
            ]}
            defaultValue="driver"
            aria-label="Role"
          />
        </DemoSection>
      );
    case 'label':
      return (
        <DemoSection title="Label">
          <Label htmlFor="demo-label-target">Plain label</Label>
          <Input id="demo-label-target" placeholder="Labeled" />
        </DemoSection>
      );
    default:
      return null;
  }
}
