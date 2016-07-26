<a name="0.4.1"></a>
## [0.4.1](https://github.com/react-fabric/react-fabric/compare/0.4.0...v0.4.1) (2016-07-26)


### Bug Fixes

* **bower:** extract css from bundled css ([679fd18](https://github.com/react-fabric/react-fabric/commit/679fd18))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/react-fabric/react-fabric/compare/0.3.1...v0.4.0) (2016-07-26)


### Bug Fixes

* **fabricComponent:** remove unused contextTypes definition ([3e3aa60](https://github.com/react-fabric/react-fabric/commit/3e3aa60))


### Features

* **bower:** prepare for bower release ([3b602ba](https://github.com/react-fabric/react-fabric/commit/3b602ba))
* **SearchBox:** implement the SearchBox component. ([9f8f74d](https://github.com/react-fabric/react-fabric/commit/9f8f74d))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/react-fabric/react-fabric/compare/0.3.0...v0.3.1) (2016-07-19)


### Bug Fixes

* **NavBar:** allow any nodes as children but wrap them in a NavBarItem ([80aa49e](https://github.com/react-fabric/react-fabric/commit/80aa49e))
* **package:** move 'react-css-modules' to dependencies and add missing 'babel-runtime' dependency. Fix [#9](https://github.com/react-fabric/react-fabric/issues/9) ([a12958b](https://github.com/react-fabric/react-fabric/commit/a12958b)), closes [#9](https://github.com/react-fabric/react-fabric/issues/9)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/react-fabric/react-fabric/compare/0.2.0...v0.3.0) (2016-07-07)


### Bug Fixes

* **Button:** remove margin from hero button icon ([e93eb91](https://github.com/react-fabric/react-fabric/commit/e93eb91))
* **Table:** Add Table export ([de03811](https://github.com/react-fabric/react-fabric/commit/de03811))


### Features

* move repo to react-fabric organization ([0ea4f2b](https://github.com/react-fabric/react-fabric/commit/0ea4f2b))
* **ChoiceFieldGroup:** Add support for value/onChange properties. ([b519501](https://github.com/react-fabric/react-fabric/commit/b519501))
* **Dropdown:** pass event to ui event handlers (onChange, onFocus, onBlur) as first argument ([d81dad0](https://github.com/react-fabric/react-fabric/commit/d81dad0))


### BREAKING CHANGES

* Dropdown: onChange was invoked with value as first argument

Migration:
onChange(value) -> onChange(e, option)
* ChoiceFieldGroup: checked/onChange properties of children ChoiceFields
are overwritten by ChoiceFieldGroup. Use value/onChange of the
ChoiceFieldGroup instead.
* repo now at https://github.com/react-fabric/react-fabric



<a name="0.2.0"></a>
# [0.2.0](https://github.com/react-fabric/react-fabric/compare/0.1.7...0.2.0) (2016-07-05)


### Bug Fixes

* **ChoiceField:** add displayName ([d933a0c](https://github.com/react-fabric/react-fabric/commit/d933a0c))
* **Icon:** extract glyph types from 2.6.1 instead of 3.0.0-beta ([32921c0](https://github.com/react-fabric/react-fabric/commit/32921c0))


### Features

* setup test infrastructure ([7a12510](https://github.com/react-fabric/react-fabric/commit/7a12510))



<a name="0.1.7"></a>
## [0.1.7](https://github.com/react-fabric/react-fabric/compare/0.1.6...0.1.7) (2016-06-06)


### Bug Fixes

* **Link:** remove unused prop from propTypes ([f060eea](https://github.com/react-fabric/react-fabric/commit/f060eea))


### Features

* **List:** add selectable prop to list ([70ddf4f](https://github.com/react-fabric/react-fabric/commit/70ddf4f))
* **List:** implement List component ([efed119](https://github.com/react-fabric/react-fabric/commit/efed119))
* **ListItem:** implement ListItem component ([0c4976a](https://github.com/react-fabric/react-fabric/commit/0c4976a))
* **Table:** Implement simple Table component ([7d7d617](https://github.com/react-fabric/react-fabric/commit/7d7d617))



<a name="0.1.6"></a>
## [0.1.6](https://github.com/react-fabric/react-fabric/compare/0.1.5...0.1.6) (2016-05-31)


### Bug Fixes

* **ChoiceField:** correctly append a group id suffix to id ([dc12611](https://github.com/react-fabric/react-fabric/commit/dc12611))
* **ChoiceFieldGroup:** fix typo in defaultProps ([5820950](https://github.com/react-fabric/react-fabric/commit/5820950))



<a name="0.1.5"></a>
## [0.1.5](https://github.com/react-fabric/react-fabric/compare/0.1.4...0.1.5) (2016-05-24)


### Bug Fixes

* fix casing of lodash import ([f778dfd](https://github.com/react-fabric/react-fabric/commit/f778dfd))
* **Dialog:** fix imports ([34852d5](https://github.com/react-fabric/react-fabric/commit/34852d5))
* **Grid:** fix fabricComponent import ([869366d](https://github.com/react-fabric/react-fabric/commit/869366d))
* **NavBar:** fix scanChildren function ([0d9bc8e](https://github.com/react-fabric/react-fabric/commit/0d9bc8e))
* remove defaultValue/defaultChecked from input components to make ([bf125d0](https://github.com/react-fabric/react-fabric/commit/bf125d0))


### Features

* **ChoiceField:** implement ChoiceField component ([75b2805](https://github.com/react-fabric/react-fabric/commit/75b2805))
* **ChoiceFieldGroup:** implement ChoiceFieldGroup component ([1a2601c](https://github.com/react-fabric/react-fabric/commit/1a2601c))
* **Dialog:** Implement Dialog component ([1d28034](https://github.com/react-fabric/react-fabric/commit/1d28034))
* **Dropdown:** implement Dropdown component ([786b320](https://github.com/react-fabric/react-fabric/commit/786b320))
* **Overlay:** Implement overlay component ([1238240](https://github.com/react-fabric/react-fabric/commit/1238240))



<a name="0.1.4"></a>
## [0.1.4](https://github.com/react-fabric/react-fabric/compare/0.1.3...0.1.4) (2016-05-12)


### Bug Fixes

* add missing exports to index.js ([3f7d9ac](https://github.com/react-fabric/react-fabric/commit/3f7d9ac))
* don't use [].includes because it does not work server-side without polyfill ([ffa14ec](https://github.com/react-fabric/react-fabric/commit/ffa14ec))
* **Button:** don't invoke onClick callback when disabled ([1f0176e](https://github.com/react-fabric/react-fabric/commit/1f0176e))
* **Grid:** add support for custom props ([b0a7a20](https://github.com/react-fabric/react-fabric/commit/b0a7a20))
* **Icon:** export ALL_GLYPHS ([1a0427b](https://github.com/react-fabric/react-fabric/commit/1a0427b))
* **Icon:** use a static array of glyph names for prop validation because of server-side rendering issues ([6300e0d](https://github.com/react-fabric/react-fabric/commit/6300e0d))
* **Toggle:** add support for custom className ([61781aa](https://github.com/react-fabric/react-fabric/commit/61781aa))
* **Toggle:** use defaultChecked when checked is not set ([47897d9](https://github.com/react-fabric/react-fabric/commit/47897d9))


### Features

* **Grid:** implement Grid component ([7bdb789](https://github.com/react-fabric/react-fabric/commit/7bdb789))
* **Label:** implement Label component ([53ed5a6](https://github.com/react-fabric/react-fabric/commit/53ed5a6))
* **TextField:** Implement TextField component ([98494aa](https://github.com/react-fabric/react-fabric/commit/98494aa))
* **Toggle:** implement Toggle component ([21be9f8](https://github.com/react-fabric/react-fabric/commit/21be9f8))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/react-fabric/react-fabric/compare/0.1.2...0.1.3) (2016-05-11)


### Bug Fixes

* **Link:** Remove the hero property from Links bevause it was removed from office ([6840a17](https://github.com/react-fabric/react-fabric/commit/6840a17))
* Add missing dependency ([8672e18](https://github.com/react-fabric/react-fabric/commit/8672e18))


### Features

* **Button:** Better prop validation for glyph and description ([5db311a](https://github.com/react-fabric/react-fabric/commit/5db311a))
* **Button:** Implement Button component ([2100484](https://github.com/react-fabric/react-fabric/commit/2100484))
* **Icon:** Implement prop validation for glyph ([37e2477](https://github.com/react-fabric/react-fabric/commit/37e2477))
* **Link:** Simplify the Link component ([4ca0e4d](https://github.com/react-fabric/react-fabric/commit/4ca0e4d))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/react-fabric/react-fabric/compare/0.1.1...0.1.2) (2016-05-10)



<a name="0.1.1"></a>
## [0.1.1](https://github.com/react-fabric/react-fabric/compare/0.1.0...0.1.1) (2016-05-10)



<a name="0.1.0"></a>
# 0.1.0 (2016-05-10)



