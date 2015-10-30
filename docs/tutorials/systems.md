Systems Tutorial
================

If you haven't yet, I recommend reading the [Getting Started tutorial](https://github.com/brochington/Akkad/blob/master/docs/getting_started.md). 


Akkad has a concept of `Systems`, which are React components that represent a unit of logic, and only logic. 

## The Problem

In React, the Component is king. It receives information, has lifecycle methods, and is extremely composable. This composability is one of the things that makes React so powerful. But we can have a bit of a problem when it comes to creating "large" Components.

```
<Box
	height={100}
	width={200}
	position={[2, 9, -12]}
	color={[0, 1, 0]}
	animation={new BABYLON.Animation(...)}
	material={...}
	{...etc}
/>
```

Above is a possible way write a `<Box />` component, with a prop for each "input" that is possible for that box. Their are a couple issues with this though: 

1) The `<Box />` component will become really big once all the logic to handle each type of prop is added. 

2) Babylon is a pretty big API, and once all the functionality of it is added to Akkad, the list of props will be very long

3) Multiple possible locations for touching logic. 


The solution is break out the logic for most props(position, color, animation, etc) so that it can be reused in multiple areas, and never even added to our app if it's unused. We can achieve this quite eloquently with component composition. 

In Akkad, these `logic only` components are called `Systems`. The usage looks like this: 

```
<Box
	height={100}
	width={200}
>
	<Position vector={[2, 9, -12]}>
</Box>
```

In this simple example The `<Box />` is being positioned by the `<Position />` System. `<Box />` doesn't contain ANY specific logic/knowledge about `<Position />`.

You can still wrap component constructed in the way in a Higher Order Components, too.