# Dialog

<a href="http://dev.office.com/fabric/components/Dialog" target="_blank">View Office Fabric UI docs</a>

```jsx
import Dialog from 'react-fabric/lib/Dialog';

// TODO...
```

## Properties

| Name          | Type   | Default     | Description                                                        |
| :-----        | :----- | :-----      | :-----                                                             |
| `closeable`   | `bool` | `false`     | Set to `true` render the dialog's close button (top-right corner). |
| `darkOverlay` | `bool` | `true`      | Set to `true` to show a dark overlay instead of the default one.   |
| `hidden`      | `bool` | `true`      | Set to `false` to show the dialog.                                 |
| `onClose`     | `func` | `undefined` | Function callback when the dialog should be closed.                |

# DialogTitle

Use this component to set the title of the dialog.

# DialogSubtext

Use this component to render its children in a `.ms-Dialog-subText` container.

# DialogAction

Wrapper component for a [Button](/components/Button), rendered in the `.ms-Dialog-actions` container.
