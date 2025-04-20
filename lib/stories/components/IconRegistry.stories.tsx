import type {Meta, StoryObj} from '@storybook/react';
import {useEffect, useState} from 'react';
import {
    Icon,

} from "@/components";
import {getIconNames, loadAndRegisterSvgIcon, registerIcon, registerIcons, registerSvgIcon} from "@/components/ui/icon";

const meta = {
    title: 'Components/IconRegistry',
    component: () => null,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'The IconRegistry allows you to register and use custom icons in your application.'
            }
        }
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;

// Example of registering a custom icon
const CustomIconExample = () => {
    const [registered, setRegistered] = useState(false);

    useEffect(() => {
        // Register a custom icon
        registerIcon('custom-star', {
            content: (
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            ),
            viewBox: '0 0 24 24',
        });
        setRegistered(true);
    }, []);

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Custom Icon Registration</h2>
            <p>This example demonstrates how to register and use a custom icon.</p>

            <div className="flex items-center gap-4">
                <div className="p-4 border rounded-md">
                    <Icon name="custom-star" size="large"/>
                </div>
                <div>
                    <p><code>name: "custom-star"</code></p>
                    <p>Status: {registered ? 'Registered' : 'Registering...'}</p>
                </div>
            </div>

            <div className="mt-4 p-4 bg-gray-100 rounded-md">
        <pre className="text-sm">
{`// Register a custom icon
registerIcon('custom-star', {
  content: (
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),
  viewBox: '0 0 24 24',
});

// Use the custom icon
<Icon name="custom-star" size="large" />`}
        </pre>
            </div>
        </div>
    );
};

export const RegisterCustomIcon: StoryObj = {
    render: () => <CustomIconExample/>,
};

