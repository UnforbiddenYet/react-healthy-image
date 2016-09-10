# React Healthy Image 
React lightweight component that solves the problem of broken image removal. Zero dependencies(except React, for sure 🤓).

## Features

- Authomatically checks the broken image and changes it to the default one.
- Cache the broken image sources to prevent additional server requests made.

## Install

```bash
npm install react-healthy-image
```

## Usage

### Use built bundle

```jsx
import HealthyImage from 'react-healthy-image';

<HealthyImage src={profile.image} defaultSrc={DEFAULT_PROFILE_IMAGE_SRC}/>;
```

### Or manually import React class-based component(ES2015)

```jsx
import HealthyImage from 'react-healthy-image/src/index';
```

### If you are bored passing the `defaultSrc` prop every time, you may create a wrapper that swill pass the same defaultSrc prop. Example:

```jsx
import React from 'react';
import HealthyImage from 'react-healthy-image';

const DEFAULT_PROFILE_SRC = '/static/images/avatars/noimage.png';

export function ProfileImage(props) {
  let {src} = props;
  return <HealthyImage className='bg-white' src={src} defaultSrc={DEFAULT_PROFILE_SRC}/>
}

// and use it somewhere
import { ProfileImage } from './path/to/place-where-your-wrapper-exists/';
<ProfileImage src={user.image_src}/>
```

## Browser Support

Normal browsers and Internet Explorer 8+.

> [IE8 issues](https://github.com/xcatliu/react-ie8)


## Contributing

I welcome all contributions :)
