# Components

Select a component on the left to view its documentation.<br>
Striked through components are not yet implemented. If you desparately need one,
feel free to contribute :).

All components pass down all additional properties, i.e. not listed in the **Properties**
section of the component, to the root element of the component if not stated otherwise.
This is useful for passing down properties such as `id`, `className` or `tabindex`.

All components also accept a `children` property of type `React.PropTypes.node` unless
stated otherwise in the **Properties** section of the components documentation.
