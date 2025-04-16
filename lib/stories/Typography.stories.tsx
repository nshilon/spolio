import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@/components';

const meta = {
  title: 'Tokens/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'body', 'bodySmall', 'bodyLarge',
        'display', 'caption', 'code', 'lead', 'overline', 'label'
      ],
      description: 'The typography variant which determines the default styling and HTML element',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      description: 'The font size',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
      description: 'The font weight',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'muted', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'Text color',
    },
    transform: {
      control: { type: 'select' },
      options: ['uppercase', 'lowercase', 'capitalize', 'normal'],
      description: 'Text transform',
    },
    decoration: {
      control: { type: 'select' },
      options: ['underline', 'lineThrough', 'noUnderline'],
      description: 'Text decoration',
    },
    as: {
      control: { type: 'text' },
      description: 'Override the HTML element',
    },
    children: {
      control: 'text',
      description: 'The content to display',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'This is a paragraph of text. It demonstrates the body text style. The quick brown fox jumps over the lazy dog.',
  },
};

export const BodySmall: Story = {
  args: {
    variant: 'bodySmall',
    children: 'This is small body text. It demonstrates the small body text style. The quick brown fox jumps over the lazy dog.',
  },
};

export const BodyLarge: Story = {
  args: {
    variant: 'bodyLarge',
    children: 'This is large body text. It demonstrates the large body text style. The quick brown fox jumps over the lazy dog.',
  },
};

export const Display: Story = {
  args: {
    variant: 'display',
    children: 'Display Text',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'This is a caption text',
  },
};

export const Code: Story = {
  args: {
    variant: 'code',
    children: 'const greeting = "Hello, world!";',
  },
};

export const Lead: Story = {
  args: {
    variant: 'lead',
    children: 'This is a lead paragraph that introduces the main content. It stands out from regular body text.',
  },
};

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Overline Text',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Form Field Label',
  },
};

export const CustomColor: Story = {
  args: {
    color: 'primary',
    children: 'This text has a primary color',
  },
};

export const CustomWeight: Story = {
  args: {
    weight: 'bold',
    children: 'This text has bold weight',
  },
};

export const CustomAlignment: Story = {
  args: {
    align: 'center',
    children: 'This text is center aligned',
  },
};

export const CustomTransform: Story = {
  args: {
    transform: 'uppercase',
    children: 'This text is uppercase',
  },
};

export const CustomDecoration: Story = {
  args: {
    decoration: 'underline',
    children: 'This text is underlined',
  },
};

export const CustomElement: Story = {
  args: {
    variant: 'h1',
    as: 'div',
    children: 'This is an H1 styled as a div',
  },
};

