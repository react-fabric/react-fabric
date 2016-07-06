# Dialog

The Dialog component wraps its chilren in a dialog. Accepts arbitrary React elements as children but
the [DialogTitle](#dialogtitle), [DialogSubtext](#dialogsubtext) and [DialogAction](#dialogaction) components
have a special semantic when rendered.

<a href="http://dev.office.com/fabric/components/Dialog" target="_blank">View Office Fabric UI docs</a>

## Example <!-- EXAMPLE -->
```jsx
import Dialog from 'react-fabric/lib/Dialog';
// or import Dialog, { DialogTitle, DialogAction, DialogSubtext };

class DialogExample extends React.Component {
  state = { isHidden: true };

  show() { this.setState({ isHidden: false }) }
  hide() { this.setState({ isHidden: true }) }

  render() {
    return (
      <section>
        <Dialog closeable
          onClose={::this.hide}
          hidden={this.state.isHidden}>
          <Dialog.Title>My Dialog</Dialog.Title>
          <Dialog.Subtext>Click overlay or close button to close</Dialog.Subtext>
          <Dialog.Action type="primary" onClick={::this.hide}>Ok</Dialog.Action>
          <Dialog.Action onClick={::this.hide}>Cancel</Dialog.Action>
        </Dialog>
        <Button onClick={::this.show}>Show Dialog</Button>
      </section>
    );
  }
}

return <DialogExample />;
```

## Properties

| Name          | Type          | Default     | Description                                                        |
| :-----        | :-----        | :-----      | :-----                                                             |
| `closeable`   | `bool`        | `false`     | Set to `true` render the dialog's close button (top-right corner). |
| `darkOverlay` | `bool`        | `true`      | Set to `true` to show a dark overlay instead of the default one.   |
| `hidden`      | `bool`        | `true`      | Set to `false` to show the dialog.                                 |
| `onClose`     | `func(event)` | `undefined` | Function callback when the dialog should be closed.                |

# DialogTitle

Use this component to set the title of the dialog. Only one is allowed, additional `DialogTitle` components are ignored.

# DialogSubtext

Use this component to render its children in a `.ms-Dialog-subText` container.

# DialogAction

Wrapper component for a [Button](/components/Button), rendered in the `.ms-Dialog-actions` container.