// Example showing all registered icons
export const AllRegisteredIcons: StoryObj = {
    render: () => {
        const [iconNames, setIconNames] = useState<string[]>([]);

        useEffect(() => {
            // Get all registered icon names
            setIconNames(getIconNames());
        }, []);

        return (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">All Registered Icons</h2>
                <p>This example shows all icons currently registered in the IconRegistry.</p>

                <div className="grid grid-cols-4 gap-4">
                    {iconNames.map((name) => (
                        <div
                            key={name}
                            className="flex flex-col items-center p-4 border rounded-md"
                        >
                            <Icon name={name} size="medium"/>
                            <span className="mt-2 text-sm">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};

// Example showing how to register multiple icons at once
export const RegisterMultipleIcons: StoryObj = {
    render: () => {
        const [registered, setRegistered] = useState(false);

        useEffect(() => {
            // Register multiple custom icons at once
            registerIcons({
                'custom-circle': {
                    content: <circle cx="12" cy="12" r="10"/>,
                    viewBox: '0 0 24 24',
                },
                'custom-square': {
                    content: <rect x="4" y="4" width="16" height="16" rx="2"/>,
                    viewBox: '0 0 24 24',
                },
                'custom-triangle': {
                    content: <path d="M12 2L22 22H2L12 2z"/>,
                    viewBox: '0 0 24 24',
                },
            });

            setRegistered(true);
        }, []);

        return (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Register Multiple Icons</h2>
                <p>This example demonstrates how to register multiple icons at once.</p>

                <div className="flex items-center gap-4">
                    {registered && (
                        <>
                            <div className="p-4 border rounded-md">
                                <Icon name="custom-circle" size="medium"/>
                            </div>
                            <div className="p-4 border rounded-md">
                                <Icon name="custom-square" size="medium"/>
                            </div>
                            <div className="p-4 border rounded-md">
                                <Icon name="custom-triangle" size="medium"/>
                            </div>
                        </>
                    )}
                </div>

                <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <pre className="text-sm">
{`// Register multiple custom icons at once
registerIcons({
  'custom-circle': {
    content: <circle cx="12" cy="12" r="10" />,
    viewBox: '0 0 24 24',
  },
  'custom-square': {
    content: <rect x="4" y="4" width="16" height="16" rx="2" />,
    viewBox: '0 0 24 24',
  },
  'custom-triangle': {
    content: <path d="M12 2L22 22H2L12 2z" />,
    viewBox: '0 0 24 24',
  },
});`}
          </pre>
                </div>
            </div>
        );
    },
};

// Example showing how to register an SVG file using the new utility
export const RegisterSvgString: StoryObj = {
    render: () => {
        const [registered, setRegistered] = useState(false);

        useEffect(() => {
            // SVG string for a smiley face icon
            const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      `;

            // Register the SVG string as an icon
            registerSvgIcon('custom-smile-new', svgString);

            setRegistered(true);
        }, []);

        return (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Register SVG String</h2>
                <p>This example demonstrates how to register an icon from an SVG string using the new utility
                    function.</p>

                <div className="flex items-center gap-4">
                    <div className="p-4 border rounded-md">
                        <Icon name="custom-smile-new" size="large"/>
                    </div>
                    <div>
                        <p><code>name: "custom-smile-new"</code></p>
                        <p>Status: {registered ? 'Registered' : 'Registering...'}</p>
                    </div>
                </div>

                <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <pre className="text-sm">
{`
// SVG string for a smiley face icon
const svgString = \`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>\`;

                // Register the SVG string as an icon
                  registerSvgIcon('custom-smile-new', svgString);

                // Use the custom icon
                  <Icon name="custom-smile-new" size="large" />
`
}
          </pre>
                </div>
            </div>
        );
    },
};

// Example showing how to load and register an SVG file
export const LoadAndRegisterSvgFile: StoryObj = {
    render: () => {
        const [loading, setLoading] = useState(false);
        const [registered, setRegistered] = useState(false);
        const [error, setError] = useState<string | null>(null);

        const handleLoadIcon = async () => {
            setLoading(true);
            setError(null);

            try {
                // Load and register an SVG file
                await loadAndRegisterSvgIcon(
                    'heart-icon',
                    '/lib/components/ui/icon/assets/heart.svg'
                );
                setRegistered(true);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load SVG file');
            } finally {
                setLoading(false);
            }
        };

        return (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Load and Register SVG File</h2>
                <p>This example demonstrates how to load and register an icon from an SVG file.</p>

                <div className="flex flex-col gap-4">
                    <button
                        onClick={handleLoadIcon}
                        disabled={loading || registered}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
                    >
                        {loading ? 'Loading...' : registered ? 'Icon Registered' : 'Load Heart Icon'}
                    </button>

                    {error && (
                        <div className="p-4 bg-red-100 text-red-700 rounded-md">
                            Error: {error}
                        </div>
                    )}

                    {registered && (
                        <div className="flex items-center gap-4">
                            <div className="p-4 border rounded-md">
                                <Icon name="heart-icon" size="large"/>
                            </div>
                            <div>
                                <p><code>name: "heart-icon"</code></p>
                                <p>Status: Registered</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <pre className="text-sm">
{`// Load and register an SVG file
await loadAndRegisterSvgIcon(
  'heart-icon',
  '/lib/components/ui/icon/assets/heart.svg'
);

// Use the custom icon
<Icon name="heart-icon" size="large" />`}
          </pre>
                </div>
            </div>
        );
    },
};

// Example showing the original SVG parsing approach
export const RegisterSvgFile: StoryObj = {
    render: () => {
        const [registered, setRegistered] = useState(false);

        useEffect(() => {
            // Register a custom icon from an SVG string
            const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <circle cx="15.5" cy="8.5" r="1.5"></circle>
          <path d="M7 13a5 5 0 0 0 10 0"></path>
        </svg>
      `;

            // Parse the SVG string to extract the content
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
            const svgElement = svgDoc.documentElement;

            // Extract the viewBox
            const viewBox = svgElement.getAttribute('viewBox') || '0 0 24 24';

            // Extract the content (all child nodes)
            const content = Array.from(svgElement.childNodes)
                .filter(node => node.nodeType === 1) // Only element nodes
                .map(node => {
                    const element = node as Element;
                    if (element.tagName === 'rect') {
                        return (
                            <rect
                                key="rect"
                                x={element.getAttribute('x') || '0'}
                                y={element.getAttribute('y') || '0'}
                                width={element.getAttribute('width') || '0'}
                                height={element.getAttribute('height') || '0'}
                                rx={element.getAttribute('rx') || '0'}
                                ry={element.getAttribute('ry') || '0'}
                            />
                        );
                    } else if (element.tagName === 'circle') {
                        return (
                            <circle
                                key={`circle-${element.getAttribute('cx')}-${element.getAttribute('cy')}`}
                                cx={element.getAttribute('cx') || '0'}
                                cy={element.getAttribute('cy') || '0'}
                                r={element.getAttribute('r') || '0'}
                            />
                        );
                    } else if (element.tagName === 'path') {
                        return <path key="path" d={element.getAttribute('d') || ''}/>;
                    }
                    return null;
                });

            // Register the icon
            registerIcon('custom-smile', {
                content: <>{content}</>,
                viewBox,
            });

            setRegistered(true);
        }, []);

        return (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Register SVG File</h2>
                <p>This example demonstrates how to register an icon from an SVG file or string.</p>

                <div className="flex items-center gap-4">
                    <div className="p-4 border rounded-md">
                        <Icon name="custom-smile" size="large"/>
                    </div>
                    <div>
                        <p><code>name: "custom-smile"</code></p>
                        <p>Status: {registered ? 'Registered' : 'Registering...'}</p>
                    </div>
                </div>

                <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <pre className="text-sm">
{`// Parse SVG string to extract content
const parser = new DOMParser();
const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
const svgElement = svgDoc.documentElement;

// Extract the viewBox
const viewBox = svgElement.getAttribute('viewBox') || '0 0 24 24';

// Extract the content (simplified)
const content = Array.from(svgElement.childNodes)
  .filter(node => node.nodeType === 1)
  .map(node => {
    // Convert SVG elements to React elements
    // ...
  });

// Register the icon
registerIcon('custom-smile', {
  content: <>{content}</>,
  viewBox,
});`}
          </pre>
                </div>
            </div>
        );
    },
};

// Example showing how to create a component that registers icons on mount
export const IconRegistryProvider: StoryObj = {
    render: () => {
        // Create a component that registers icons on mount
        const IconRegistryProvider = ({children}: { children: React.ReactNode }) => {
            const [initialized, setInitialized] = useState(false);

            useEffect(() => {
                // Register custom icons
                registerIcons({
                    'provider-circle': {
                        content: <circle cx="12" cy="12" r="10" fill="currentColor"/>,
                        viewBox: '0 0 24 24',
                    },
                    'provider-square': {
                        content: <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>,
                        viewBox: '0 0 24 24',
                    },
                    'provider-diamond': {
                        content: <path d="M12 2L22 12L12 22L2 12L12 2z" fill="currentColor"/>,
                        viewBox: '0 0 24 24',
                    },
                });

                setInitialized(true);
            }, []);

            if (!initialized) {
                return <div>Initializing icon registry...</div>;
            }

            return <>{children}</>;
        };

        // Example component that uses the registered icons
        const IconDemo = () => {
            return (
                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <Icon name="provider-circle" size="medium" variant="primary"/>
                        <span className="mt-2 text-sm">provider-circle</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Icon name="provider-square" size="medium" variant="secondary"/>
                        <span className="mt-2 text-sm">provider-square</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Icon name="provider-diamond" size="medium" variant="success"/>
                        <span className="mt-2 text-sm">provider-diamond</span>
                    </div>
                </div>
            );
        };

        return (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Icon Registry Provider</h2>
                <p>This example demonstrates how to create a component that registers icons on mount.</p>

                <IconRegistryProvider>
                    <IconDemo/>
                </IconRegistryProvider>

                <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <pre className="text-sm">
{`// Create a component that registers icons on mount
const IconRegistryProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Register custom icons
    registerIcons({
      'provider-circle': {
        content: <circle cx="12" cy="12" r="10" fill="currentColor" />,
        viewBox: '0 0 24 24',
      },
      'provider-square': {
        content: <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />,
        viewBox: '0 0 24 24',
      },
      'provider-diamond': {
        content: <path d="M12 2L22 12L12 22L2 12L12 2z" fill="currentColor" />,
        viewBox: '0 0 24 24',
      },
    });

    setInitialized(true);
  }, []);

  if (!initialized) {
    return <div>Initializing icon registry...</div>;
  }

  return <>{children}</>;
};

// Use the provider in your application
<IconRegistryProvider>
  <YourApp />
</IconRegistryProvider>`}
          </pre>
                </div>
            </div>
        );
    },
};