export const DarkModeComparison: StoryObj = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '1200px' }}>
      <div style={{ padding: '2rem', borderRadius: '0.5rem', background: 'white' }}>
        <Typography variant="h2" className="mb-6">Light Mode</Typography>

        <div className="space-y-4">
          <Typography variant="h4">Headings</Typography>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h5">Heading 5</Typography>

          <Typography variant="h4" className="mt-8">Text Colors</Typography>
          <Typography color="default">Default color</Typography>
          <Typography color="muted">Muted color</Typography>
          <Typography color="primary">Primary color</Typography>
          <Typography color="success">Success color</Typography>
          <Typography color="danger">Danger color</Typography>

          <Typography variant="h4" className="mt-8">Special Styles</Typography>
          <Typography variant="lead">Lead paragraph text</Typography>
          <Typography variant="code">Code example</Typography>
          <Typography variant="caption">Caption text</Typography>
        </div>
      </div>

      <div style={{ padding: '2rem', borderRadius: '0.5rem', background: '#171717' }} className="dark">
        <Typography variant="h2" className="mb-6">Dark Mode</Typography>

        <div className="space-y-4">
          <Typography variant="h4">Headings</Typography>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h5">Heading 5</Typography>

          <Typography variant="h4" className="mt-8">Text Colors</Typography>
          <Typography color="default">Default color</Typography>
          <Typography color="muted">Muted color</Typography>
          <Typography color="primary">Primary color</Typography>
          <Typography color="success">Success color</Typography>
          <Typography color="danger">Danger color</Typography>

          <Typography variant="h4" className="mt-8">Special Styles</Typography>
          <Typography variant="lead">Lead paragraph text</Typography>
          <Typography variant="code">Code example</Typography>
          <Typography variant="caption">Caption text</Typography>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveTypography: StoryObj = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <Typography variant="h2" className="mb-6">Responsive Typography</Typography>

      <div className="space-y-8">
        <div>
          <Typography variant="h4" className="mb-2">On Mobile Screens (resize window to see)</Typography>
          <div className="p-4 border border-neutral-200 rounded-md">
            <Typography variant="h1" className="sm:text-5xl text-3xl">Responsive H1</Typography>
            <Typography variant="body" className="sm:text-base text-sm">This text will be smaller on mobile devices.</Typography>
          </div>
        </div>

        <div>
          <Typography variant="h4" className="mb-2">Responsive Line Length</Typography>
          <div className="p-4 border border-neutral-200 rounded-md max-w-prose">
            <Typography variant="body">
              This paragraph demonstrates a responsive line length. The max-width is set to maintain
              optimal readability across different screen sizes. Too long lines are hard to read,
              while too short lines break the reader's rhythm. The ideal line length is considered
              to be 50-75 characters.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CombiningWithTailwind: StoryObj = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <Typography variant="h2" className="mb-6">Combining With Tailwind Classes</Typography>

      <div className="space-y-8">
        <div className="p-6 bg-primary-50 dark:bg-primary-900 rounded-lg">
          <Typography variant="h3" className="text-primary-800 dark:text-primary-100 mb-4">
            Custom Card Heading
          </Typography>
          <Typography variant="body" className="text-primary-700 dark:text-primary-200">
            This example shows how you can combine the Typography component with additional
            Tailwind classes to create custom styled elements. The background and text colors
            are customized while maintaining the typography styles.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-success-50 dark:bg-success-900 rounded-md">
            <Typography variant="h5" className="text-success-700 dark:text-success-100">
              Success Card
            </Typography>
            <Typography variant="bodySmall" className="text-success-600 dark:text-success-200">
              Success message details
            </Typography>
          </div>

          <div className="p-4 bg-warning-50 dark:bg-warning-900 rounded-md">
            <Typography variant="h5" className="text-warning-700 dark:text-warning-100">
              Warning Card
            </Typography>
            <Typography variant="bodySmall" className="text-warning-600 dark:text-warning-200">
              Warning message details
            </Typography>
          </div>

          <div className="p-4 bg-danger-50 dark:bg-danger-900 rounded-md">
            <Typography variant="h5" className="text-danger-700 dark:text-danger-100">
              Danger Card
            </Typography>
            <Typography variant="bodySmall" className="text-danger-600 dark:text-danger-200">
              Danger message details
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const RealWorldExample: StoryObj = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Typography variant="overline" color="primary">BLOG POST</Typography>
        <Typography variant="h1" className="mb-4">Designing with Typography</Typography>
        <Typography variant="lead">
          Good typography can help create clear hierarchies, organize information, and guide users through a product or experience.
        </Typography>

        <div className="flex items-center mt-6 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <Typography variant="body" color="primary" className="font-bold">JD</Typography>
          </div>
          <div>
            <Typography variant="bodySmall" className="font-medium">Jane Doe</Typography>
            <Typography variant="caption">May 15, 2023 · 5 min read</Typography>
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        <Typography variant="h2">The Importance of Typography in UI Design</Typography>
        <Typography variant="body">
          Typography is a fundamental element of design that significantly impacts how users perceive and interact with a product.
          Well-executed typography enhances readability, establishes hierarchy, and creates visual interest.
        </Typography>

        <Typography variant="body">
          When designing interfaces, typography serves several critical functions:
        </Typography>

        <ul className="my-4 pl-6 list-disc">
          <li>
            <Typography as="span" variant="body" weight="medium">Establishing hierarchy</Typography>
            <Typography as="span" variant="body"> — Guiding users through content in order of importance</Typography>
          </li>
          <li>
            <Typography as="span" variant="body" weight="medium">Improving readability</Typography>
            <Typography as="span" variant="body"> — Making content easy to scan and comprehend</Typography>
          </li>
          <li>
            <Typography as="span" variant="body" weight="medium">Creating consistency</Typography>
            <Typography as="span" variant="body"> — Building a cohesive visual language across the product</Typography>
          </li>
          <li>
            <Typography as="span" variant="body" weight="medium">Conveying personality</Typography>
            <Typography as="span" variant="body"> — Expressing brand identity through type choices</Typography>
          </li>
        </ul>

        <Typography variant="h3">Key Principles of Effective Typography</Typography>

        <Typography variant="body">
          Creating effective typography systems requires attention to several key principles:
        </Typography>

        <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-md my-6">
          <Typography variant="code" className="block mb-2">// Example of a typography scale</Typography>
          <Typography variant="code" className="block">const fontSizes = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60];</Typography>
        </div>

        <Typography variant="h4">Contrast and Hierarchy</Typography>
        <Typography variant="body">
          Effective typography creates clear contrast between different elements. Headings should stand out from body text,
          and important information should be immediately distinguishable from supporting details.
        </Typography>

        <Typography variant="caption" className="block mt-8 italic">
          Image: Typography examples showing contrast and hierarchy would be placed here.
        </Typography>

        <Typography variant="h4" className="mt-6">Consistency and Rhythm</Typography>
        <Typography variant="body">
          Consistent typography creates a sense of rhythm and predictability that helps users navigate content.
          This includes maintaining consistent spacing, alignment, and type treatments throughout the interface.
        </Typography>

        <div className="border-l-4 border-primary-300 dark:border-primary-700 pl-4 my-6">
          <Typography variant="body" className="italic">
            "Typography is what language looks like."
          </Typography>
          <Typography variant="bodySmall" className="mt-2">— Ellen Lupton, Graphic Designer</Typography>
        </div>
      </div>
    </div>
  ),
};

export const TypographyShowcase: StoryObj = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Typography variant="display">Typography System</Typography>

      <div>
        <Typography variant="h2">Headings</Typography>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
      </div>

      <div>
        <Typography variant="h2">Body Text</Typography>
        <Typography variant="bodyLarge">
          This is large body text. It's slightly larger than the standard body text and can be used for important paragraphs or introductions.
        </Typography>
        <Typography variant="body">
          This is standard body text. It's used for the main content of your application. The quick brown fox jumps over the lazy dog.
          This paragraph demonstrates the default line height and spacing of body text.
        </Typography>
        <Typography variant="bodySmall">
          This is small body text. It's used for less important information, footnotes, or supplementary content.
          The smaller size helps create visual hierarchy.
        </Typography>
      </div>

      <div>
        <Typography variant="h2">Special Text Styles</Typography>
        <Typography variant="lead">
          This is a lead paragraph. It's used at the beginning of an article or section to introduce the content.
          It's larger and more prominent than standard body text.
        </Typography>
        <Typography variant="caption">This is caption text, used for image captions or supplementary information.</Typography>
        <Typography variant="code">const greeting = "Hello, world!";</Typography>
        <Typography variant="overline">Overline Text</Typography>
        <Typography variant="label">Form Field Label</Typography>
      </div>

      <div>
        <Typography variant="h2">Text Colors</Typography>
        <Typography color="default">Default color text</Typography>
        <Typography color="muted">Muted color text</Typography>
        <Typography color="primary">Primary color text</Typography>
        <Typography color="secondary">Secondary color text</Typography>
        <Typography color="success">Success color text</Typography>
        <Typography color="warning">Warning color text</Typography>
        <Typography color="danger">Danger color text</Typography>
        <Typography color="info">Info color text</Typography>
      </div>

      <div>
        <Typography variant="h2">Font Weights</Typography>
        <Typography weight="light">Light weight text (300)</Typography>
        <Typography weight="regular">Regular weight text (400)</Typography>
        <Typography weight="medium">Medium weight text (500)</Typography>
        <Typography weight="semibold">Semibold weight text (600)</Typography>
        <Typography weight="bold">Bold weight text (700)</Typography>
      </div>

      <div>
        <Typography variant="h2">Text Alignment</Typography>
        <Typography align="left">Left aligned text (default)</Typography>
        <Typography align="center">Center aligned text</Typography>
        <Typography align="right">Right aligned text</Typography>
        <Typography align="justify">
          Justified text. This paragraph has justify alignment which spreads the text evenly across the full width.
          This is particularly noticeable in longer paragraphs with multiple lines of text.
        </Typography>
      </div>

      <div>
        <Typography variant="h2">Text Transforms</Typography>
        <Typography transform="uppercase">Uppercase text</Typography>
        <Typography transform="lowercase">LOWERCASE TEXT</Typography>
        <Typography transform="capitalize">capitalize each word</Typography>
        <Typography transform="normal">Normal case text</Typography>
      </div>

      <div>
        <Typography variant="h2">Text Decorations</Typography>
        <Typography decoration="underline">Underlined text</Typography>
        <Typography decoration="lineThrough">Strikethrough text</Typography>
        <Typography decoration="noUnderline">No underline (useful for links)</Typography>
      </div>
    </div>
  ),
};
